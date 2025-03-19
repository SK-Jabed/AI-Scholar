"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/Container";

const OurStory = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">
            AI Scholar was founded with the vision of revolutionizing online education
            through AI-powered learning experiences. We empower students with personalized
            learning paths, intelligent progress tracking, and seamless curriculum integration.
          </p>
        </div>
        <Image
          src="https://i.ibb.co.com/Z1hM0gdy/about-us.webp"
          alt="Our Story Image"
          width={500}
          height={500}
          className="rounded-xl shadow-lg"
        />
      </motion.div>
    </Container>
  );
};

export default OurStory;