/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; 
import { Button } from "./ui/button";

const UpdateBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });

  const { id } = useParams(); 
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  // Fetch blog data based on the ID from URL
  const getBlogById = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/v1/blog/get-blog/${id}`);
      console.log("Fetched Blog Data:", data);
      if (data.success) {
        setBlog(data.blogs); 
      } else {
        console.error("Error: Blog not found");
      }
    } catch (error) {
      console.log("Error fetching blog:", error);
    }
  };

  // Run when the component mounts
  useEffect(() => {
    getBlogById();
  }, [id]);

  // Handle input changes for title, description, and image
  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission to update the blog
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(`${apiUrl}/api/v1/blog/update-blog/${id}`, blog);
      if (data.success) {
        navigate(`/my-blogs`); 
      }
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Update Blog</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Blog ID (disabled) */}
        <div className="flex flex-col">
          <label htmlFor="id" className="text-sm font-medium text-white">Blog ID</label>
          <input
            type="text"
            id="id"
            value={id}
            disabled
            className="mt-1 p-2 border rounded-md bg-gray-100 text-black"
          />
        </div>

        {/* Blog Title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-medium text-white">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md"
            required
          />
        </div>

        {/* Blog Description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-medium text-white">Description</label>
          <textarea
            id="description"
            name="description"
            value={blog.description}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md"
            required
          />
        </div>

        {/* Blog Image */}
        <div className="flex flex-col">
          <label htmlFor="image" className="text-sm font-medium text-white">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={blog.image}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Update Button */}
        <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Update Blog
        </Button>
      </form>
    </div>
  );
};

export default UpdateBlog;
