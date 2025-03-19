"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";

const stats = [
  { title: "Total Students", value: "50,000+" },
  { title: "Total Courses", value: "200+" },
  { title: "Total Instructors", value: "500+" },
  { title: "Total Categories", value: "30+" },
];

const StatsSection = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-md text-white"
          >
            <h3 className="text-2xl font-semibold">{stat.value}</h3>
            <p className="text-lg">{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default StatsSection;