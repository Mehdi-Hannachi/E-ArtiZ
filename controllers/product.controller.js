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

exports.deleteProduct = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.idUser });
    const product = await Product.findOne({ _id: req.params.idProduct });

    console.log(product);

    if (user._id.equals(product.userId)) {
      const deletedProduct = await Product.findByIdAndDelete({
        _id: req.params.idProduct,
      });

      res
        .status(203)
        .json({ msg: "Product deleted with success", deletedProduct });
    }
  } catch (error) {
    console.log("Delete product failed", error);
    res.status(402).json({ msg: "Delete product failed" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({ msg: "Fetch product with success", product });
  } catch (error) {
    console.log("fetch product failed", error);
    res.status(400).json({ msg: "Fetch prodcut failed" });
  }
};
