const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0/img_upload")
    .then(() => console.log("Database connected.."))
    .catch((err) => console.log("err", err));