const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
  },
});


const userModel = mongoose.model("note", userSchema)


module.exports = userModel;