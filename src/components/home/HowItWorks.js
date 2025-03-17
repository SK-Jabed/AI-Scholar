"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaBrain,
  FaCertificate,
  FaChalkboardTeacher,
} from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";

const steps = [
  {
    id: 1,
    title: "Enroll in a Course",
    description:
      "Join our platform and discover a vast library of AI-powered courses. From beginner to advanced levels, each course is designed to enhance your skills effectively. Take the first step towards mastering new knowledge with expert-curated content.",
    icon: <FaBookOpen className="text-blue-600 text-6xl" />,
    link: "/courses",
  },
  {
    id: 2,
    title: "Personalized Learning",
    description:
      "Experience a tailored learning journey with AI-driven recommendations. Our smart system adapts to your progress, providing customized resources and study plans to help you excel at your own pace.",
    icon: <FaBrain className="text-green-500 text-6xl" />,
    link: "/personalized-learning",
  },
  {
    id: 3,
    title: "Interactive Lessons",
    description:
      "Engage with dynamic content including video lectures, real-time quizzes, and AI-powered feedback. Our platform ensures an immersive learning experience that keeps you motivated and on track to success.",
    icon: <FaChalkboardTeacher className="text-yellow-500 text-6xl" />,
    link: "/interactive-lessons",
  },
  {
    id: 4,
    title: "Get Certified",
    description:
      "Complete the course and earn a verified, industry-recognized certificate. Showcase your achievements on your resume, LinkedIn, or professional portfolio to enhance your career opportunities.",
    icon: <FaCertificate className="text-purple-500 text-6xl" />,
    link: "/certification",
  },
];

export default function HowItWorks() {
  return (
    <section className="mt-14 ">
      <div className=" text-center">
        {/* Section Heading */}
        <SectionTitle
          title={"How It Works"}
          subTitle={
            "   Follow these simple steps to embark on an AI-powered learning journey. Our advanced system adapts to your needs, ensuring a smooth and engaging experience."
          }
        />

        {/* Steps Grid */}
        <div className="flex flex-col gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`flex flex-col md:flex-row items-center gap-6 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-8 
                ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Icon Side */}
              <div className="w-full md:w-1/3 flex justify-center">
                {step.icon}
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {step.description}
                </p>
                <Button
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                  asChild
                >
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
