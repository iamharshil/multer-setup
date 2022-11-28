const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    trim: true,
    maxLength: [100, "Name cannot exceed 100 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
  },
  phone: {
    type: String,
    required: [true, "Please enter phone number"],
  },
  active: {
    type: Boolean,
    required: [true, "Please enter active type"],
    default: true,
  },
  avatar: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("User", DataSchema, "users");

module.exports = User;
