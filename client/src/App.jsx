/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import Register from "./components/Register";
import { Toaster } from "./components/ui/toaster";
import UserBlog from "./components/UserBlogs";
import CreateBlog from "./components/CreateBlog";


function App() {
  return (
    <>
      <div className="bg-zinc-900 min-h-screen text-white flex flex-col">
        <NavBar />
        <Toaster/>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex-1 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold">
                    Welcome to the Blog-App!
                  </h1>
                  <p className="mt-4 text-lg font-medium">
                    I am Sanjay Solanki you can writing and reading your own
                    blogs Now..!
                  </p>
                </div>
              </div>
            }
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/my-blogs" element={<UserBlog />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
