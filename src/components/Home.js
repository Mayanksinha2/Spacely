import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import ImageCarousel from "./ImageCarousel";
import ImageGrid from "./gallary";
import Accordion from "./accordion";
import Footer from "./footer";
import TestimonialCarousel from "./TestimonialCarousel";
import WhyChooseUs from "./ChooseUs";

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
    "/Images/img1.png",
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
        <div className="mt-5 p-5 w-full max-w-5xl">
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
      <WhyChooseUs
        features={features}
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
      />

      {/* Gallery Section */}
      <div className="w-full mt-20 px-5 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Moment Captured by Us
        </h2>
        <ImageGrid />
      </div>

      {/* TestimonialCarousel Section */}
      <div className="w-full mt-20 px-5 lg:px-20">
        <TestimonialCarousel />
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
