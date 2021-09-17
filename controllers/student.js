const Student = require("../models/student");
const slugify = require("slugify");

exports.createStudent = async (req, res) => {
  try {
    const {
      studentCode,
      firstName,
      lastName,
      email,
      gender,
      dateOfBirth,
      address,
      phone,
    } = req.body.student;
    res.json(
      await new Student({
        studentCode,
        firstName,
        lastName,
        email,
        gender,
        dateOfBirth,
        address,
        phone,
        slug: slugify(studentCode + firstName),
      }).save()
    );
  } catch (err) {
    console.log(err);

    res.status(400).json({
      err: err.message,
    });
  }
};

exports.queryAll = async (req, res) =>
  res.json(await Student.find({}).sort({ createdAt: -1 }).exec());

exports.queryStudentById = async (req, res) => {
  let student = await Student.findOne({ slug: req.params.slug }).exec();
  res.json({ student });
};

exports.updateStudent = async (req, res) => {
  const {
    studentCode,
    firstName,
    lastName,
    email,
    gender,
    dateOfBirth,
    address,
    phone,
  } = req.body;

  try {
    const updated = await Student.findOneAndUpdate(
      { slug: req.params.slug },
      {
        studentCode,
        firstName,
        lastName,
        email,
        gender,
        dateOfBirth,
        address,
        phone,
        slug: slugify(studentCode + firstName),
      },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    res.json(await Student.findByIdAndDelete(req.params.id).exec());
  } catch (err) {
    console.log(err);
  }
};
