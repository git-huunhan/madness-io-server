const express = require("express");
const router = express.Router();

const { getAdminLogin, getAdminData } = require("../controllers/auth");

router.post("/getAdminLogin", getAdminLogin);
router.get("/getAdminData", getAdminData);

module.exports = router;
