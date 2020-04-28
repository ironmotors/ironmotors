const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    profilePicPath: String,
    age: Number,
    address: String,
    dni: String,
    phoneNumber: Number,
    role: {
      type: String,
      enum: ["GUEST", "USER", "ADMIN"],
      default: "GUEST",
    },
    status: {
      type: String,
      enum: ["acive", "inactive", "Pending Confirmation"],
      default: "Pending Confirmation",
    }
    // cardName: String,
    // cardNumber: Number,
    // cardExpiration: Number,
    // cardSecretCode: Number
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
