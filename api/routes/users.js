const express = require("express");
const router = express.Router();

const { getUsers, getUserById } = require("../controllers/userController");

router.get("/getUsers", getUsers);

module.exports = router;
