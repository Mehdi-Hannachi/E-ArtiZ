const express = require("express");
const {
  addProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
  updateProduct,
} = require("../controllers/product.controller");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

//  http://localhost:9000/product/addProduct
// add product

Router.post("/addProduct", isAuth(), addProduct);

//  http://localhost:9000/product/updateProduct/:idUser/:idProduct
// update Product
Router.put("/updateProduct/:idUser/:idProduct", updateProduct);

//  http://localhost:9000/product/deleteProduct/:idUser/:idProduct
// delete Product

Router.delete("/deleteProduct/:idUser/:idProduct", deleteProduct);

//  http://localhost:9000/product/getProduct/:id
// get Product by id

Router.get("/getProduct/:id", getProductById);

//  http://localhost:9000/product/getAllProducts
//getAllProducts
Router.get("/getAllProducts", getAllProducts);
module.exports = Router;
