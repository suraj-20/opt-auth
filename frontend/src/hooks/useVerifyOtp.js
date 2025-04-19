import axios from "axios";
import { useState } from "react";

const useVerifyOtp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const verifyOtp = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/user/auth/otp/verify-otp`,
        data
      );

      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
      }
      console.log(response);
      return response.data;
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Otp verification failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return { verifyOtp, loading, error };
};

export default useVerifyOtp;
