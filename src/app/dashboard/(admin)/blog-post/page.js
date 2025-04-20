"use client";

import React, { useState } from "react";
import AllBlogs from "@/app/(root)/(public)/blog/AllBlogs";
import BlogForm from "@/components/blog-post/blogpost";

export default function BlogPost() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowForm(true)}
        className="text-xl text-center px-6 mb-6 py-3 cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 font-bold text-white shadow-lg w-fit mx-auto flex items-center gap-2"
      >
        📝 Create New Blog
      </button>
      <div>
        <BlogForm showForm={showForm} setShowForm={setShowForm} />
        <AllBlogs />
      </div>
    </div>
  );
}
