const express = require("express");
const router = require("./src/routes/api");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

app.use(bodyParser.json());

const URI = "mongodb://0.0.0.0/img_upload_multer";
mongoose.connect(URI, (err) => {
  if (err) throw err;
  console.log("Database connection established");
});

app.use("/user", express.static("storage/images"));

app.use("/api/v1", router);

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(418).json({
      err_code: err.code,
      err_message: err.message,
    });
  } else {
    return res.status(500).json({
      err_code: 409,
      err_message: "Something went wrong",
    });
  }
});

app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;
