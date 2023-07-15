const express = require("express");
const { createBanner } = require("../controller/bannerCtrl");

const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBanner);

module.exports = router;
