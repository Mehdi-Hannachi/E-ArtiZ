const express = require("express");
const { getUserById } = require("../controllers/user.controller");

const Router = express.Router();

// http://localhost:9000/user/getUser/:id
// get user  by id

Router.get("/getUser/:id", getUserById);

module.exports = Router;
