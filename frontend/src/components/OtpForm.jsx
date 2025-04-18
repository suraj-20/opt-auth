import React from 'react'
import OtpInput from './OtpInput'

const OtpForm = ({ step, onSendOtp, onBack }) => {
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
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        style={{ backgroundColor: "#152337a3", color: "#FFFFFF", border: "none" }}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        style={{ backgroundColor: "#152337a3", color: "#FFFFFF", border: "none" }}
                    />
                </div>

                {step === "send" ? (
                    <>
                        <div className="form-group">
                            <select style={{ backgroundColor: "#152337a3", border: "none", color: "#fff" }}>
                                <option value="" disabled selected>Select OTP Method</option>
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
                    <OtpInput />
                )}
            </form>

            <button
                type="submit"
                className="btn btn-block mt-4"
                onClick={step === "send" ? onSendOtp : undefined}
                style={{ backgroundColor: "rgb(48 55 75)", color: "#fff", border: "0.001px solid #fff" }}
            >
                {step === "send" ? "Send OTP" : "Verify OTP"}
            </button>
        </div>
    );
};

export default OtpForm
