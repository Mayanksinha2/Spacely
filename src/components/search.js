import React from "react";
import { FaSearch } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center p-4 bg-black/60 rounded-full w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-start px-4">
        <label className="text-white font-semibold text-sm">What Are You Planning</label>
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-48">
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent text-gray-700 w-full"
          />
          <span className="text-orange-500">▼</span>
        </div>
      </div>

      <div className="flex flex-col items-start px-4">
        <label className="text-white font-semibold text-sm">Where?</label>
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-48">
          <input
            type="text"
            placeholder="Search by place"
            className="outline-none bg-transparent text-gray-700 w-full"
          />
          <span className="text-orange-500">▼</span>
        </div>
      </div>

      <div className="flex flex-col items-start px-4">
        <label className="text-white font-semibold text-sm">When?</label>
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-48">
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent text-gray-700 w-full"
          />
          <span className="text-orange-500">▼</span>
        </div>
      </div>

      <button className="bg-white p-4 rounded-full ml-4">
        <FaSearch className="text-orange-500 text-lg" />
      </button>
    </div>
  );
}
