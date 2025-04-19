import React, { useRef } from "react";

const OtpInput = ({ value = [], onChange, sendOtpRes, method, contactInfo }) => {
    const inputRefs = useRef([]);
    const otp = value;

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            onChange(newOtp);

            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            if (otp[index]) {
                const newOtp = [...otp];
                newOtp[index] = '';
                onChange(newOtp);
            } else if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    return (
        <div className="form-group">
            <label className="mb-2" style={{ color: "#ffffff" }}>
                {sendOtpRes ?
                    `Enter OTP sent to your ${sendOtpRes.method} ${sendOtpRes.email || sendOtpRes.phone}` :
                    `Enter OTP sent to your ${method} ${contactInfo}`
                }
            </label>
            <div className="d-flex justify-content-between">
                {Array.isArray(otp) &&
                    otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            className="form-control text-center mx-1"
                            style={{
                                width: "55px",
                                backgroundColor: "#152337a3",
                                border: "none",
                                color: "white",
                            }}
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    ))}
            </div>
        </div>
    );
};

export default OtpInput;
