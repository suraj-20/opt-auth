// // utils/sendOtp.js
// const nodemailer = require("nodemailer");
// const twilio = require("twilio");
// const accountSid = "ACTWILIO_SID";
// const authToken = "TWILIO_AUTH_TOKEN";
// const client = twilio(accountSid, authToken);

// async function sendOtp(method, contact, otp) {
//   switch (method) {
//     case "email":
//       // Use nodemailer
//       const transporter = nodemailer.createTransport({
//         /* config */
//       });
//       await transporter.sendMail({
//         to: contact,
//         subject: "Your OTP Code",
//         text: `Your OTP is ${otp}`,
//       });
//       break;
//     case "sms":
//       await client.messages.create({
//         body: `Your OTP is ${otp}`,
//         from: "TWILIO_PHONE_NUMBER",
//         to: contact,
//       });
//       break;
//     case "whatsapp":
//       await client.messages.create({
//         body: `Your OTP is ${otp}`,
//         from: "whatsapp:TWILIO_WHATSAPP_NUMBER",
//         to: `whatsapp:${contact}`,
//       });
//       break;
//   }
// }
// module.exports = sendOtp;
