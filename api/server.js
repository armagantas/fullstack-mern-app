const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;
const category = require("./routes/categories");
const cors = require("cors");

dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());

app.use("/api", category);

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
