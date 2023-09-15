import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Service", path: "/Services" },
    { name: "Gallery", path: "/Gallery" },
    { name: "AutomatonX", path: "/AutomatonX" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex lg:items-center justify-between h-16">
          <div className="flex justify-center mb-1 items-center">
            <Link to="/" className="text-gray-100 font-extrabold text-2xl">
              Indoplanet<span className="text-green-400">X</span>
            </Link>
          </div>
          <div className="transition-all hidden lg:block">
            <div className="transition-all ml-10 flex items-baseline space-x-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-300 flex flex-col items-center justify-center hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <p className="text-lg transition-all hover:text-green-400">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <button className="my-3 lg:px-7 px-5 font-bold py-2 transition-all hover:bg-white hover:text-green-400 bg-green-400 rounded-full">
            <a href="/contactus">Contact</a>
          </button>
          <div className="flex lg:hidden mt-[2px]">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="transition-all inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } lg:hidden bg-zinc-600`}
        id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
