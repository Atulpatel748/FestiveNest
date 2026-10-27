const mongoose = require("mongoose");
const Lights = require("../models/product.js");
const sampleLights = require("../init/Lights.js");

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/FestiveNest");
}

const initDB = async () => {  
  await Lights.deleteMany({});
  await Lights.insertMany(sampleLights);
  console.log("Data was initialized");
};

initDB();