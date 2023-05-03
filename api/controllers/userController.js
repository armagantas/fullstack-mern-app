const UserSchema = require("../models/user.js");

const getUsers = async (req, res) => {
  try {
    const users = await UserSchema.find();
    res.status(200).json({
      users,
      message: "Transaction completed successfully",
      success: true,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const userDetail = await UserSchema.findById(userId);
    res.status(200).json({
      userDetail,
      message: "Transaction completed successfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getUserById,
  getUsers,
};
