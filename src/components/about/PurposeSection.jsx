"use client";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const PurposeSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <motion.div
          className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-600">
            To revolutionize education by providing AI-driven tools that empower
            learners and educators to achieve their full potential.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-gray-600">
            To create a world where education is accessible, personalized, and
            transformative for everyone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;