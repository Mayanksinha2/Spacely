import React from "react";

const WhyChooseUs = ({ features, selectedFeature, setSelectedFeature }) => {
  return (
    <>
      {/* Why Choose Us Section */}
      <div className="mt-20 p-5 lg:p-10 text-center">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4">
          Why <span className="text-[#E18E47]">choose</span> us
        </h2>
      </div>

      {/* Features Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-20 px-5 lg:px-20">
        {/* Left Column with Image */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <img
            src="/Images/busines.png"
            alt="Sample"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column with Features */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center"         style={{ top: "0%", transform: "translateX(-20%)" }}>
          <div className="p-6 rounded-lg shadow-lg bg-[#0000006B] w-full lg:w-3/4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start mb-4 p-4 rounded-lg cursor-pointer ${
                  selectedFeature === index
                    ? "bg-white text-black font-bold"
                    : " text-white"
                }`}
                onClick={() => setSelectedFeature(index)}
              >
                {/* Circular Icon */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md mr-4 ${
                    selectedFeature === index
                      ? "bg-[#E18E47] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {index + 1}
                </div>

                {/* Feature Text */}
                <div>
                  <h3 className="text-lg">{feature.title}</h3>
                  <p className="text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;