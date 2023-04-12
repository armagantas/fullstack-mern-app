const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;
const cors = require("cors");
const categoriesRoute = require("./routes/categories");
const productsRoute = require("./routes/products");
const billsRouter = require("./routes/bills");

dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/categories", categoriesRoute);
app.use("/api/products", productsRoute);
app.use("/api/bills", billsRouter);
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
