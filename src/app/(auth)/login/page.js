"use client";
 
 import { FcGoogle } from "react-icons/fc";
 import { FaFacebook } from "react-icons/fa";
 
 const Login = () => {
   return (
     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 lg:py-0 py-10">
       <div className="bg-white border border-blue-500 rounded p-8 w-full max-w-md">
         <h2 className="text-3xl font-semibold text-center text-gray-700">
           Welcome Back
         </h2>
         <p className="text-gray-500 text-center mb-6">Login to your account</p>
 
         <form className="space-y-4">
           <div>
             <label className="block text-gray-600 text-sm font-medium mb-1">
               Email
             </label>
             <input
               type="email"
               placeholder="you@example.com"
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
               placeholder="••••••••"
               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               required
             />
           </div>
 
           <button
             type="submit"
             className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
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
         <div className="space-y-3">
           <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-3 rounded-lg shadow hover:bg-gray-100 transition">
             <FcGoogle className="text-2xl" />
             <span className="text-gray-700 font-medium">Login with Google</span>
           </button>
 
           <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition">
             <FaFacebook className="text-2xl" />
             <span className="font-medium">Login with Facebook</span>
           </button>
 
           
         </div>
 
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
