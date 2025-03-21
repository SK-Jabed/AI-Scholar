import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white">
      {/* Wave Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block h-[600px] fill-white"
          ></path>
        </svg>
      </div>

      {/* Newsletter Section */}
      <div className="relative top-32 flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-8 border border-white/30 backdrop-blur-lg bg-white/10 rounded-2xl shadow-lg mt-20">
        <h2 className="text-2xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-200 text-center mb-6">
          Get the latest updates and exclusive content.
        </p>
        <div className="flex w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-transparent border border-white/40 rounded-l-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-r-lg transition-all">
            Subscribe
          </button>
        </div>
      </div>

      {/* 5-Column Grid Layout */}
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-8 p-20 mt-24">
        {/* Column 1: Application Name, Description, Social Links */}
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-blue-500">AI Scholar</h2>
          <p className="text-gray-300">
            Empowering learners with AI-driven education. Explore our platform
            for personalized learning and skill development.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-blue-500 transform hover:scale-125 transition-all duration-150 ease-in-out"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-500 transform hover:scale-125 transition-all duration-150 ease-in-out"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-500 transform hover:scale-125 transition-all duration-150 ease-in-out"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-500 transform hover:scale-125 transition-all duration-150 ease-in-out"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Features
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Reviews
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Features */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-4">Features</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Course Management
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                User Management
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Course Recommendation
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Progress Tracker
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                AI Assistant
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Integrations
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Compliance */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-4">
            Compliance
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                GDPR
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                WCAG
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                SSR
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                SOC 2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-500">
                21 CFR
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {Year} AI Scholar. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-blue-500">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-500">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
