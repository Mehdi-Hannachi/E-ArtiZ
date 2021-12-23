require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const connectDB = require("./config/connectDB");
const multer = require("multer");
const auth = require("./routes/auth");
const product = require("./routes/product");
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
app.use("/auth", auth);
app.use("/product", product);

connectDB();
app.listen(process.env.PORT, (err) => {
  err
    ? console.log("server connection failed", err)
    : console.log("server connected successfuly");
});
