import React, { useState } from 'react';
import { FaHeartbeat, FaShoppingCart, FaHome, FaInfoCircle, FaBars, FaTimes, FaCapsules } from 'react-icons/fa';
import { useCart } from '../../product/context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          <FaHeartbeat className="text-red-500" />
          MediBot
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 text-lg">
          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <FaHome /> Home
          </li>
          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer py-1">
            <FaCapsules /> Medicines
          </li>
          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <FaInfoCircle /> About
          </li>
          <li className="relative">
            <FaShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 cursor-pointer" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartItems.length}
              </span>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <FaShoppingCart className="text-2xl text-gray-700 mr-4 hover:text-blue-600 cursor-pointer" />
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-inner">
          <ul className="flex flex-col space-y-3 text-gray-700 text-lg">
            <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer py-1">
              <FaHome /> Home
            </li>
            <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer py-1">
              <FaCapsules /> Medicines
            </li>
            <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer py-1">
              <FaInfoCircle /> About
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
