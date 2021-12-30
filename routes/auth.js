const express = require("express");
const { userRegister, userLogin } = require("../controllers/auth.controller");

const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

//  http://localhost:9000/user/register
// User register

Router.post("/register", userRegister);

//  http://localhost:9000/user/login
// User login

Router.post("/login", userLogin);

//  http://localhost:9000/user/currentUser
// get auth user

Router.get("/currentUser", isAuth(), (req, res) => {
  res.json(req.user);
});

module.exports = Router;
