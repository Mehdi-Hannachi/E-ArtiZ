/**************  Add Product ********** */

const Product = require("../models/Product");
const User = require("../models/User");

exports.addProduct = async (req, res) => {
  console.log(req.user._id);
  const newProduct = new Product({
    userId: req.user._id,
    ...req.body,
  });

  try {
    const product = await newProduct.save();

    const user = await User.findOne({ _id: req.user._id });

    console.log(user);

    user.products = [...user.products, newProduct.id];

    await user.save();

    res.status(203).json({ msg: "Product added successfully", product, user });
  } catch (error) {
    console.log("add product failed", error);
    res.status(403).json({ msg: "Add product failed" });
  }
};
