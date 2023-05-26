const mongoose = require("mongoose");
require("dotenv").config();
const URL = process.env.MONGODB_URI;


mongoose
    .connect(URL)
    .then((db) => console.log("DB Connect"))
    .catch((error) => console.error(error));

module.exports = mongoose;


