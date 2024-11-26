/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

const Login = () => {
  const [loading] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center bg-zinc-900 min-h-screen px-4 sm:px-6 md:px-8">
        <form className="w-full max-w-md p-8 border border-gray-600 rounded-lg bg-zinc-900 hover:bg-zinc-950 duration-500 shadow-lg">
          <div className="mb-6 text-center">
            <h1 className="font-extrabold text-3xl sm:text-4xl text-white">
              Blog App
            </h1>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Welcome back! Please login to continue.
            </p>
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <div className="relative">
              <Input
                type="email"
                placeholder="Email"
                name="email"
                className="pl-10 w-full py-3 px-10 sm:px-11 rounded-md border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
              />
              <Mail className="absolute inset-y-2 left-3 text-gray-500" />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <div className="relative">
              <Input
                type="password"
                placeholder="Password"
                name="password"
                className="pl-10 w-full py-3 px-10 sm:px-11 rounded-md border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
              />
              <LockKeyhole className="absolute inset-y-2 left-3 text-gray-500" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-8">
            {loading ? (
              <Button
                disabled
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
              >
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Please Wait...
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full py-3 bg-gray-600 hover:bg-gray-900 transition-colors duration-500 text-white rounded-md"
              >
                Login
              </Button>
            )}
          </div>

          <div className="mt-6 text-center">
            <Separator />
            <p className="mt-4 text-gray-300 text-sm sm:text-base">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="text-blue-400 hover:text-blue-500"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
