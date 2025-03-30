import React from "react";
import Image from "next/image";
import { FaRegCommentDots, FaRegThumbsUp, FaShareAlt } from "react-icons/fa";

export default function BlogArticle() {
  return (
    <div className="max-w-screen-xl mx-auto p-6 md:flex md:space-x-6">
      {/* Main Content */}
      <main className="flex-1 bg-white rounded-xl p-6">
        {/* Author Info */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-300">
            <Image
              src="/assets/instructors/instructor-1.jpg"
              alt="Instructor"
              width={56}
              height={56}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-500 text-sm">March 20, 2025</p>
          </div>
        </div>

        {/* Article Image */}
        <div className="w-full h-60 md:h-80 rounded-lg overflow-hidden mb-6">
          <Image
            src="/assets/instructors/instructor-1.jpg"
            alt="Blog Banner"
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Title & Description */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          The Journey of Web Development
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Exploring the evolution of web technologies and their impact on modern
          applications.
        </p>

        {/* Article Body */}
        <article className="text-gray-700 leading-7 space-y-4">
          <p>
            Web development has seen a dramatic shift over the past few decades.
            From static HTML pages to fully interactive web applications, the
            journey has been remarkable.
          </p>
          <p>
            With the rise of frameworks like React, Vue, and Angular, developers
            can now build complex user interfaces with ease. Backend
            technologies like Node.js and databases like MongoDB have further
            enabled full-stack development.
          </p>
          <p>
            As we look to the future, technologies like AI, WebAssembly, and
            serverless architectures promise to take web development to the next
            level.
          </p>

          {/* Like, Comment, Share Buttons */}
          <div className="flex items-center space-x-6 mt-8 text-gray-600">
            <button className="flex items-center space-x-2 hover:text-blue-600 transition">
              <FaRegThumbsUp />
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-600 transition">
              <FaRegCommentDots />
              <span>Comment</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-600 transition">
              <FaShareAlt />
              <span>Share</span>
            </button>
          </div>
        </article>
      </main>

      {/* Sidebar */}
      <aside className="w-full md:w-72 mt-8 md:mt-0">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Popular Blog
          </h2>
          <ul className="space-y-3">
            <li className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
              🔖 Articles
            </li>
            <li className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
              📁 Categories
            </li>
            <li className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
              💻 Web Development
            </li>
            <li className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
              📱 Mobile Apps
            </li>
            <li className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
              🌐 UI/UX Design
            </li>
            <li className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
              🧠 Programming Tips
            </li>
            <li className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
              🚀 Tech News
            </li>
            <li className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
              📚 Tutorials
            </li>
            <li className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
              ℹ️ About
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
