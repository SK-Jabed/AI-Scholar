"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  { title: "Total Students", value: "5000+" },
  { title: "Total Courses", value: "100+" },
  { title: "Total Instructors", value: "250+" },
  { title: "Total Categories", value: "20+" },
];

const StatsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="grid md:grid-cols-4 gap-6 text-center">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
          className="p-6 backdrop-blur-md rounded-xl shadow-lg text-primary bg-white border-2 border-gray-200"
        >
          <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
          <p className="text-lg font-medium text-gray-700">{stat.title}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsSection;
