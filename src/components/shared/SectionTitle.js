"use client";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center space-y-4"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-accent">{title}</h2>
      {subTitle && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto text-base-content/80"
        >
          {subTitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
