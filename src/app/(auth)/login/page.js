"use client";


import SocialLogin from "@/components/shared/SocialLogin";
import { doCredentialLogin } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const response = await doCredentialLogin(formData);

      if (response.error) {
        setError(response.error.message);
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError("Check your credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 lg:py-0 py-10">
      <div className="bg-white border border-blue-500 rounded p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center mb-6">Login to your account</p>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label
              className="block text-gray-600 text-sm font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-600 text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <p className="font-semibold text-red-600">{error}</p>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="border-b border-gray-300 flex-1"></div>
          <span className="text-gray-500 px-3 text-sm">or login with</span>
          <div className="border-b border-gray-300 flex-1"></div>
        </div>

        {/* Social Login Buttons */}
        <SocialLogin />

        <p className="text-sm text-gray-500 text-center mt-4">
          New to AI Scholar?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
