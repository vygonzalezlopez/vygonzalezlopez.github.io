const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  id:           { type: String, required: true, unique: true },
  sku:          { type: String, required: true },
  name:         { type: String, required: true },
  manufacturer: { type: String, required: true },
  qty:          { type: Number, required: true }
});

const Item = mongoose.model("items", itemSchema);
module.exports = Item;
