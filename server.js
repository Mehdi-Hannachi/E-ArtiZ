const express = require("express");
const app = express();
const port = 9000;
app.listen(port, (err) => {
  err
    ? console.log("server connection failed", err)
    : console.log("server connected successfuly");
});
