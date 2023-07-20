const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  name: String,
  marks: Number,
  roll: Number,
});

module.exports = mongoose.model("markshits", studentSchema);
