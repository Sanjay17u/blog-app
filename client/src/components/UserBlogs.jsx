/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const UserBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  // get user blogs
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      if (!id) {
        console.error("User ID not found in local storage");
        return;
      }

      const { data } = await axios.get(`${apiUrl}/api/v1/blog/user-blog/${id}`);

      console.log("API Response:", data);

      if (data?.success && data?.userBlog?.blogs) {
        setBlogs(data.userBlog.blogs);
      } else {
        console.error("Error: Blogs data not found or success flag false");
      }
    } catch (error) {
      console.log("Error fetching user blogs:", error);
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);

  console.log(blogs);

  useEffect(() => {
    getUserBlogs();
  }, []);
  console.log(blogs);

  return (
    <>
      {blogs && blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 p-6">
          {blogs.map((blog, index) => (
            <div key={index} className="group">
              <Card className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-all duration-500 ease-in-out h-full max-w-xs">
                {/* Top Image */}
                <CardHeader className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>

                {/* Title */}
                <CardContent className="p-4 flex flex-col justify-between ">
                  <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </CardTitle>
                  {/* Description */}
                  <CardDescription className="text-gray-600 text-sm mb-4 flex-grow">
                    {blog.description}
                  </CardDescription>
                  <CardFooter className="p-0 text-center mt-auto">
                    <div className="flex justify-between space-x-4 w-full">
                      {/* Update Button */}
                      <button className="bg-blue-500 text-white text-xs font-bold px-4 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                        Update
                      </button>

                      {/* Delete Button */}
                      <button className="bg-red-500 text-white text-xs font-bold px-4 rounded-full hover:bg-red-600 transition duration-300 transform hover:scale-105">
                        Delete
                      </button>
                    </div>
                  </CardFooter>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <h1>You don&apos;t have any blogs yet</h1>
      )}
    </>
  );
};

export default UserBlog;
