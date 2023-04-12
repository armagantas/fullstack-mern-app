const BillSchema = require("../models/bill.js");

const createBill = async (req, res) => {
  try {
    const newBill = await BillSchema.create(req.body);
    res.status(201).json({
      newBill,
      message: "Bill has been created.",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getBills = async (req, res) => {
  try {
    const getBill = await BillSchema.find();
    res.status(200).json({
      getBill,
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
    const detailBill = await BillSchema.findById(id);
    res.status(200).json({
      detailBill,
      message: "Transaction completed successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateBill = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBill = await BillSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      updateBill,
      message: "Bill has been updated",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBill = async (req, res) => {
  try {
    const { id } = req.params;
    await BillSchema.findByIdAndRemove(id);
    res.status(201).json({
      message: "Bill has been removed.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBills,
  getDetail,
  updateBill,
  deleteBill,
  createBill,
};
