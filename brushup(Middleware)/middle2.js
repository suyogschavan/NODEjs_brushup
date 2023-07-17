const express = require('express');
const middleware = require('./middleware')
const app = express();


app.get('',(req, res)=>{
    res.send("This is HOME page");
});

app.get('/about',middleware,(req,res)=>{
    res.send("This is ABOUT page");
});

app.get('/users', (req, res)=>{
    res.send("This is USERS page");
})

app.listen(5000);