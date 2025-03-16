import React from "react";

const ImageCarousel = ({ images, currentIndex, handlePrev, handleNext }) => {
  // Determine the number of images to show based on screen size
  const imagesToShow = window.innerWidth >= 1024 ? 4 : 1; // 4 images for desktop, 1 for smaller devices
  const imageWidthPercentage =  17.8;        // 100 / imagesToShow; Calculate width percentage for each image

  return (
    <div className="relative w-full max-w-4xl bg-gray-200 overflow-hidden">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * imageWidthPercentage}%)`,
          width: `${images.length * imageWidthPercentage}%`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="object-cover"
            style={{
              width: `${imageWidthPercentage}%`, // Dynamically set the width of each image
            }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
