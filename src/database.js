const mongoose = require("mongoose");
const URL =
    "mongodb+srv://root:admin@cluster0.bdy5jkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
    .connect(URL)
    .then((db) => console.log("DB Connect"))
    .catch((error) => console.error(error));

module.exports = mongoose;


