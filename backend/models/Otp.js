const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const otpSchema = new mongoose.Schema(
  {
    mobile: {
      type: String,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: "Mobile number must be exactly 10 digits long.",
      },
    },
    email: {
      type: String,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
      default: "",
    },
    otp: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      expires: 300, // TTL index: 5 mins
    },
  },
  {
    timestamps: true,
  }
);

// Hash OTP before saving
// otpSchema.pre("save", async function (next) {
//   if (!this.isModified("otp")) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.otp = await bcrypt.hash(this.otp, salt);
//   next();
// });

module.exports = mongoose.model("Otp", otpSchema);

