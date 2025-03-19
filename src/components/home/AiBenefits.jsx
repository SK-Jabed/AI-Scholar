"use client";
import Image from "next/image";
import { FaChartLine, FaComments, FaRobot, FaShieldAlt } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const AiBenefits = () => {
  const aiFeatures = [
    {
      icon: <FaRobot size={40} className="text-[#43a047]" />,
      title: "Automated Assistance",
      description:
        "AI-powered support provides instant answers, intelligent tutoring, and 24/7 guidance for seamless learning.",
    },
    {
      icon: <FaChartLine size={40} className="text-[#fbc02d]" />,
      title: "Real-time Feedback",
      description:
        "Get immediate performance analysis with AI. Track progress, adjust study habits, and refine skills efficiently.",
    },
    {
      icon: <FaComments size={40} className="text-[#e53935]" />,
      title: "Smart Recommendations",
      description:
        "AI curates personalized course suggestions, articles, and learning materials based on your preferences.",
    },
    {
      icon: <FaShieldAlt size={40} className="text-[#1e88e5]" />,
      title: "AI-Powered Security",
      description:
        "Advanced AI-driven security ensures data protection, fraud detection, and privacy enhancements in online learning platforms.",
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section>
      <div className="mx-auto text-center">
        {/* Section Title with AOS */}
        <div
          className="lg:flex items-center gap-32"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Image
            src="/icons/swirl-icon.png"
            alt="AI Technology"
            width={100}
            height={200}
            className="hidden lg:block"
          />
          <div>
            <SectionTitle
              title={"Benefits of AI"}
              subTitle={`Unlock the power of AI to enhance learning, automate tasks, 
             and provide real-time insights. Experience the future of technology today!`}
            />
          </div>
        </div>

        {/* Features Grid with Framer Motion */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {aiFeatures.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-6 text-center border border-green-600 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }} // Initial animation state
              whileInView={{ opacity: 1, y: 0 }} // Animation when in view
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered delay
              viewport={{ once: true }} // Animate only once
            >
              {/* Floating Icon with AOS */}
              <div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full p-4 border border-green-600"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-10 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#124e66] to-[#1e88e5] opacity-0 transition-opacity duration-300 hover:opacity-10 rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiBenefits;