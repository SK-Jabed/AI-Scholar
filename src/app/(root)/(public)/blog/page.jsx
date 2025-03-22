import React from "react";
import BlogArticle from "./BlogArticle";



export default function Blog() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto w-full bg-white shadow rounded p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Ai-Scholar's Blog
        </h1>
        <p className="text-gray-600 text-lg">
          Welcome to our blog. Stay tuned for amazing articles and insights.
        </p>
      </div>
      <div>
        <BlogArticle/>
      </div>
    </div>
  );
}
