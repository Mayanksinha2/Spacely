import React from "react";

const Inbox = () => {
  return (
    <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-auto flex flex-col justify-center" style={{ marginTop: "300px" }}>
      
        {/* Image */}
        <img
          src="/Images/eml.png" // Replace with your image path
          alt="Email Icon"
          className="w-48 h-48 mb-6 mx-auto" // 200px x 200px
        />

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Check Your Email
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 text-center mb-6">
        We have just emailed you the instrustions and a reset password link to Sumail_john@gmail.com. It might take a few minutes to arrive
        </p>

        {/* Button */}
        <button
          className="bg-[#E18E47] hover:bg-[#d07d3f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => (window.location.href = "/login")} // Redirect to sign-in page
        >
          Back to Sign In
        </button>

    </div>
  );
};

export default Inbox;
