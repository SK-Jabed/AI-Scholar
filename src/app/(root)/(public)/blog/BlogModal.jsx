"use client";
import { EditIcon } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";

export default function BlogModal({ blog, refetch }) {
  const [blogImage, setBlogImage] = useState(blog?.banner || "");
  const [title, setTitle] = useState(blog?.titleData || "");
  const [description, setDescription] = useState(blog?.descriptionData || "");

  const handleBlogImage = async (event) => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "profile_images");
    data.append("cloud_name", "dcibmye5q");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dcibmye5q/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const imageData = await res.json();
    setBlogImage(imageData.secure_url);
  };

  const handleUpdateBlog = async (e) => {
    e.preventDefault();

    const updatedBlog = {
      titleData: title,
      descriptionData: description,
      banner: blogImage,
    };

    try {
      const res = await axios.patch(
        `http://localhost:5000/blogs/blog/${blog._id}`,
        updatedBlog
      );

      if (res.data.success) {
        document.getElementById(`blog_modal_${blog._id}`).close();
        refetch();
      }
    } catch (error) {
      console.error("Failed to update blog:", error.message);
      alert("Something went wrong while updating the blog.");
    }
  };

  return (
    <div>
      <button
        className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
        onClick={() =>
          document.getElementById(`blog_modal_${blog._id}`).showModal()
        }
      >
        <EditIcon className="w-5 h-5" />
      </button>

      <dialog id={`blog_modal_${blog._id}`} className="modal">
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-2xl mb-4 text-center text-gray-800">
            Update Blog
          </h3>

          <div className="mb-4 text-sm text-gray-600 text-center">
            Blog ID: <span className="font-mono text-blue-600">{blog._id}</span>
          </div>

          <form onSubmit={handleUpdateBlog} className="space-y-5">
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleBlogImage}
                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {blogImage && (
                <img
                  src={blogImage}
                  alt="Preview"
                  className="mt-3 w-full h-40 object-cover rounded border"
                />
              )}
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Description
              </label>
              <textarea
                name="description"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write your blog content here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                required
              ></textarea>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() =>
                  document.getElementById(`blog_modal_${blog._id}`).close()
                }
                className="bg-gray-200 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
