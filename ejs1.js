const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('',(_, res)=>{
    res.send("Home");
})

app.get('/profile',(req, res)=>{
    const user = {
        name:'Suyog Chavan',
        email: 'suyog@test.com',
        city: 'pune',
        country:'India',
        skills:['php', 'js', 'java']
    }
    res.render('profile',{user});
})

app.listen(5000);