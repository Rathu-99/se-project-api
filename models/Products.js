const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    productTitle: {
      type: String,
      required: true,
    },
    timePeriod: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status : {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
