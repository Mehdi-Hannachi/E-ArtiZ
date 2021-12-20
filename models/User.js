const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  pseudo: String,
  fullName: String,
  email: String,
  phoneNumber: String,
  dateOfBirth: Date,
  adress: String,
  photo: {
    type: String,
  },
  password: String,
});

module.exports = User = mongoose.model("users", userSchema);
