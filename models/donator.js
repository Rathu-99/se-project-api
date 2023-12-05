const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    donatorname: { type: String, required: true},
    address: { type: String, required: true},
    phonenumber: { type: String, required: true},
    foodName: {type: String,required: true},
    foodType: {type: String,required: true},
    category: {type: String,required: true},
    mealValidTime: {type: String,required: true},
    parcels: {type: String,required: true},
    paidOrNot: {type: String,required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donator", UserSchema);