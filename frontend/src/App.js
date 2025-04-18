import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
// import SendOtp from "./pages/Login/SendOtp";
// import VerifyOtp from "./pages/Login/VerifyOtp";
import OtpPage from "./pages/OtpPage/OtpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/otp-page" element={<OtpPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
