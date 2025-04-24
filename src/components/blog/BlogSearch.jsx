"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-[#F3F9FF] rounded-xl p-6 shadow-sm sticky top-6"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Search Blogs</h3>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </form>
    </motion.div>
  );
}