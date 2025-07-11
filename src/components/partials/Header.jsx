import React from "react";

const Header = () => {
  return (
    <>
      <nav className="bg-white sticky z-50 top-0 shadow-lg p-4">
        <div className="container mx-auto flex justify-between px-16">
          <div className="flex gap-2 items-center ">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text">Bubble Bliss</h1>
            <p>🧋</p>
          </div>
          <div className="flex gap-5">
            <a href="#" className="text-gray-600 hover:text-gray-700">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-700">Types</a>
            <a href="#" className="text-gray-600 hover:text-gray-700">Toppings</a>
            <a href="#" className="text-gray-600 hover:text-gray-700">Benefits</a>
            <a href="#" className="text-gray-600 hover:text-gray-700">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
