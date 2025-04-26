"use client";

import { Edit, X } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";

export default function BlogModal({ blog, refetch }) {
  const [blogImage, setBlogImage] = useState(blog?.banner || "");
  const [imagePreview, setImagePreview] = useState(blog?.banner || null);
  const [title, setTitle] = useState(blog?.titleData || "");
  const [description, setDescription] = useState(blog?.descriptionData || "");
  const [isUploading, setIsUploading] = useState(false);

  const handleBlogImage = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);

    setIsUploading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "profile_images");
    data.append("cloud_name", "dcibmye5q");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dcibmye5q/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const imageData = await res.json();
      setBlogImage(imageData.secure_url);
    } catch (error) {
      console.error("Image upload failed:", error);
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: "Failed to upload image. Please try again.",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = () => {
    setBlogImage("");
    setImagePreview(null);
  };

  const handleUpdateBlog = async (e) => {
    e.preventDefault();

    if (!blogImage) {
      Swal.fire({
        icon: "warning",
        title: "Image Required",
        text: "Please upload an image for your blog",
      });
      return;
    }

    const updatedBlog = {
      titleData: title,
      descriptionData: description,
      banner: blogImage,
      profile: blog.profile,
    };

    try {
      const res = await axios.patch(
        `http://localhost:5000/blogs/blog/${blog._id}`,
        updatedBlog
      );

      if (res.data.success) {
        document.getElementById(`blog_modal_${blog._id}`).close();
        await Swal.fire({
          icon: "success",
          title: "Blog Updated!",
          text: "Your blog has been successfully updated",
          showConfirmButton: false,
          timer: 2000,
        });
        refetch();
      }
    } catch (error) {
      console.error("Failed to update blog:", error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.response?.data?.message || "Failed to update blog",
      });
    }
  };

  return (
    <>
      <button
        onClick={() => document.getElementById(`blog_modal_${blog._id}`).showModal()}
        className="text-blue-500 hover:text-blue-700 transition-colors duration-200 p-2 rounded-full hover:bg-blue-50"
      >
        <Edit className="w-5 h-5" />
      </button>

      <dialog id={`blog_modal_${blog._id}`} className="modal">
        <div className="modal-box max-w-3xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Update Blog</h3>
            <button
              onClick={() => document.getElementById(`blog_modal_${blog._id}`).close()}
              className="btn btn-sm btn-circle btn-ghost"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleUpdateBlog} className="space-y-6">
            {/* Image Upload */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Blog Featured Image
              </label>
              
              {imagePreview ? (
                <div className="relative group">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-lg border border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200 group-hover:opacity-100 opacity-90"
                  >
                    <X className="h-5 w-5 text-red-600" />
                  </button>
                  {isUploading && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200">
                  <label className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
                    <ImagePlus className="h-10 w-10 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Click to upload an image
                    </span>
                    <span className="text-xs text-gray-500">
                      Recommended size: 1200x630 pixels
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleBlogImage}
                      className="hidden"
                    />
                  </label>
                </div>
              )}
            </div>

            {/* Title */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Blog Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your blog title"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Blog Content
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="8"
                placeholder="Write your blog content here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 resize-none"
                required
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => document.getElementById(`blog_modal_${blog._id}`).close()}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isUploading}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isUploading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    Updating...
                  </span>
                ) : (
                  "Update Blog"
                )}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}