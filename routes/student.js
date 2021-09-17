const express = require("express");
const router = express.Router();

const {
  createStudent,
  queryAll,
  queryStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/student");

router.post("/create", createStudent);
router.get("/queryAll", queryAll);
router.get("/getById/:slug", queryStudentById);
router.put("/update/:slug", updateStudent);
router.delete("/delete/:id", deleteStudent);

module.exports = router;
