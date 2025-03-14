"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import "animate.css";

const About = () => {
  const containerRef = useRef(null);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/about.json")
      .then((response) => response.json())
      .then((data) => setMembers(data))
      .catch((error) => console.error("Error loading team data:", error));
  }, []);

  return (
    <div>
      <section className="py-12 px-6 bg-accent-content/90 ">
        <div className="max-w-6xl mx-auto text-center " ref={containerRef}>
          {/* Animated Title */}
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            About Us
          </motion.h2>

          {/* Animated Paragraph */}
          <motion.p
            className="text-lg text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            Our mission is to revolutionize online learning with AI-powered
            insights and seamless course management.
          </motion.p>

          {/* Team Members Section */}
          <div className="grid md:grid-cols-3 gap-6 ">
            {members.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                {/* Animated Image */}
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
