import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="p-2 sm:p-8 lg:p-20  about">
        <h1 className="text-2xl md:text-6xl font-semibold md:underline mb-1 ">
          Contact us
        </h1>
        <p className="md:text-3xl ">Where Innovation meets </p>
      </div>
      <div className="flex justify-between">
        <div className=" py-10 w-full" id="contact">
          <div className="container mx-auto px-4">
            <div className="grid  contact">
              {/* Left Section: Form */}
              <div className=" p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold text-[#DAD3BE] mb-6">
                  Get in Touch
                </h3>
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block  font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full mt-2 p-3   rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02995D]"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block  font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full mt-2 p-3   rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02995D]"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block  font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full mt-2 p-3   rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02995D] "
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button className="w-full text-[#eae5d7] bg-[#6B8A7A] py-2 px-4 text-xl font-semibold rounded hover:bg-[#6B8A7A] transition duration-300">
                    Send Email
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className=" p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold  mb-6">Contact Info</h3>
            <ul className="space-y-6">
              {/* Email Section */}
              <li className="flex   items-center space-x-4">
                <div className="bg-[#6B8A7A] p-4 rounded-lg hidden md:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#DAD3BE"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12h.008v.008H16.5V12zm-9 0h.008v.008H7.5V12zm1.5-4.5h9m-9 9h9M4.5 12h.008v.008H4.5V12zm15 0h.008v.008H19.5V12z"
                    />
                  </svg>
                </div>
                <div className="">
                  <h4 className="text-lg font-medium ">Mail Address</h4>
                  <p className=" hover:underline">
                    rafiahmedrabby282@gmail.com
                  </p>
                </div>
              </li>
              {/* Phone Section */}
              <li className="flex items-center space-x-4">
                <div className="bg-[#6B8A7A] p-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#DAD3BE"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 00-2 2v12a2 2 0 002 2h6l2 3h4l2-3h6a2 2 0 002-2V7a2 2 0 00-2-2H3z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium ">Call Me</h4>
                  <p className="">+8801750296501</p>
                </div>
              </li>
              {/* WhatsApp Section */}
              <li className="flex items-center space-x-4">
                <div className="bg-[#6B8A7A] p-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#DAD3BE"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 00-2 2v12a2 2 0 002 2h6l2 3h4l2-3h6a2 2 0 002-2V7a2 2 0 00-2-2H3z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium ">WhatsApp Number</h4>
                  <a
                    href="https://wa.me/8801234567890"
                    className=" hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +8801894356001
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;