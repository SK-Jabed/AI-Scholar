"use client";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaBookOpen, FaBrain, FaCertificate } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Enroll in a Course",
    description: "Sign up and explore a wide range of AI-powered courses tailored to your needs.",
    icon: <FaBookOpen className="text-blue-500 text-4xl" />,
  },
  {
    id: 2,
    title: "Personalized Learning",
    description: "AI-driven recommendations guide you through a customized learning experience.",
    icon: <FaBrain className="text-green-500 text-4xl" />,
  },
  {
    id: 3,
    title: "Interactive Lessons",
    description: "Engage with video lectures, quizzes, and real-time AI-driven feedback.",
    icon: <FaChalkboardTeacher className="text-yellow-500 text-4xl" />,
  },
  {
    id: 4,
    title: "Get Certified",
    description: "Complete the course and earn a verified certificate to showcase your skills.",
    icon: <FaCertificate className="text-purple-500 text-4xl" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-12">
          Follow these simple steps to start your learning journey with AI-powered guidance.
        </p>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center text-center border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
