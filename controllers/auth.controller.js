const User = require("../models/User");
// const multer = require("multer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/************************************ ************************** */

exports.userRegister = async (req, res) => {
  const newUser = new User({ ...req.body });

  //   console.log(newUser);

  const user = await User.findOne({ email: newUser.email });

  if (user) return res.status(402).json({ msg: "User already exist" });

  const psd = await User.findOne({ pseudo: newUser.pseudo });

  if (psd) return res.status(403).json({ msg: "Pseudo already in use" });
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);

    newUser.password = hash;

    await newUser.save();

    res.status(201).json({ msg: "User register with success" });
  } catch (error) {
    console.log("User register error", error);

    res.status(401).json({ msg: "User register failed" });
  }
};

/************************************ ************************** */

exports.userLogin = async (req, res) => {
  const email = await User.findOne({ email: req.body.email });
  const psd = await User.findOne({ pseudo: req.body.pseudo });

  const user = email || psd;

  console.log(user);

  if (!user) return res.status(404).json({ msg: "Bad credentiels" });

  const pwd = await bcrypt.compare(req.body.password, user.password);

  if (!pwd) return res.status(404).json({ msg: " Bad credentiels" });

  try {
    const payload = {
      id: user.id,
      pseudo: user.pseudo,
    };

    const token = await jwt.sign(payload, process.env.secretOrPrivateKey);

    res.status(202).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.log("Login failed", error);
    res.status(407).json({ msg: "User login failed" });
  }
};
