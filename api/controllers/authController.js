const UserSchema = require("../models/user.js");
const User = require("../models/user.js");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({
      newUser,
      message: "User has been created",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).send({ error: "User not found." });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(403).json("Invalid password");
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createUser,
  loginUser,
};
