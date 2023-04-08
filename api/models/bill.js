const mongoose = require("mongoose");

const BillSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      require: true,
    },
    customerPhoneNumber: {
      type: String,
      require: true,
    },
    paymentMode: {
      type: String,
      require: true,
    },
    cartItems: {
      type: Array,
      require: true,
    },
    Subtotal: {
      type: Number,
      require: true,
    },
    tax: {
      type: Number,
      require: true,
    },
    totalAmount: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("bills", BillSchema);
