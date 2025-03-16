import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full bg-black text-white"
      style={{ height: "35vh" }} // 35% of the screen height
    >
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        <div className="grid grid-cols-4 gap-8 w-full text-center">
          {/* Column 1 */}
          <div>
            {/* <h3 className="text-lg font-bold mb-4">Column 1</h3> */}
            <ul>
              <li className="mb-2">Company</li>
              <li className="mb-2">About Spacely</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            {/* <h3 className="text-lg font-bold mb-4">Column 2</h3> */}
            <ul>
              <li className="mb-2">Quick links</li>
              <li className="mb-2">Home page</li>
              <li>Existing page</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            {/* <h3 className="text-lg font-bold mb-4">Column 3</h3> */}
            <ul>
              <li className="mb-2">Legal</li>
              <li className="mb-2">Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            {/* <h3 className="text-lg font-bold mb-4">Column 4</h3> */}
            <ul>
              <li className="mb-2">Resources</li>
              <li className="mb-2"></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
