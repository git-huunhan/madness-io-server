const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let authSchema = new Schema(
  {
    displayName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    photoURL: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    country: {
      type: String,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    about: {
      type: String,
    },
    role: {
      type: String,
    },
    isPublic: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("auth", authSchema);
