import React from "react";
import axios from "axios";

const useSendOtp = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [sendOtpRes, setSendOtpRes] = React.useState(null);

  const sendOtp = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/user/auth/otp/send-otp`,
        data
      );
      console.log("OTP response:", response.data);
      setSendOtpRes(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to send OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return { sendOtpRes, sendOtp, loading, error };
};

export default useSendOtp;
