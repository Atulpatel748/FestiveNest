const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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

const Lights = mongoose.model("Lights",lightSchema);

const sampleLights = new Lights([
  {
    name: "LED Curtain Lights",
    category: "Decorative Lights",
    description: "Warm white curtain lights for Diwali decoration.",
    price: 799,
    image: "https://www.getdistributors.com/wp-content/uploads/2023/10/6-Best-Diwali-Light-Decoration-Ideas.jpg",
    brand: "FestiveGlow",
    specification: "3m x 3m, warm white, USB powered",
    availability: "available",
  },
  {
    name: "Diya String Lights",
    category: "String Lights",
    description: "Colorful diya-shaped LED lights for festive decoration.",
    price: 499,
    image: "https://www.thepurpletree.in/cdn/shop/products/multicolor-diya-led-curtain-lights.jpg",
    brand: "DiyaLights",
    specification: "5 meters, multicolor LEDs",
    availability: "available",
  },
  {
    name: "LED Rope Lights",
    category: "Rope Lights",
    description: "Flexible LED rope lights for balconies and walls.",
    price: 999,
    image: "https://placehold.co/600x400?text=LED+Rope+Lights",
    brand: "BrightHome",
    specification: "10 meters, multicolor, waterproof",
    availability: "available",
  },
  {
    name: "Decorative Star Lights",
    category: "Decorative Lights",
    description: "Star-shaped lights for festive decoration.",
    price: 649,
    image: "https://placehold.co/600x400?text=Star+Lights",
    brand: "StarShine",
    specification: "3 meters, warm white",
    availability: "available",
  },
  {
    name: "RGB Smart Bulb",
    category: "Smart Lighting",
    description: "Color-changing bulb for festive ambience.",
    price: 599,
    image: "https://placehold.co/600x400?text=RGB+Smart+Bulb",
    brand: "GlowTech",
    specification: "9W, RGB colors, Wi-Fi enabled",
    availability: "available",
  },
  {
    name: "Traditional Lantern Lights",
    category: "Lantern Lights",
    description: "Decorative lantern lights for Indian festivals.",
    price: 1199,
    image: "https://placehold.co/600x400?text=Lantern+Lights",
    brand: "FestiveGlow",
    specification: "Set of 2, warm white LEDs",
    availability: "unavailable",
  },
  {
    name: "Copper Wire Fairy Lights",
    category: "Fairy Lights",
    description: "Flexible fairy lights for jars and table decoration.",
    price: 299,
    image: "https://placehold.co/600x400?text=Fairy+Lights",
    brand: "SparkleHome",
    specification: "10 meters, warm white",
    availability: "available",
  },
  {
    name: "Outdoor Flood Light",
    category: "Outdoor Lights",
    description: "Bright LED floodlight for outdoor decorations.",
    price: 1499,
    image: "https://placehold.co/600x400?text=Flood+Light",
    brand: "BrightHome",
    specification: "50W, cool white, waterproof",
    availability: "available",
  },
]);

module.exports = sampleLights;
