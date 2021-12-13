const User = require("../models/User");

exports.userRegister = async (req, res) => {
  const newUser = new User({ ...req.body });

  //   console.log(newUser);

  const user = await User.findOne({ email: newUser.email });

  if (user) return res.status(402).json({ msg: "User already exist" });
  try {
    newUser.save();

    res.status(201).json({ msg: "User register with success" });
  } catch (error) {
    console.log("User register error", error);

    res.status(401).json({ msg: "User register failed" });
  }
};
