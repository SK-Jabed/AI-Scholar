"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PurposeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="text-center">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-primary">
        Our Purpose
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-up"
          className="p-8 bg-white border border-gray-200 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-4 text-accent">Our Mission</h3>
          <p className="text-lg text-gray-600">
            Our mission is to provide AI-driven learning experiences that enhance education worldwide. 
            We strive to bridge the gap between technology and learning, ensuring accessibility and 
            personalized education for students everywhere. Through cutting-edge innovations, we aim 
            to empower learners with tailored knowledge, making education more engaging and effective.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-down"
          className="p-8 bg-white border border-gray-200 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-4 text-accent">Our Vision</h3>
          <p className="text-lg text-gray-600">
            Our vision is to shape the future of education with AI-powered innovations. 
            We aspire to create a world where learning is smarter, adaptive, and personalized 
            for each individual. By leveraging artificial intelligence, we aim to make education 
            more interactive, insightful, and globally accessible, driving the next revolution in knowledge.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PurposeSection;
