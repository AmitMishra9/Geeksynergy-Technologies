import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-500 px-6 py-8 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 ml-10" />
      </div>
      <div className="relative">
        <button
          className="text-gray-800 mr-12 hover:text-gray-600 focus:outline-none"
          onClick={toggleDropdown} 
        >
          Company Info
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <h1>Company: Geeksynergy Technologies Pvt Ltd</h1>
              </div>
              <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <h2>Address: Sanjayanagar, Bengaluru-56</h2>
              </div>
              <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <h3>Phone: XXXXXXXXX09</h3>
              </div>
              <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <h4>Email: XXXXXX@gmail.com</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;