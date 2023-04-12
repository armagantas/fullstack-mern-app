const express = require("express");
const router = express.Router();
const {
  getDetail,
  createBill,
  updateBill,
  deleteBill,
  getBills,
} = require("../controllers/billController.js");

router.get("/getBills", getBills);
router.get("/getDetail/:id", getDetail);
router.post("/createBill", createBill);
router.patch("/updateBill/:id", updateBill);
router.delete("/deleteBill/:id", deleteBill);

module.exports = router;
