const mongoose = require("mongoose");
const Lights = require("../models/product.js");
const sampleLights = require("./Lights.js");

async function initDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/FestiveNest");
  await Lights.deleteMany({});
  await Lights.insertMany(sampleLights);
  console.log("Data was initialized");
  await mongoose.connection.close();
}

initDB().catch((err) => {
  console.error(err);
  process.exit(1);
});
