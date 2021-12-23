const express = require("express");
const {
  addProduct,
  deleteProduct,
  getProductById,
} = require("../controllers/product.controller");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

//  http://localhost:9000/product/addProduct
// add product

Router.post("/addProduct", isAuth(), addProduct);

//  http://localhost:9000/product/deleteProduct/:idUser/:idProduct
// delete Product

Router.delete("/deleteProduct/:idUser/:idProduct", deleteProduct);

//  http://localhost:9000/product/getProduct/:id
// get Product by id

Router.get("/getProduct/:id", getProductById);

module.exports = Router;
