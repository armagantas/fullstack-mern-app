const express = require("express");
const router = express.Router();
const {
  getDetail,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategories,
} = require("../controllers/categoryController.js");

router.route("/").get(getCategories).post(createCategory);
router
  .route("/:id")
  .get(getDetail)
  .patch(updateCategory)
  .delete(deleteCategory);

module.exports = router;
