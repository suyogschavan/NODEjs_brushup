const express = require('express');
const app = express();

app.listen(5000);

// Linking
app.get('',(req,res)=>{
    res.send(`
    <h2>Where you wan't to go?</h2><br> 
    <a href='/about'>Go to ABOUT US </a><br>
    <a href='/help'>Go to HELP</a>
    `);
});

app.get('/about',(req, res)=>{
    res.send("About us");
});

app.get('/help', (req, res)=>{
    res.send("Help Page");
});