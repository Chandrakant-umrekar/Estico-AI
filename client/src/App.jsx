import React from "react";
import BuyCredits from "./pages/BuyCredits";
import Result from "./pages/Result";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useUser } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { showLogin } = useUser();
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-26 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50/30">
      <ToastContainer position="bottom-right" />
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy-credits" element={<BuyCredits />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
