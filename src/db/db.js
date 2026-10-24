require("dotenv").config();

const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI);

  console.log("Database is Connected Successfully");
}

module.exports = connectDB;
