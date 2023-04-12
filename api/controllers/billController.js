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

module.exports = {
  getBills,
  createBill,
};
