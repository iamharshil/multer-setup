const User = require("../models/User");
const mongoose = require("mongoose");
const fs = require("fs");
const DIR = "./";

module.exports = class UserController {
  static createUser = async (req, res) => {
    let payload = req.body;
    var imgUrl = "";
    if (req.file) var imgUrl = `storage/images/${req.file.filename}`;
    payload.avatar = imgUrl;
    try {
      const userCreate = await new User(payload).save();
      return res.status(200).json({
        code: 200,
        message: "User created successfully",
        data: userCreate,
      });
    } catch (error) {
      res.status(501).json({
        code: 501,
        message: error.message,
        error: true,
      });
    }
  };
  static singleUser = async (req, res) => {
    const id = req.params.id;
    try {
      const singleUserInfo = await User.findById(id);
      const { name, email, phone, avatar } = singleUserInfo;
      var getImageName = avatar.match(/\/([^\/?#]+)[^\/]*$/);

      const singleUserData = {
        name,
        email,
        phone,
        imageUrl: `http://localhost:5000/user/${getImageName[1]}`,
      };
      return res.status(200).json({
        code: 200,
        message: "User Information",
        data: singleUserData,
      });
    } catch (error) {
      res.status(501).json({
        code: 501,
        message: error.message,
        error: true,
      });
    }
  };
};
