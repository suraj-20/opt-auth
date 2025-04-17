const Otp = require("../models/Otp");
const sendEmailOtp = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sendSmsOtp = require("../utils/sendSmsOtp");
const sendWhatsappOtp = require("../utils/sendWhatsappOtp");

exports.sendOtp = async (req, res) => {
  const { mobile, email, method } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    // Cleanup previous OTPs
    await Otp.deleteMany({ $or: [{ mobile }, { email }] });

    // Create new OTP
    const newOtp = new Otp({
      mobile,
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 mins expiry
    });

    await newOtp.save();

    // Send OTP via selected method
    if (method === "email") {
      console.log("Sending OTP via email:", email, otp);
      await sendEmailOtp(email, otp);
    } else if (method === "sms") {
      // send via Fast2SMS API
      console.log("Sending OTP via SMS:", mobile, otp);
      await sendSmsOtp(mobile, otp);
    } else if (method === "whatsapp") {
      console.log("Sending OTP via WhatsApp:", mobile, otp);
      await sendWhatsappOtp(mobile, otp);
    }

    res.status(200).json({ message: "OTP sent successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send OTP." });
  }
};

exports.verifyOtp = async (req, res) => {
  const { mobile, email, otp } = req.body;

  try {
    const existingOtp = await Otp.findOne({ $or: [{ mobile }, { email }] });
    if (!existingOtp)
      return res.status(400).json({ message: "OTP expired or not found." });

    const isMatch = await bcrypt.compare(otp, existingOtp.otp);
    if (!isMatch) return res.status(400).json({ message: "Invalid OTP." });

    await Otp.deleteOne({ _id: existingOtp._id });

    const token = jwt.sign({ mobile, email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "OTP verified successfully", token });
  } catch (err) {
    res.status(500).json({ message: "OTP verification failed." });
  }
};
