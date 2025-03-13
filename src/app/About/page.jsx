"use client"
import React, { useEffect, useState } from "react";

const About = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
      fetch("/about.json") // Fetch from the public folder
        .then((response) => response.json())
        .then((data) => setMembers(data))
        .catch((error) => console.error("Error loading team data:", error));
    }, []);
  return (
    <div>
      <section className="py-12 px-6 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our mission is to revolutionize online learning with AI-powered
            insights and seamless course management.
          </p>

          {/* Team Members */}
          <div className="grid md:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <img
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
