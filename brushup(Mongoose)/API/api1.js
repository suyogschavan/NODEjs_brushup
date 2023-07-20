const express = require('express');
require('./config');

const students = require('./students')

const app = express();

app.use(express.json())
app.post('/create',async(req, res)=>{
    
    let data = new students(req.body);
    let result = await data.save();
    console.log(result);
    res.send("DONE")
})

app.listen(5000);