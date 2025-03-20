"use client";
import React from "react";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";

const AboutDescription = () => {
  return (
    <div className="">
      <section className="mt-24">
        <div className=" mx-auto grid md:grid-cols-2 gap-8 items-center shadow-xs shadow-accent p-7 rounded-xl">
          {/* Text Content */}
          <div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              AI Scholar was founded with the vision of revolutionizing your education through AI-powered learning experiences. Our mission is to empower students and educators by providing a seamless, intuitive, and intelligent course management system.
            </p>

            <p className="flex items-center gap-2 text-base font-medium text-primary">
              <FaRegCircleCheck /> AI-Powered Progress Tracking
            </p>

            <p className="flex items-center gap-2 text-base font-medium text-primary">
              <FaRegCircleCheck /> Personalized Learning Paths
            </p>

            <p className="flex items-center gap-2 text-base font-medium text-primary">
              <FaRegCircleCheck /> Seamless Curriculum Integration
            </p>
          </div>

          {/* Image Section */}
          <div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/banners/about/who-we-are.jpg"
              alt="About AI Scholar"
              width={1000}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutDescription;
