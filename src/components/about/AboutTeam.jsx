"use client";

import * as motion from "motion/react-client";

import React, { useEffect, useRef, useState } from "react";
import "animate.css";
import AboutBanner from "@/components/about/AboutBanner";
import AboutDescription from "@/components/about/AboutDescription";

const AboutTeam = () => {
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
      <section className="py-12  bg-light ">
        <div className=" mx-auto text-center ">
          <h2 className="text-4xl font-bold ">Meet Our Team</h2>

          {/* Team Members */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 py-20 ">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-xs shadow-accent text-center w-full "
              >
                <motion.img
                  whileHover={{ scale: 2.2 }}
                  whileTap={{ scale: 0.8 }}
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-accent">{member.name}</h3>
                <p className="text-accent font-medium">{member.role}</p>
                <p className="text-accent">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTeam;
