const Mongoose = require("mongoose");

const connection = async () => {
  await Mongoose.connect("mongodb://localhost:27017/Brushup");
  const entrySchema = new Mongoose.Schema({
    name: String,
    college: String,
  });
  const entryModel = Mongoose.model("DB1", entrySchema);
  let data = new entryModel({
    name: "TESTmongoose1",
    college: "SCOE",
    city: "Pune",
  });
  let result = await data.save();
  console.log(result);
};

connection();
