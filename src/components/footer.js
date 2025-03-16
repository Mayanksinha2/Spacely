import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      {/* Top Navbar */}
      <div className="w-full flex justify-between items-center px-8 py-4 ">
        {/* Logo */}
        <div>
          <img
            src="/Images/logo.png" // Replace with your logo path
            alt="Logo"
            className="h-10"
          />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Middle Content */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2 hover:text-gray-400 cursor-pointer">
                About Spacely
              </li>
              <li className="mb-2 hover:text-gray-400 cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-gray-400 cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2 hover:text-gray-400 cursor-pointer">
                Home Page
              </li>
              <li className="mb-2 hover:text-gray-400 cursor-pointer">
                Services
              </li>
              <li className="hover:text-gray-400 cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul>
              <li className="mb-2 hover:text-gray-400 cursor-pointer">
                Privacy Policy
              </li>
              <li className="mb-2 hover:text-gray-400 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-gray-400 cursor-pointer">Disclaimer</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul>
              <li className="mb-2 hover:text-gray-400 cursor-pointer">FAQs</li>
              <li className="mb-2 hover:text-gray-400 cursor-pointer">
                Support
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                Documentation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Paragraph */}
      <div className="w-full text-center py-4 ">
        <p className="text-sm text-gray-400">
        Team Spacely 2025. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
