"use client";

import React from "react";
import BlogList from "@/components/blog/BlogList";
import { motion } from "framer-motion";
import BlogSearch from "@/components/blog/BlogSearch";
import PopularBlogs from "./PopularBlogs";

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ai-Scholar's Blog</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover insightful articles, expert opinions, and the latest trends in education and technology
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog List */}
          <div className="flex-1">
            <BlogList />
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            <BlogSearch />
            <PopularBlogs />
          </div>
        </div>
      </div>
    </div>
  );
}