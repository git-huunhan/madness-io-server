const express = require("express");
const router = express.Router();

const {
  student_create,
  all_student_info,
  student_info,
  student_update,
  student_delete,
} = require("../controllers/student.controller");

router.post("/create", student_create);
router.get("/list", all_student_info);
router.get("/student/:slug", student_info);
router.put("/student/:slug", student_update);
router.delete("/delete/:id", student_delete);

module.exports = router;
