const express = require("express");
const router = express.Router();

const { getUsers, getUserById } = require("../controllers/userController");

router.get("/getUsers", getUsers);
router.get("/getUserById/:id", getUserById);

module.exports = router;
