const express = require("express");
const router = express.Router();
const otpLimiter = require("../middleware/rateLimiter");
const { sendOtp, verifyOtp } = require("../controllers/auth");

// router.post("/send-otp", otpLimiter, sendOtp);
router.post("/send-otp" , sendOtp);
router.post("/verify-otp", verifyOtp);

module.exports = router;