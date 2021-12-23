const express = require("express");
const { addProduct } = require("../controllers/product.controller");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

//  http://localhost:9000/product/addProduct
// add product

Router.post("/addProduct", isAuth(), addProduct);

module.exports = Router;
