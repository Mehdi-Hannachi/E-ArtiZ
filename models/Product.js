const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  name: String,
  price: String,
  photo: String,
  description: String,
});

module.exports = mongoose.model("Product", productSchema);
