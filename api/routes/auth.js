const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/authController.js");

router.post("/createUser", createUser);

module.exports = router;
