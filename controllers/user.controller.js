const User = require("../models/User");

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("products");
    console.log(user);

    res.status(202).json({ msg: "Fetch user success", user });
  } catch (error) {
    console.log("fetch user failed", error);
    res.status(404).json({ msg: "Fetch user failed" });
  }
};
