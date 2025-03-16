// import React, { useState, useEffect } from "react";
// import NavBar from "./NavBar";
// import ImageCarousel from "./ImageCarousel";
// import OtpForm from "./OtpForm";

// const Forgot = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowHeight, setWindowHeight] = useState(window.innerHeight);
//   const images = [
//     "/Images/img1.png",
//     "/Images/img2.png",
//     "/Images/img3.png",
//     "/Images/img2.png",
//     "/Images/img3.png",
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowHeight(window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleCloseClick = () => {
//     // Add your close logic here
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-start">
//       <NavBar />
//       <div
//         className="w-full flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/Images/bk.png')",
//           height: `${windowHeight * 0.8}px`,
//         }}
//       >
//         <OtpForm handleCloseClick={handleCloseClick} />
//       </div>
//       <div className="w-full flex flex-col items-center mt-20 p-10">
//         <h2 className="text-2xl font-bold mb-2">
//           <span className="text-[#E18E47]">Discover</span> the perfect venue for
//           every Meetups or Creation
//         </h2>
//         <p className="text-gray-700 mb-6">you create ideas we provide area</p>
//         <div className="mt-10 p-5">
//           <ImageCarousel
//             images={images}
//             currentIndex={currentIndex}
//             handlePrev={handlePrev}
//             handleNext={handleNext}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Forgot;

import React from "react";

const OtpForm = ({ handleCloseClick, handleContinueClick }) => {
  return (
    <div
      className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-auto flex flex-col justify-center"
      style={{ marginTop: "300px" }}
    >
      <button
        className="absolute top-2 right-2 text-gray-700"
        onClick={handleCloseClick}
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-6 text-center">OTP Sent</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="otp"
          >
            Enter OTP
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="otp"
            type="text"
            placeholder="OTP"
          />
        </div>
        <div className="mb-6">
          <button
            className="bg-[#E18E47] hover:bg-[#d07d3f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
            onClick={handleContinueClick} // Call the function passed as a prop
          >
            Continue
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm">
            By creating an account, you agree with our{" "}
            <span className="text-[#E18E47]">Terms and Conditions</span> and{" "}
            <span className="text-[#E18E47]">Privacy Statement.</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default OtpForm;
