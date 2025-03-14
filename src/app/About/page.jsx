"use client";

import * as motion from "motion/react-client";

import React, { useEffect, useRef, useState } from "react";
import "animate.css";

const About = () => {
  const containerRef = useRef(null);

  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/about.json") // Fetch from the public folder
      .then((response) => response.json())
      .then((data) => setMembers(data))
      .catch((error) => console.error("Error loading team data:", error));
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible";

      const paragraph = containerRef.current?.querySelector("p");

      if (paragraph) {
        const { words } = splitText(paragraph);
      }

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);
  return (
    <div>
      <section className="py-12 px-6 bg-accent-content/90 ">
        <div className="max-w-6xl mx-auto text-center ">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-white mb-8 h1 ">
            Our mission is to revolutionize online learning with AI-powered
            insights and seamless course management.
          </p>

          {/* Team Members */}
          <div className="grid md:grid-cols-3 gap-6 ">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center "
              >
                <motion.img
                  whileHover={{ scale: 2.2 }}
                  whileTap={{ scale: 0.8 }}
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
