const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insert({
    name: "John",
    college: "SCOE",
    city: "Pune",
  });
};
insert();
