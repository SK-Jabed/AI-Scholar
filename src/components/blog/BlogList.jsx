"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Calendar, User, ArrowRight } from "lucide-react";
import Pagination from "../common/Pagination";

export default function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const {
    data: blogs = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/blogs");
      return res.data?.data || [];
    },
  });

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const truncateText = (text, length = 150) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-xl p-6 animate-pulse h-64" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
        <p className="text-red-600">Failed to load blogs. Please try again later.</p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
        <h3 className="text-xl font-medium text-gray-800 mb-2">No blogs published yet</h3>
        <p className="text-gray-600 mb-4">Check back later for new articles</p>
      </div>
    );
  }

  return (
    <div>
      <div className="space-y-6">
        {currentBlogs.map((blog, index) => (
          <motion.div
            key={blog._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#F3F9FF] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-6">
              {/* Blog Image */}
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src={blog.banner || "/default-banner.jpg"}
                  alt={blog.titleData}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Author and Date */}
              <div className="flex items-center gap-4 text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{blog.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{formatDate(blog.postDate)}</span>
                </div>
              </div>

              {/* Blog Title */}
              <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-200">
                {blog.titleData}
              </h2>

              {/* Blog Description */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {truncateText(blog.descriptionData)}
              </p>

              {/* Divider */}
              <div className="border-t border-dashed border-gray-300 my-4"></div>

              {/* Read More Button */}
              <Link
                href={`/blog/${blog._id}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 group"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}