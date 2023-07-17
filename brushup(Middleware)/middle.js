const express = require('express');
const app = express();

// middleware (creation)
const reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send("Please provide the age");
    }else{
        if(req.query.age <18){
            res.send("You cannot access this Site");
        }else{
            next();
        }
    }
}

// middleware (USE)
app.use(reqFilter);

app.get('/about',(req, res)=>{
    res.send("About page HTML");
});

app.get('', (req, res)=>{
    res.send("Home page");
});

app.listen(5000);