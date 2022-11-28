const express = require("express");
const UserController = require("../controllers/UserController");
const fileUpload = require("../utils/fileUpload");
const router = express.Router();

router.post(
  "/create-user",
  fileUpload("./storage/images"),
  UserController.createUser
);
router.get("/single-user/:id", UserController.singleUser);

module.exports = router;
