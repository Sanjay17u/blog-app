/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Menu } from "lucide-react";

const NavBar = () => {
  const isLogin = useSelector(state => state.isLogin);
  console.log(isLogin);

  return (
    <nav className="bg-zinc-900 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white font-bold text-base flex items-center space-x-9">
          <Link to="/" className="text-white">Blog-App</Link>
          
          {isLogin && (
            <div className="hidden md:flex space-x-8 ml-auto items-center">
              <Link to="/blogs" className="text-white text-base font-medium hover:text-blue-400 transition-all duration-300">
                Blogs
              </Link>
              <Link to="/blogs" className="text-white hover:text-blue-400 transition-all duration-300 text-base font-medium">
                My Blogs
              </Link>
            </div>
          )}
        </div>

        {/* Navbar Links (Desktop) */}
        {!isLogin && (
          <div className="hidden md:flex space-x-8 ml-auto">
            <Link to="/login" className="text-white hover:text-blue-400 transition-all duration-300">
              Login
            </Link>
            <Link to="/register" className="text-white hover:text-blue-400 transition-all duration-300">
              Register
            </Link>
          </div>
        )}

        {isLogin && (
          <div className="ml-4">
            <Button className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition duration-300">
              Logout
            </Button>
          </div>
         )}

        {/* Mobile NavBar (Sheet) */}
        <MobileNavBar />
      </div>
    </nav>
  );
};

export default NavBar;

const MobileNavBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={'icon'} variant="outline" className="text-white md:hidden rounded-full bg-gray-900">
          <Menu/>
        </Button>
      </SheetTrigger>

      <SheetContent className="bg-zinc-900 text-white flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle className="text-sm font-bold text-white">Blog-App</SheetTitle>
          <SheetDescription className="mt-2 text-sm"></SheetDescription>
        </SheetHeader>

        {/* Mobile Menu Links */}

        <div className="space-y-4 py-4">
        {useSelector(state => state.isLogin) && (
          <>
          <Link to="/blogs" className="block text-lg font-medium hover:text-blue-400 transition duration-300">Blogs</Link>
          <Link to="/my-blogs" className="block text-lg font-medium hover:text-blue-400 transition duration-300">My Blogs</Link>
          </>
        )}


          {!useSelector(state => state.isLogin) ? (
            <>
              <Link to="/login" className="block text-lg font-medium hover:text-blue-400 transition duration-300">Login</Link>
              <Link to="/register" className="block text-lg font-medium hover:text-blue-400 transition duration-300">Register</Link>
            </>
          ) : (
            <Button className="block w-full bg-gray-700 text-white px-5 py-2 rounded-md hover:bg-gray-800 transition duration-300">
              Logout
            </Button>
          )}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button className="bg-gray-700 w-full text-white px-5 py-2 rounded-md hover:bg-gray-800 transition duration-300">
              Close Menu
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
