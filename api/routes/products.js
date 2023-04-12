const express = require("express");
const router = express.Router();

const {
  getDetail,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/productController");

router.get("/getProducts", getProduct);
router.get("/getDetail/:id", getDetail);
router.post("/createProduct", createProduct);
router.patch("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;
