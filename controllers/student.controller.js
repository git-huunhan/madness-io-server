const Student = require("../models/student.model");
const slugify = require("slugify");

exports.student_create = async (req, res) => {
  try {
    const {
      studentcode,
      firstname,
      lastname,
      email,
      gender,
      dateofbirth,
      address,
      phone,
    } = req.body.student;
    res.json(
      await new Student({
        studentcode,
        firstname,
        lastname,
        email,
        gender,
        dateofbirth,
        address,
        phone,
        slug: slugify(studentcode + firstname),
      }).save()
    );
  } catch (err) {
    console.log(err);
  }
};

exports.all_student_info = async (req, res) =>
  res.json(await Student.find({}).sort({ createdAt: -1 }).exec());

exports.student_info = async (req, res) => {
  let student = await Student.findOne({ slug: req.params.slug }).exec();
  res.json({ student });
};

exports.student_update = async (req, res) => {
  const {
    studentcode,
    firstname,
    lastname,
    email,
    gender,
    dateofbirth,
    address,
    phone,
  } = req.body;

  try {
    const updated = await Student.findOneAndUpdate(
      { slug: req.params.slug },
      {
        studentcode,
        firstname,
        lastname,
        email,
        gender,
        dateofbirth,
        address,
        phone,
        slug: slugify(studentcode + firstname),
      },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Student update failed");
  }
};

exports.student_delete = async (req, res) => {
  try {
    res.json(await Student.findByIdAndDelete(req.params.id).exec());
  } catch (err) {
    console.log(err);
  }
};
