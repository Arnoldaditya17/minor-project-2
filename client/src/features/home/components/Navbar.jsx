import { useState } from "react";
import {
  FaHeartbeat,
  FaShoppingCart,
  FaHome,
  FaInfoCircle,
  FaBars,
  FaTimes,
  FaCapsules,
  FaClipboardList,
} from "react-icons/fa";
import { useCart } from "../../product/context/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
        >
          <FaHeartbeat className="text-red-500" />
          MediBot
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 text-lg">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <FaCapsules /> Medicines
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <FaClipboardList /> Orders
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <FaInfoCircle /> About
            </Link>
          </li>
    
<motion.li
  className="relative"
  animate={
    cartItems.length > 0
      ? { x: [0, -5, 5, -5, 5, 0] }
      : { x: 0 }
  }
  transition={
    cartItems.length > 0
      ? {
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 1.4,
          ease: 'easeInOut',
        }
      : {}
  }
>
  <Link to="/cart" className="relative inline-block">
    <FaShoppingCart className="text-2xl text-gray-700 hover:text-blue-600" />
    {cartItems.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
        {cartItems.length}
      </span>
    )}
  </Link>
</motion.li>

        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Link to="/cart" className="relative inline-block mr-5">
            <FaShoppingCart className="text-2xl text-gray-700 hover:text-blue-600" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-inner">
          <ul className="flex flex-col space-y-3 text-gray-700 text-lg">
            <li>
              <Link
                to="/"
                className="flex items-center gap-1 hover:text-blue-600 py-1"
                onClick={toggleMenu}
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="flex items-center gap-1 hover:text-blue-600 py-1"
                onClick={toggleMenu}
              >
                <FaCapsules /> Medicines
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className="flex items-center gap-1 hover:text-blue-600 py-1"
                onClick={toggleMenu}
              >
                <FaClipboardList /> Orders
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-1 hover:text-blue-600 py-1"
                onClick={toggleMenu}
              >
                <FaInfoCircle /> About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
