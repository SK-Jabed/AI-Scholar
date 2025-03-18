import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaMicrosoft } from "react-icons/fa";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border border-blue-500 rounded p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Create an Account</h2>
        <p className="text-gray-500 text-center mb-6">Join us today!</p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Imran Ahmed" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              placeholder="imran@gmail.com" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
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
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            <FcGoogle className="text-2xl" />
            <span className="text-gray-700 font-medium">Sign up with Google</span>
          </button>

          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition">
            <FaFacebook className="text-2xl" />
            <span className="font-medium">Sign up with Facebook</span>
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          Already on AI Scholar? <a href="/login" className="text-blue-500 hover:underline">LogIn</a>
        </p>
      </div>
    </div>
  );
};

export default Register;