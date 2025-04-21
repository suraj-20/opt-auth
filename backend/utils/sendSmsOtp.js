// const twilio = require("twilio");

const sendSmsOtp = async (mobile, otp) => {
  // const client = twilio(
  //   process.env.TWILIO_ACCOUNT_SID,
  //   process.env.TWILIO_AUTH_TOKEN
  // );

  // try {
  //   const message = await client.messages.create({
  //     body: `Your OTP is ${otp}`,
  //     from: process.env.TWILIO_PHONE,
  //     to: `+91${mobile}`, // assuming Indian number
  //   });

  //   console.log("SMS sent:", message.sid);
  // } catch (err) {
  //   console.error("Twilio SMS error:", err);
  //   throw err;
  // }

  // Just log the OTP for debugging or frontend demo
  console.log(`SMS OTP for ${mobile}: ${otp}`);

  // No need to throw or do anything else – just simulate success
};

module.exports = sendSmsOtp;
