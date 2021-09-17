const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    studentCode: {
      type: String,
      required: true,
      unique: true,
      index: true,
      autoIndex: false,
    },
    firstName: {
      type: String,
      required: true,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      max: 50,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
      autoIndex: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("student", studentSchema);
