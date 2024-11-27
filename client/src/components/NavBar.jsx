/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const NavBar = () => {

  // global state
  const isLogin = useSelector(state => state.isLogin) 
  console.log(isLogin);
  // 
  return (
    <>
      <nav className="bg-gray-900 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-white font-bold space-x-9 text-base flex text-center">
            <Link to="/">Blog-App</Link>

            <div className="hidden md:flex space-x-8 ml-auto items-center">
            <Link
              to="/login"
              className="text-white text-base font-medium hover:text-blue-400 transition-all duration-300"
            >
              Blogs
            </Link>

            <Link
              to="/login"
              className="text-white hover:text-blue-400 transition-all duration-300 text-base font-medium"
            >
              My Blogs
            </Link>
            </div>
          </div>

          {/* Navbar Links (Desktop) */}
          <div className="hidden md:flex space-x-8 ml-auto">
            <Link
              to="/login"
              className="text-white hover:text-blue-400 transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-white hover:text-blue-400 transition-all duration-300"
            >
              Register
            </Link>
          </div>

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
