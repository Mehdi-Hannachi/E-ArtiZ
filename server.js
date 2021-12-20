require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const connectDB = require("./config/connectDB");
const multer = require("multer");
const user = require("./routes/user");
const app = express();

//parse data

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/user", user);

connectDB();
app.listen(process.env.PORT, (err) => {
  err
    ? console.log("server connection failed", err)
    : console.log("server connected successfuly");
});
