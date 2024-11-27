/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-900 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-white text-xl font-bold">
            <a href="/">Blog-App</a>
          </div>

          {/* Navbar Links (Desktop) */}
          <div className="hidden md:flex space-x-8 ml-auto">
            <a
              href="/login"
              className="text-white hover:text-blue-400 transition-all duration-300"
            >
              Login
            </a>
            <a
              href="/register"
              className="text-white hover:text-blue-400 transition-all duration-300"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
              Menu
            </Button>
          </div>

          {/* Logout Button (can be used conditionally) */}
          <div className="ml-4">
            <Button className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition duration-300">
              Logout
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
