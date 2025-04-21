// // utils/sendWhatsappOtp.js
// const axios = require("axios");

// const instanceId = process.env.ULTRAMSG_INSTANCE_ID;
// const token = process.env.ULTRAMSG_TOKEN;

// const sendWhatsappOtp = async (toNumber, otp) => {
//   try {
//     const response = await axios.get(
//       `https://api.ultramsg.com/${instanceId}/messages/chat`,
//       {
//         params: {
//           token,
//           to: `+91${toNumber}`, // Format: +918XXXXXXXXX
//           body: `Your OTP is ${otp}`,
//         },
//       }
//     );

//     if (response.data.sent) {
//       console.log("OTP sent via WhatsApp");
//     } else {
//       console.log("Failed to send via UltraMsg:", response.data);
//     }
//   } catch (error) {
//     console.error("UltraMsg error:", error.response?.data || error.message);
//   }
// };

// module.exports = sendWhatsappOtp;

const sendWhatsappOtp = async (toNumber, otp) => {
  // Just log the OTP for debugging or frontend demo
  console.log(`OTP send to whatsapp for ${toNumber}: ${otp}`);

  // No need to throw or do anything else – just simulate success
};

module.exports = sendWhatsappOtp;
