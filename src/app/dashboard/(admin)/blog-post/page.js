"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogForm from "@/components/blog-post/blogpost";
import GradientText from "@/components/shared/GradientText";

export default function BlogPost() {
  return (
    <div>
      {/* Header with animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          <GradientText>Post a New Blog</GradientText>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Share educational content, insights, tutorials, or opinions on a
          specific topic or about online courses to engage and inform readers.
        </p>
      </motion.div>
      <BlogForm />
    </div>
  );
}
