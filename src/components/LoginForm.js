import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ handleCloseClick, handleSignUpClick }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    handleCloseClick();
    navigate("/home");
  };

  return (
    <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-auto flex flex-col justify-center" style={{ marginTop: "300px" }} >
      <button
        className="absolute top-2 right-2 text-gray-700"
        onClick={handleClose}
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="otp"
          >
            OTP
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="otp"
            type="text"
            placeholder="OTP"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              id="keepSignedIn"
            />
            <label className="text-sm" htmlFor="keepSignedIn">
              Keep me signed in
            </label>
          </div>
            Resend OTP
          
        </div>
        <a href="/home">
          <div className="mb-4 flex items-center justify-center">
            <label className="text-sm" htmlFor="useOptions">
              or use one of these options
            </label>
          </div>
        </a>
        <div className="mb-4">
          <button
            className="flex items-center justify-center text-[#E18E47] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            <img
              src="/Images/g.png"
              alt="Google Logo"
              className="w-10 h-10 mr-2"
            />
            Continue with Google
          </button>
        </div>
        <div className="mb-4">
          <button
            className="flex items-center justify-center bg-[#E18E47] hover:bg-[#d07d3f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            <img
              src="/Images/f.jpeg"
              alt="Facebook Logo"
              className="w-7 h-7 mr-2"
            />
            Continue with Facebook
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm">
            Don’t have an account?{" "}
            <a href="#" className="text-[#E18E47]" onClick={handleSignUpClick}>
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
