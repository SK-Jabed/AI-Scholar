"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export default function PopularBlogs() {
  const {
    data: blogs = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["popularBlogs"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/blogs");
      return res.data?.data.slice(0, 6) || [];
    },
  });

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (isLoading) {
    return (
      <div className="bg-[#F3F9FF] rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Recent Blogs</h3>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-20 bg-gray-200 rounded animate-pulse" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-[#F3F9FF] rounded-xl p-6 shadow-sm text-center text-red-500">
        Failed to load popular blogs
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-[#F3F9FF] rounded-xl p-6 shadow-sm space-y-4 sticky top-20"
    >
      <h3 className="text-lg font-semibold text-gray-800">Recent Blogs</h3>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <Link
            key={blog._id}
            href={`/blog/${blog._id}`}
            className="group block hover:bg-white/50 p-2 rounded-lg transition-colors duration-200"
          >
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src={blog.banner || "/default-banner.jpg"}
                  alt={blog.titleData}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 line-clamp-2">
                  {blog.titleData}
                </h4>
                <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(blog.postDate)}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}