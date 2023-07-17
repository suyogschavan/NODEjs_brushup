const express = require('express');
const path = require('path');

const app = express();
const dirname = path.join(__dirname, 'views');

app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.send("HOME");
})


app.get('/profile', (req,res)=>{
    res.render(`${dirname}\profile`);
})

app.listen(5000);