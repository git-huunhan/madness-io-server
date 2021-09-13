const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    studentcode: {
      type: String,
      required: true,
      unique: true,
      index: true,
      autoIndex: false,
    },
    firstname: {
      type: String,
      required: true,
      max: 50,
    },
    lastname: {
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
    },
    dateofbirth: {
      type: Date,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
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

module.exports = mongoose.model("Student", studentSchema);
