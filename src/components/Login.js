import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import OtpForm from "./OtpForm";
import Inbox from "./InboxForm";
import NavBar from "./NavBar";
import ImageCarousel from "./ImageCarousel";

const Login = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [showInboxForm, setShowInboxForm] = useState(false); // New state for Inbox form
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const images = [
    "/Images/img1.png",
    "/Images/img2.png",
    "/Images/img3.png",
    "/Images/img2.png",
    "/Images/img3.png",
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
    setShowOtpForm(false);
    setShowInboxForm(false);
  };

  const handleOtpClick = () => {
    setShowOtpForm(true);
    setShowSignUpForm(false);
    setShowInboxForm(false);
  };

  const handleContinueClick = () => {
    setShowInboxForm(true); // Show the Inbox form
    setShowOtpForm(false);
    setShowSignUpForm(false);
  };

  const handleCloseClick = () => {
    setShowSignUpForm(false);
    setShowOtpForm(false);
    setShowInboxForm(false);
  };

  const handleSignInClick = () => {
    setShowSignUpForm(false);
    setShowOtpForm(false);
    setShowInboxForm(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <NavBar />
      <div
        className="w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/bk.png')",
          height: `${windowHeight * 0.8}px`,
        }}
      >
        {!showSignUpForm && !showOtpForm && !showInboxForm && (
          <LoginForm
            handleCloseClick={handleCloseClick}
            handleSignUpClick={handleSignUpClick}
          />
        )}
        {showSignUpForm && (
          <SignUpForm
            handleCloseClick={handleCloseClick}
            handleSignInClick={handleSignInClick}
            handleOtpClick={handleOtpClick}
          />
        )}
        {showOtpForm && (
          <OtpForm
            handleCloseClick={handleCloseClick}
            handleContinueClick={handleContinueClick} // Pass the handler for "Continue"
          />
        )}
        {showInboxForm && <Inbox />} {/* Render the Inbox form */}
      </div>
      <div className="w-full flex flex-col items-center mt-20 p-10">
        <h2 className="text-2xl font-bold mb-2">
          <span className="text-[#E18E47]">Discover</span> the perfect venue for
          every Meetups or Creation
        </h2>
        <p className="text-gray-700 mb-6">you create ideas we provide area</p>
        <div className="mt-10 p-5">
          <ImageCarousel
            images={images}
            currentIndex={currentIndex}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
