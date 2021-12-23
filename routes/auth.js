const express = require("express");
const { userRegister, userLogin } = require("../controllers/auth.controller");

const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

const multer = require("multer");

//define storage for the images

const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, "./public/uploads/images");
  },

  //add back the extension
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//upload parameters for multer
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});

// Router.post("/register", upload.single("image"), async (req, res) => {
//   console.log(req.body.data.fullName);
//   console.log(JSON.parse(req.body.data));
//   const data = JSON.parse(req.body.data);
//   console.log("data", data);
//   const newUser = await new User({
//     ...data,
//     photo: req.file.filename,
//   });

//   console.log(newUser);

//   //   console.log(newUser);

//   const user = await User.findOne({ email: newUser.email });

//   //   if (user) return res.status(402).json({ msg: "User already exist" });
//   try {
//     newUser.save();

//     res.status(201).json({ msg: "User register with success" });
//   } catch (error) {
//     console.log("User register error", error);

//     res.status(401).json({ msg: "User register failed" });
//   }
// });

Router.post("/register", userRegister);
Router.post("/login", userLogin);
Router.get("/currentUser", isAuth(), (req, res) => {
  res.json(req.user);
});

module.exports = Router;
