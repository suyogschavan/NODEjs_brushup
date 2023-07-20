const connection = require('./connection2');
const express = require('express');
const app = express();

app.use(express.json())

// getting the data from database
app.get('/', async (req, res)=>{
    let data = await connection();
    data = await data.find().toArray();
    res.send(data);
})

// Insert the data to database
app.post('/',async (req, res)=>{
    let data = await connection();
     data = data.insertOne(req.body);
    console.log("Data inserted successfully", req.body);
    res.send("Data inserted successfully: ");
})

// Delete the data from Database
app.delete('/:name', async (req, res)=>{
    // console.log(req.params.id);
    let data = await connection();
    let result = await data.deleteOne({'name':req.params.name})
    res.send(result);
    console.log(result);
})
app.listen(5000);