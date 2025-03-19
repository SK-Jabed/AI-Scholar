"use client";

import { motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle";

const faqData = [
  {
    question: "What is AI Course Management?",
    answer:
      "AI Course Management is an innovative platform that utilizes artificial intelligence to streamline and optimize the management of educational courses. It includes features such as automated grading, personalized learning paths, and insightful analytics for both students and instructors.",
  },
  {
    question: "How can AI improve education?",
    answer:
      "AI enhances education by offering personalized learning experiences, providing intelligent feedback, and automating administrative tasks. This allows educators to focus more on teaching, while students benefit from tailored learning paths and real-time performance tracking.",
  },
  {
    question: "Is the platform suitable for all types of courses?",
    answer:
      "Yes, our platform is designed to be flexible and adaptable, making it suitable for a wide range of courses, from technical and academic to creative and vocational. It supports a variety of teaching formats and content types.",
  },
  {
    question: "How does AI track student progress?",
    answer:
      "The platform uses AI to analyze student performance based on assignments, quizzes, participation, and other metrics. It identifies learning gaps and suggests personalized interventions to help students improve.",
  },
];

const Faq = () => {
  return (
    <div className="py-12 px-4 md:px-15 lg:px-40 mx-auto">
    {/* Header */}
    <SectionTitle
      title="Frequently Asked Questions"
      subTitle="Get answers to the most common questions about our AI-powered course management platform."
    />

    {/* FAQ Section */}
    <div className="space-y-2">
      {faqData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
          className="collapse collapse-arrow bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="join join-vertical bg-base-100">
            <div className="collapse collapse-arrow join-item border border-base-300 hover:bg-gray-50 transition-colors">
              <input type="radio" name="faq-accordion" defaultChecked />
              <motion.div
                className="collapse-title font-semibold"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {item.question}
              </motion.div>
              <motion.div
                className="collapse-content text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {item.answer}
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  );
};

export default Faq;
