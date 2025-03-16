import React, { useState } from "react";

const VideoContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  // Manually define the image paths
  const cards = [
    { id: 1, image: "/Images/testi1.png" },
    { id: 2, image: "/Images/testi2.png" },
    { id: 3, image: "/Images/testi3.png" },
    { id: 4, image: "/Images/testi4.png" },
    { id: 5, image: "/Images/testi4.png" },
    { id: 6, image: "/Images/testi3.png" },
    { id: 7, image: "/Images/testi2.png" },
    { id: 8, image: "/Images/testi1.png" },
    { id: 9, image: "/Images/testi4.png" },
    { id: 10, image: "/Images/testi3.png" },

  ];

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = cards.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div
      className="w-full bg-cover bg-center py-10 px-5 lg:px-20"
      style={{
        backgroundImage: "url('/path-to-your-background-image.jpg')", // Replace with your background image path
      }}
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-black">
          Over 1000+ People Trust Us
        </h2>
        <p className="text-black mt-2">Creating Memories, Together</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            {/* Image */}
            <div className="w-full h-100 bg-gray-300 rounded-lg mb-4 overflow-hidden">
              <img
                src={card.image}
                alt={`Image ${card.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-l-lg text-black ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-700"
          }`}
        >
          &lt;
        </button>
        <span className="px-4 py-2 text-black">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-r-lg text-gray ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-700"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default VideoContainer;
