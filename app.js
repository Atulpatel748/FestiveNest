const express = require('express');
const app = express();
const mongoose = require('mongoose');
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/FestiveNest");
}




app.get("/",(req,res) => {
    res.send("working");
});

app.listen(8080, () => {
    console.log("app is listening at 8080");
});