const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  pseudo: String,
  fullName: String,
  email: String,
  phoneNumber: String,
  dateOfBirth: String,
  adress: String,
  photo: {
    type: String,
  },

  role: {
    type: String,
    enum: ["client", "livreur"],
    default: "client",
  },

  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  password: String,
});

module.exports = mongoose.model("User", userSchema);
