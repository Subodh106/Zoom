const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

})

const userModel = new mongoose.model("user",userSchema);

module.exports = userModel;