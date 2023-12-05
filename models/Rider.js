const mongoose = require("mongoose");

const riderSchema = new mongoose.Schema(
  {
    company: { type: String, required: true},
    address: { type: String, required: true},
    riderName: { type: String, required: true},
    phoneNumber: {type: String, required: true},
    district: {type: String, required: true},
    city: {type: String, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rider", riderSchema);