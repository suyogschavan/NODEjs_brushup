const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Brushup");
console.log("Database connected");

const DBschema = mongoose.Schema({
  name: String,
  marks: Number,
  roll: Number,
});
console.log("Schema is created");

// INSERTION
const insertDB = async () => {
  const DBmodel = mongoose.model("markshits", DBschema);
  let newStudent = new DBmodel({
    name: "Test4",
    marks: 56,
    roll: 64,
  });
  const result = await newStudent.save();
  console.log(result);
};

// insertDB();

const updateDB = async () => {
  const DBmodel = mongoose.model("markshits", DBschema);
  let data = await DBmodel.updateOne(
    { name: "Suyog" },
    { $set: { name: "UpdatedSuyog" } }
  );
  console.log(data);
};

// updateDB();

const deleteDB = async()=>{
    const DBmodel = mongoose.model("markshits",DBschema);
    let data = await DBmodel.deleteOne({name:'Test2'});
    console.log(data);
    if(data.deletedCount==1){
        console.log("Data Deleted Successfuly");
    }
}

// deleteDB();

const readDB = async () =>{
    const DBmodel = mongoose.model("markshits",DBschema);
    let data = await DBmodel.find(); //you can check individual by adding params to find
    console.log(data);
}

// readDB();