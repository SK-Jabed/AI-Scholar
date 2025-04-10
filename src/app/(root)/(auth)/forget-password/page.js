"use client";
import Link from "next/link";

const ForgetPassword = () => {

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    console.log("Email submitted:", email);
    // Here you would typically send the email to your backend for processing
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white border border-blue-500 rounded p-8 w-full max-w-md">

        <h2 className="text-3xl font-semibold text-center text-gray-700">

          Reset Password
        </h2>
        <p className="text-gray-500 text-center mb-6">Enter your email to reset your password</p>

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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
        <div className="text-sm text-gray-500 text-center mt-4">
          <p>
            Remembered your password?{' '}
            <Link
              href="/login"
              className="text-blue-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>



    </div>
  );
}

export default ForgetPassword;