const express = require("express");
const router = express.Router();

const {
  getUserLogin,
  getUserData,
  updateUser,
} = require("../controllers/auth");

router.post("/getUserLogin", getUserLogin);
router.get("/getUserData", getUserData);
router.patch("/updateUser", updateUser);

module.exports = router;
