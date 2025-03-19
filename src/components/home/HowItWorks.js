"use client";
import { Button } from "@/components/ui/button";
import { FaBookOpen, FaBrain, FaCertificate, FaChalkboardTeacher } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    id: 1,
    title: "Enroll in a Course",
    description:
      "Join our platform and access a wide range of AI-powered courses, tailored to your skill level. Start learning with expert-curated content and interactive resources.",
    icon: <FaBookOpen className="text-blue-600 text-7xl drop-shadow-md" />,
    link: "/courses",
  },
  {
    id: 2,
    title: "Personalized Learning",
    description:
      "Experience AI-driven personalized learning that adapts to your progress, providing customized study plans and smart recommendations for better outcomes.",
    icon: <FaBrain className="text-green-500 text-7xl drop-shadow-md" />,
    link: "/personalized-learning",
  },
  {
    id: 3,
    title: "Interactive Lessons",
    description:
      "Engage with dynamic content including real-time quizzes, video lectures, and AI-powered feedback for an immersive learning experience.",
    icon: <FaChalkboardTeacher className="text-yellow-500 text-7xl drop-shadow-md" />,
    link: "/interactive-lessons",
  },
  {
    id: 4,
    title: "Get Certified",
    description:
      "Complete courses and earn industry-recognized certificates to showcase your expertise. Boost your career with verified achievements.",
    icon: <FaCertificate className="text-purple-500 text-7xl drop-shadow-md" />,
    link: "/certification",
  },
];

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="mt-14">
      <div className="text-center">
        {/* Section Heading */}
        <SectionTitle
          title="How It Works"
          subTitle="Follow these simple steps to start your AI-powered learning journey. Our intelligent system ensures an engaging and seamless experience."
        />

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="group flex flex-col md:flex-row items-center gap-6 bg-white shadow-lg rounded-xl p-8 transition-all duration-300 transform hover:scale-105"
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Icon Side */}
              <motion.div
                className="w-full md:w-1/3 flex justify-center"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.icon}
              </motion.div>

              {/* Content Side */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                <Button className="px-5 py-3 bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-blue-700 shadow-md">
                  <a href={step.link}>Learn More</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
