const express = require("express");
const dbconnect = require("./connection");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
});


// insertion
app.post('/',async(req, res)=>{
    // console.log(req.body);
    let data = await dbconnect();
    let result = await data.insertOne(req.body);
    console.log("Data Added: ", req.body)
    res.send(result)
})

app.listen(5000);
