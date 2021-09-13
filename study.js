const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/student-manager", {
  useNewUrlParser: true,
});

//* create schema

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true }, // name can't empty
  age: { type: Number, min: 1, max: 30 }, // 1 <= age <= 30
  class: classSchema,
});

//* create collection
const Student = mongoose.model("Student", studentSchema);
const Class = mongoose.model("Class", classSchema);

//* create new document
const class_1 = new Class({
  name: "CTK41",
});

const class_2 = new Class({
  name: "CTK40",
});

const class_3 = new Class({
  name: "CTK39",
});

const student_1 = new Student({
  name: "Nana",
  age: 22,
  class: class_2,
});

const student_2 = new Student({
  name: "Izu",
  age: 23,
  class: class_3,
});

const student_3 = new Student({
  name: "Mei",
  age: 21,
  class: class_1,
});

const student_4 = new Student({
  name: "Stephen",
  age: 21,
  class: class_1,
});

const student_5 = new Student({
  name: "Sara",
  age: 22,
  class: class_2,
});



//* insert all student to collection
Student.insertMany(
  [student_1, student_2, student_3, student_4, student_5],
  function (err) {}
);

Class.insertMany([class_1, class_2, class_3], function (err) {});

//* save the document
student.save();

//* updateOne() method
Student.updateOne(
  { _id: "6137139aac193054fa18aa25" },
  { age: 21 },
  function (err) {}
);

//* deleteOne()
Student.deleteOne({ name: "Mei" }, function (err) {});

//* delete all
Student.deleteMany({}, function (err) {});

//* find all student in students collection
Student.find({}, function (err, foundList) {
  console.log(foundList);
});

//* find all class in students collection
Class.find({}, function (err, foundList) {
  console.log(foundList);
});
