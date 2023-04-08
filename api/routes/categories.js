const express = require("express");
const router = express.Router();
const {
  getDetail,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategories,
} = require("../controllers/categoryController.js");

router.get("/getCategories", getCategories);
router.get("/getDetail/:id", getDetail);
router.post("/createCategory", createCategory);
router.patch("/updateCategory/:id", updateCategory);
router.delete("/deleteCategory/:id", deleteCategory);

module.exports = router;
