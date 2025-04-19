import React from 'react'
import OtpInput from './OtpInput'
import useSendOtp from '../hooks/useSendOtp'
import useVerifyOtp from '../hooks/useVerifyOtp'
import { useNavigate } from 'react-router-dom';

const OtpForm = ({ step, onSendOtp, onBack }) => {
    const naviagate = useNavigate();
    const { sendOtp, sendOtpRes, loading: sending } = useSendOtp();
    const { verifyOtp, loading: verifying } = useVerifyOtp();

    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [otp, setOtp] = React.useState(Array(6).fill(""));
    const [method, setMethod] = React.useState("email");

    const handleSubmit = async () => {
        const data = { email, phone, method };
        try {
            if (step === 'send') {
                // const data = { method };
                // if (method === 'email') data.email = email;
                // else if (method === 'sms' || method === 'whatsapp') data.phone = phone;

                await sendOtp(data);
                onSendOtp();
            } else {
                await verifyOtp({ otp: otp.join('') });
                naviagate("/", { replace: true });
            }
        } catch (err) {
            console.error("OTP Error:", err.message);
        }
    }

    const isDisabled = () => {
        if (step === "send") {
            return (
                !method ||
                (method === 'email' && !email) ||
                ((method === 'sms' || method === 'whatsapp') && !phone)
            );
        } else {
            return otp.length === 0;
        }
    }

    return (
        <div className='form-section rounded p-4 d-flex flex-column gap-4' style={{ width: "46%" }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-2 font-weight-bold" style={{ color: "#fff" }}>
                    {step === "send" ? "Send OTP" : "Verify OTP"}
                </h2>

                {step === "verify" && (
                    <button
                        onClick={onBack}
                        className="btn btn-sm w-50"
                        style={{ backgroundColor: "#7C5CFA", color: "#fff", border: "none" }}
                    >
                        ← Back
                    </button>
                )}
            </div>

            <form onSubmit={(e) => e.preventDefault()} className='d-flex flex-column gap-4'>
                {step === "send" ? (
                    <>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                style={{ backgroundColor: "#152337a3", color: "#FFFFFF", border: "none" }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Phone Number"
                                style={{ backgroundColor: "#152337a3", color: "#FFFFFF", border: "none" }}
                            />
                        </div>

                        <div className="form-group">
                            <select
                                value={method}
                                onChange={(e) => setMethod(e.target.value)}
                                style={{ backgroundColor: "#152337a3", border: "none", color: "#fff" }}
                            >
                                <option value="" disabled>Select OTP Method</option>
                                <option value="email">Email</option>
                                <option value="sms">SMS</option>
                                <option value="whatsapp">WhatsApp</option>
                            </select>
                        </div>

                        <div className="form-group form-check mb-3">
                            <input type="checkbox" className="form-check-input" id="termsCheck" />
                            <label className="form-check-label text-light mx-2" htmlFor="termsCheck">
                                I agree to the <a href="/" style={{ color: "#7C5CFA" }}>Terms & Conditions</a>
                            </label>
                        </div>
                    </>
                ) : (
                    <OtpInput value={otp} onChange={setOtp} sendOtpRes={sendOtpRes} method={method}
                        contactInfo={method === 'email' ? email : phone} />
                )}
            </form>

            <button
                type="submit"
                className="btn btn-block mt-4"
                onClick={handleSubmit}
                style={{ backgroundColor: "rgb(48 55 75)", color: "#fff", border: "0.001px solid #fff" }}
                disabled={sending || verifying || isDisabled()}
            >
                {sending || verifying ? "Please wait..." : step === 'send' ? "Send OTP" : "Verify OTP"}
            </button>
        </div>
    );
};

export default OtpForm
