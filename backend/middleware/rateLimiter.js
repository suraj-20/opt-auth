const rateLimit = require("express-rate-limit");

const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // limit to 5 OTP requests per 15 minutes
  message: "Too many OTP requests. Please try again later.",
});

module.exports = otpLimiter;
