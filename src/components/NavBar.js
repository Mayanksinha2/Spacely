import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav className="w-full flex items-center justify-between p-4 bg-gray-800 text-white">
    <a href="/Home">  <div className="flex items-center">
        <img src="/Images/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
      </div>
      </a>
      <div className="flex items-center space-x-4">
        <button className="flex items-center">
          <img src="/Images/brow.png" alt="Browse" className="w-5 h-5 mr-2" />
          Browse Space
        </button>
        <button>Blog</button>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </nav>
  );
};

export default NavBar;
