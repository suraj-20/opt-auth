import image from '../styles/images/2.3.jpg';
import OtpForm from "./OtpForm";

const VerifyOtp = ({ step, onBack }) => {
    return (
        <>
            <div className="p-4 d-flex flex-row justify-content-between align-items-center vh-100">
                {/* <div className='form-section rounded p-4 d-flex flex-column gap-4' style={{ width: "46%" }}>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="mb-2 font-weight-bold" style={{ color: "#fff" }}>Verify OTP</h2>
                        <button
                            onClick={onBack}
                            className="btn btn-sm w-50"
                            style={{ backgroundColor: "#7C5CFA", color: "#fff", border: "none" }}
                        >
                            ← Back
                        </button>
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

                        <OtpInput />
                    </form>

                    <button
                        type="submit"
                        className="btn btn-block mt-4"
                        style={{ backgroundColor: "rgb(48 55 75)", color: "#fff", border: "0.001px solid #fff" }}
                    >
                        Verify OTP
                    </button>
                </div> */}
                <OtpForm step={step} onBack={onBack} />

                <div className="carousal-section w-50 radius-10 h-100">
                    <img className='w-100 rounded h-100' src={image} alt="carousel" />
                </div>
            </div >
        </>
    );
};

export default VerifyOtp;

