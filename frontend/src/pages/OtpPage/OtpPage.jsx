import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import SendOtp from '../../components/SendOtp'
import VerifyOtp from '../../components/VerifyOtp';
import '../../styles/css/OtpTransition.css'

const OtpPage = () => {
    const [step, setStep] = useState('send');

    const handleSendOtp = () => setStep('verify');
    const handleBack = () => setStep('send');

    const slideVariants = {
        initial: (direction) => ({
            x: direction === "forward" ? "100%" : "-100%",
            opacity: 0,
            position: "absolute",
            width: "100%",
        }),
        animate: {
            x: 0,
            opacity: 1,
            position: "relative",
            transition: { duration: 1, ease: "easeInOut" },
        },
        exit: (direction) => ({
            x: direction === "forward" ? "-100%" : "100%",
            opacity: 0,
            position: "absolute",
            width: "100%",
            transition: { duration: 1, ease: "easeInOut" },
        }),
    };

    return (
        <div className="otp-container position-relative overflow-hidden" style={{ height: "100vh" }}>
            <AnimatePresence custom={step}>
                {step === "send" ? (
                    <motion.div
                        key="send"
                        custom="forward"
                        variants={slideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <SendOtp step="send" onSendOtp={handleSendOtp} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="verify"
                        custom="backward"
                        variants={slideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <VerifyOtp step="verify" onBack={handleBack} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export default OtpPage;
