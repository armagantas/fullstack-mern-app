const UserSchema = require("../models/user.js");

const createUser = async (req, res) => {
  try {
    const newUser = await UserSchema.create(req.body);
    res.status(201).json({
      newUser,
      message: "User has been created.",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
};
