import React from "react";

const SignUpForm = ({
  handleCloseClick,
  handleSignInClick,
  handleOtpClick,
}) => {
  return (
    <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-auto flex flex-col justify-center" style={{ marginTop: "300px" }}>
      <button
        className="absolute top-2 right-2 text-gray-700"
        onClick={handleCloseClick}
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
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
        <div className="mb-6">
          <button
            className="bg-[#E18E47] hover:bg-[#d07d3f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
            onClick={handleOtpClick}
          >
            Send OTP
          </button>
        </div>

        <div className="mb-4 flex items-center justify-center">
          <label className="text-sm" htmlFor="useOptions">
            or use one of these options
          </label>
        </div>
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
            Already have an account?{" "}
            <a href="#" className="text-[#E18E47]" onClick={handleSignInClick}>
              Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
