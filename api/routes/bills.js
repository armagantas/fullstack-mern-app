const express = require("express");
const router = express.Router();
const { createBill, getBills } = require("../controllers/billController.js");

router.get("/getBills", getBills);

router.post("/createBill", createBill);

module.exports = router;
