const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lightSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://www.getdistributors.com/wp-content/uploads/2023/10/6-Best-Diwali-Light-Decoration-Ideas.jpg",
    set: (v) =>
      v === ""
        ? "https://www.getdistributors.com/wp-content/uploads/2023/10/6-Best-Diwali-Light-Decoration-Ideas.jpg"
        : v,
  },
  brand : {
    type : String,
    required : true,
  },
  specification : {
    type : String,
    required : true,
  },
  availability : {
    type : String,
    required : true,
    default : "unavailable",                                                                                                                                                                                                                                                          
  }, 
});

module.exports = mongoose.model("Lights", lightSchema);
