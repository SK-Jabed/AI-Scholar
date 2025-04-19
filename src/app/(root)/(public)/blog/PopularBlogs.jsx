"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function PopularBlogs({ handleTitleBlog, isActiveId }) {
  const {
    data: blogInfos = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogsTitles"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/blogs");
      return res.data?.data || [];
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong loading blogs.</p>;

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Popular Blogs
      </h2>
      <ul className="space-y-3">
        {blogInfos.map((blog) => {
          const isActive = blog._id === isActiveId;
          return (
            <li
              key={blog._id}
              className={`cursor-pointer px-3 py-2 rounded-sm truncate transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black hover:text-blue-600"
              }`}
              title={blog?.titleData}
              onClick={() => handleTitleBlog(`${blog._id}`)}
            >
              {blog?.titleData}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
