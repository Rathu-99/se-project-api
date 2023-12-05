const mongoose = require("mongoose");

const doneeSchema = new mongoose.Schema(
  {
    receivername: { type: String, required: true},
    address: { type: String, required: true},
    phonenumber: { type: String, required: true},
    parcels: {type: String, required: true},
    district: {type: String, required: true},
    city: {type: String, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donee", doneeSchema);