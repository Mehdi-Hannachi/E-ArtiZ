const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/************************************ ************************** */

exports.userRegister = async (req, res) => {
  const newUser = new User({ ...req.body });
  const user = await User.findOne({ email: newUser.email });

  try {
    if (user)
      return res
        .status(402)
        .json({ errors: [{ msg: "email already in use" }] });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);

    newUser.password = hash;

    await newUser.save();

    res.status(201).json({ msg: "User register with success" });
  } catch (error) {
    res.status(401).json({ errors: [{ msg: "User Register failed" }] });
  }
};

/************************************ ************************** */

exports.userLogin = async (req, res) => {
  const email = await User.findOne({ email: req.body.email });
  const psd = await User.findOne({ pseudo: req.body.pseudo });

  const user = email || psd;

  console.log(user);

  if (!user)
    return res.status(404).json({ errors: [{ msg: "Bad credentiels" }] });

  const pwd = await bcrypt.compare(req.body.password, user.password);
  if (!pwd)
    return res.status(404).json({ errors: [{ msg: "Bad credentiels" }] });

  try {
    const payload = {
      id: user.id,
      pseudo: user.pseudo,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      dateOfBirth: user.dateOfBirth,
      photo: user.photo,
      email: user.email,
      adress: user.adress,
    };

    const token = await jwt.sign(payload, process.env.secretOrPrivateKey);

    res.status(202).json({ token: `Bearer ${token}` });
  } catch (error) {
    return res.status(404).json({ errors: [{ msg: "User login failed" }] });
  }
};
