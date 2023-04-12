const ProductSchema = require("../models/product.js");

const createProduct = async (req, res) => {
  try {
    const newProduct = await ProductSchema.create(req.body);
    res.status(201).json({
      newProduct,
      message: "Product has been created.",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const getProduct = await ProductSchema.find();
    res.status(200).json({
      getProduct,
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
    const detailProduct = await ProductSchema.findById(id);
    res.status(200).json({
      detailProduct,
      message: "Transaction completed successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateProduct = await ProductSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      updateProduct,
      message: "Product has been updated",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductSchema.findByIdAndRemove(id);
    res.status(201).json({
      message: "Product has been removed.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProduct,
  createProduct,
  getDetail,
  updateProduct,
  deleteProduct,
};
