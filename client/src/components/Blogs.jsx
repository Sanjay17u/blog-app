/* eslint-disable react-hooks/exhaustive-deps */
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
import axios from 'axios'
import { Button } from "./ui/button";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

    const getAllBlogs = async () => {
        try {
            const {data} = await axios.get(`${apiUrl}/api/v1/blog/all-blog`)
            if(data && data.success){
                setBlogs(data?.blogs)
            }
        } catch (error) {
            console.log(error)
        }
    }
 
    useEffect(() => {
        getAllBlogs()
    },[])


  return (
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
            <CardContent className="p-4 flex flex-col justify-between h-full">
              <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </CardTitle>
              {/* Description */}
              <CardDescription className="text-gray-600 text-sm mb-4 flex-grow">
                {blog.description}
              </CardDescription>
              {/* <CardFooter className="p-0 text-center mt-auto">
                <Button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105">Create More</Button>
              </CardFooter> */}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
