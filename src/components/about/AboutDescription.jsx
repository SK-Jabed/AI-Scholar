"use client";
import React from "react";
import img from "../../../public/about.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";
const AboutDescription = () => {
  return (
    <div className="">
      <section className="py-16  ">
        <div className=" mx-auto grid md:grid-cols-2 gap-8 items-center shadow-xs shadow-accent p-7 rounded-xl">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At AI Scholar, we are revolutionizing online education with
              AI-driven insights.Our mission is to empower students and
              educators by providing a seamless, intuitive, and intelligent
              course management system.
            </p>

            <p className="flex items-center gap-2">
              <FaRegCircleCheck /> AI-Powered Progress Tracking
            </p>

            <p className="flex items-center gap-2">
              <FaRegCircleCheck /> Personalized Learning Paths
            </p>

            <p className="flex items-center gap-2">
              <FaRegCircleCheck /> Seamless Curriculum Integration
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/about.jpg" // Path from the public folder (No import needed)
              alt="About AI Scholar"
              width={1000} // Set width
              height={300} // Set height
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutDescription;