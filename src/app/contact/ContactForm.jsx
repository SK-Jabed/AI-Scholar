import React from "react";

const ContactForm = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className=" py-10 w-full" id="contact">
          <div className="container mx-auto">
            <div className="grid  ">
              {/* Left Section: Form */}
              <div className=" p-6 shadow-sm shadow-accent rounded-lg">
                <h3 className="text-4xl font-bold text-center  mb-6">Get in Touch</h3>
                <form className="grid grid-cols-2 space-x-5">
                  <div className="mb-6">
                    <label htmlFor="name" className="block  font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full mt-2 p-3  input  rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-slate-200"
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
                      className="w-full mt-2 p-3 input  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02995D] bg-slate-200"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block  font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="number"
                      id="email"
                      name="number"
                      className="w-full mt-2 p-3  input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02995D] bg-slate-200"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block  font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="subject"
                      className="w-full mt-2 p-3 input  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02995D] bg-slate-200"
                      placeholder="Your Subject"
                      required
                    />
                  </div>
                  <div className="mb-6 col-span-2">
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
                      className="w-full mt-2 p-3 textarea  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02995D] bg-slate-200 "
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <button className=" text-[#eae5d7] bg-accent py-2 px-4 text-xl font-semibold rounded hover:bg-[#6B8A7A] transition duration-300">
                      Send Email
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
