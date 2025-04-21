"use client";
import React, { useState } from "react";
import Image from "next/image";
import PopularBlogs from "./PopularBlogs";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function BlogArticle() {
  const [blogDetails, setBlogDetails] = useState(null);
  const [isActiveId, setActiveId] = useState(null)
  const queryClient = useQueryClient();

  const handleTitleBlog = async (id) => {
    try {
      const data = await queryClient.fetchQuery({
        queryKey: ["details", id],
        queryFn: async () => {
          const res = await axios.get(`http://localhost:5000/blogs/${id}`);
          console.log(res.data)
          return res.data.data;
        },
      });
      setBlogDetails(data);
      setActiveId(id)
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  // Format date to a readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Format description with line breaks
  const formatDescription = (description) => {
    return { __html: description.replace(/\n/g, "<br />") };
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6 md:flex md:space-x-6">
      <main className="flex-1 bg-white rounded-xl p-6">
        {!blogDetails ? (
          <p className="text-gray-500">Select a blog to view details.</p>
        ) : (
          <>
            {/* Author Info */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-300">
                <Image
                  src={blogDetails?.profile || "/default-avatar.png"}
                  alt="Instructor"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  {blogDetails.author || "Unknown Author"}
                </h3>
                <p className="text-gray-500 text-sm">
                  {formatDate(blogDetails?.postDate) || "Unknown Date"}
                </p>
              </div>
            </div>

            {/* Article Image */}
            <div className="w-full h-60 md:h-80 rounded-lg overflow-hidden mb-6">
              <Image
                src={blogDetails?.banner || "/default-banner.jpg"}
                alt="Blog Banner"
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Title & Description */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {blogDetails?.titleData}
            </h1>

            <article className="text-gray-700 leading-7 space-y-4">
              <p
                dangerouslySetInnerHTML={formatDescription(blogDetails?.descriptionData)}
              />
            </article>
          </>
        )}
      </main>

      {/* Sidebar */}
      <aside className="w-full md:w-72 mt-8 md:mt-0">
        <PopularBlogs handleTitleBlog={handleTitleBlog} isActiveId={isActiveId}/>
      </aside>
    </div>
  );
}
