const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
app.use(express.urlencoded({extended : true}));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/FestiveNest");
  console.log("Connected to DB");
  app.listen(8080, () => {
    console.log("app is listening at 8080");
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

app.get("/",(req,res) => {
    res.send("working");
});
