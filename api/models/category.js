const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  timestapms: true,
});

module.exports = mongoose.model("category", CategorySchema);
