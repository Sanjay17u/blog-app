/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
 
const CreateBlog = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });

  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate()

  // Handle input changes
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get userId from localStorage
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("User is not logged in");
      return;
    }

    try {
      const { data } = await axios.post(`${apiUrl}/api/v1/blog/create-blog`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: userId, 
      });

      if (data.success) {
        console.log("Blog Created Successfully:", data);
        // Reset form after successful submission
        setInputs({
          title: "",
          description: "",
          image: "",
        });
        navigate('/blogs')
      } else {
        console.error("Error creating blog:", data.message);
      }
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Create a New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-white">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description Input */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-white">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={inputs.description}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>

        {/* Image URL Input */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-white">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={inputs.image}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
