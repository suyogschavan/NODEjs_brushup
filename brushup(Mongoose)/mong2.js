const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect("mongodb://localhost:27017/Brushup");

  const dataSchemas = new mongoose.Schema({
    name: String,
    marks: Number,
    roll: Number,
  });

  const dataModel = new mongoose.model("markshit", dataSchemas);
  const newdata = new dataModel({ name: "Test2", marks: 500 });
  const data = await newdata.save();
  console.log(data);
};
connection();
