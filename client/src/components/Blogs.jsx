/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from './ui/button'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogData = [
        {
          title: "Hare Krishna",
          description:
            "Lord Krishna, please engage me in Your devotional service.",
          image: "https://cdn.pixabay.com/photo/2024/04/28/09/43/ai-generated-8725194_640.jpg",
          user: "User1",
        },
        {
          title: "Ram Navmi",
          description:
            "Lord Ram bow arrow and temple background for Indian festival Ram Navmi.",
          image: "https://t3.ftcdn.net/jpg/05/84/58/80/240_F_584588037_H0FjO1I9MzQ5kuGufuljKVQvdWEJWhE7.jpg",
          user: "User2",
        },
      ];
      setBlogs(blogData);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-6">
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
            <CardContent className="p-4 flex flex-col justify-between h-full">
              <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </CardTitle>
              {/* Description */}
              <CardDescription className="text-gray-600 text-sm mb-4 flex-grow">
                {blog.description}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
