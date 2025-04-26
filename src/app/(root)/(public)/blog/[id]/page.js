"use client";

import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function BlogDetails({ params }) {
  const { id } = React.use(params);
  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/blogs/${id}`);
      return res.data?.data;
    },
  });

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-gray-100 rounded-xl p-6 animate-pulse h-96" />
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <p className="text-red-600">
            Failed to load blog. Please try again later.
          </p>
          <Link
            href="/blog"
            className="mt-4 inline-flex items-center text-blue-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#F3F9FF] rounded-xl shadow-sm overflow-hidden"
      >
        <div className="p-6">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Link>

          {/* Blog Image */}
          <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
            <Image
              src={blog.banner || "/default-banner.jpg"}
              alt={blog.titleData}
              fill
              className="object-cover"
            />
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden border border-gray-300">
              <Image
                src={blog.profile || "/default-avatar.png"}
                alt={blog.author}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                {blog.author}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(blog.postDate)}</span>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <article className="prose max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {blog.titleData}
            </h1>
            <div className="text-gray-700 leading-relaxed space-y-4">
              {blog.descriptionData.split("\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </motion.div>
    </div>
  );
}
