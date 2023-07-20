const express = require('express');
const dbconnect = require('./connection');
const app = express();

app.use(express.json());

app.get('/',async (req, res)=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    res.send(data)
    console.log(data);
    // res.send("SOUL");
})

app.post('/',async (req, res)=>{
    let data = await dbconnect();
    let result = await data.insertOne(req.body);
    console.log("Data inserted: ",req.body);
    res.send("Data inserted: ", result)
})

app.listen(5000)