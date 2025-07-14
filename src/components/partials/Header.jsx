import React from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <>
      <nav className="bg-white shadow-lg sticky p-4 top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between px-14">
          <div className="flex gap-2 items-center ">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text">
              Bubble Bliss
            </h1>
            <p>🧋</p>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-700">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-700">
              Types
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-700">
              Toppings
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-700">
              Benefits
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-700">
              Contact
            </a>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes className="text-gray-800" /> : "☰"}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-gray-700 text-xl">
          <a
            href="#home"
            className="hover:text-pink-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#types"
            className="hover:text-pink-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Types
          </a>
          <a
            href="#toppings"
            className="hover:text-pink-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Toppings
          </a>
          <a
            href="#benefits"
            className="hover:text-pink-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Benefits
          </a>
          <a
            href="#contact"
            className="hover:text-pink-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
