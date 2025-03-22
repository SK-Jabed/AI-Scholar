
"use client";

import SocialLogin from "@/components/shared/SocialLogin";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const name = formData.get("name")
      const email = formData.get("email")
      const password = formData.get("password")

      const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          name,
          email, 
          password
        })
      })

      response.status === 201 && router.push("/login")
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white border border-blue-500 rounded p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Create an Account
        </h2>
        <p className="text-gray-500 text-center mb-6">Join us today!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required

            />
          </div>

          <div>

            <label className="block text-gray-600 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@gmail.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required

            />
          </div>

          <div>
  
            <label className="block text-gray-600 text-sm font-medium mb-1">
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"

          >
            Register
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="border-b border-gray-300 flex-1"></div>
          <span className="text-gray-500 px-3 text-sm">or sign up with</span>
          <div className="border-b border-gray-300 flex-1"></div>
        </div>

        {/* Social Login Buttons */}

        <SocialLogin />

        <p className="text-sm text-gray-500 text-center mt-4">
          Already on AI Scholar?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            LogIn
          </a>

        </p>
      </div>
    </div>
  );
};

export default Register;
