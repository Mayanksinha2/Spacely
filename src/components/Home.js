import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import ImageCarousel from "./ImageCarousel";
import ImageGrid from "./gallary";
import Accordion from "./accordion";
import Footer from "./footer";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [selectedFeature, setSelectedFeature] = useState(2);

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

  const features = [
    {
      title: "Simple Budgeting",
      description: "Track your expenses and stay within your budget.",
    },
    {
      title: "Fast Scheduling",
      description: "Plan your events quickly and efficiently.",
    },
    {
      title: "Cover Your Bookings",
      description: "Ensure your bookings are secure and hassle-free.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <div
        className="w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/bk.png')",
          height: `${windowHeight * 0.8}px`,
        }}
      >
        {/* Background image container */}
      </div>

      {/* Introduction Section */}
      <div className="w-full flex flex-col items-center mt-20 p-5 lg:p-10">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-center">
          <span className="text-[#E18E47]">Discover</span> the perfect venue for
          every Meetups or Creation
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          You create ideas, we provide the area.
        </p>
        <div className="mt-10 p-5 w-full max-w-4xl">
          <ImageCarousel
            images={images}
            currentIndex={currentIndex}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </div>
        <button className="bg-[#E18E47] hover:bg-[#d07d3f] text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline mt-10">
          See All
        </button>
      </div>

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
        <div className="w-full lg:w-1/2 relative flex items-center justify-center">
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

      {/* Gallery Section */}
      <div className="w-full mt-20 px-5 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Moment Captured by Us
        </h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> */}
          <ImageGrid />
        {/* </div> */}
      </div>

      {/* Accordion Section */}
      <div className="w-full mt-20 px-5 lg:px-20">
        <Accordion />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
