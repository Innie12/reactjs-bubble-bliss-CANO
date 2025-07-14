import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className=" bg-gray-800 py-14">
        <div className="container mx-auto px-16 ">
          <div className="flex flex-wrap justify-between mb-6 ">
            <div>
              <div className="flex">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text">
                  Bubble Bliss
                </h3>
                <p>🧋</p>
              </div>
              <div>
                <p className="text-gray-400">Sip happiness in every cup</p>
              </div>
            </div>
            <div className="flex gap-5">
              <p>📱</p>
              <p>📷</p>
              <p>🐦</p>
              <p>📘</p>
            </div>
          </div>
          <div className="mt-5 text-gray-400 text-center border-t border-gray-500">
            <p className="mt-5">&copy;2025 Bubble Bliss. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
