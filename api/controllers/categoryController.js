const categorySchema = require("../models/category.js");

const createCategory = async (req, res) => {
  try {
    const newCategory = new categorySchema(req.body);
    await newCategory.save();
    res.status(201).json({
      message: "Category has been created.",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const getCategory = await categorySchema.find();
    res.status(200).json({
      getCategory,
      message: "Transaction completed successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const detailCategory = await categorySchema.findById(id);
    res.status(200).json({
      detailCategory,
      message: "Transaction completed successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const updateCategory = await categorySchema.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      updateCategory,
      message: "Product has been updated",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await categorySchema.findByIdAndRemove(id);
    res.status(201).json({
      message: "Product has been removed.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCategories,
  getDetail,
  updateCategory,
  deleteCategory,
  createCategory,
};
