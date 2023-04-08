const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

app.listen(port, () => {
  connect();
  console.log("Server is running on port :", port);
});
