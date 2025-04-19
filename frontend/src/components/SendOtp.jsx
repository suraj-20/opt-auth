import React from 'react'
import image from "../styles/images/2.2.jpg"
import OtpForm from './OtpForm'

const SendOtp = ({ step, onSendOtp }) => {
    return (
        <>
            <div className="p-4 d-flex flex-row justify-content-between align-items-center vh-100">
                <div className="carousal-section w-50 radius-10 h-100">
                    <img className='w-100 rounded h-100' src={image} alt="" />
                </div>
                <OtpForm step={step} onSendOtp={onSendOtp} />
                {/* <div className='form-section rounded p-4 d-flex flex-column gap-4' style={{ width: "46%" }}>
                    <h2 className="mb-2 font-weight-bold" style={{ color: "#fff" }}>Send OTP</h2>

                    <form onSubmit={(e) => e.preventDefault()} className='d-flex flex-column gap-4'>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email"
                                style={{ backgroundColor: "#152337a3", border: "none" }} />
                        </div>

                        <div className="form-group">
                            <input type="tel" name="phone" placeholder="Phone Number"
                                style={{ backgroundColor: "#152337a3", border: "none" }} />
                        </div>

                        <div className="form-group">
                            <select style={{ backgroundColor: "#152337a3", border: "none" }}>
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
                    </form>

                    <button
                        type="submit"
                        className="btn btn-block"
                        onClick={onSendOtp}
                        style={{ backgroundColor: "rgb(48 55 75)", color: "#fff", border: "0.001px solid #fff" }}
                    >
                        Send OTP
                    </button>
                </div> */}
            </div>
        </>
    )
}

export default SendOtp
