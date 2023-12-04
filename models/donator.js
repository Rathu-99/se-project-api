const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true},
    address: { type: String, required: true},
    phonenumber: { type: Number,default: 1},
    productTitle: {type: String,required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: { type: String, default: "Moratuwa Sri Lanka" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donator", UserSchema);