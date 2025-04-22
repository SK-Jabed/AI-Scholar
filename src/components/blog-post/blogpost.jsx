"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import Swal from "sweetalert2";
import { ImagePlus, X } from "lucide-react";

export default function BlogForm() {
  const [blogImage, setBlogImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  const { data: session } = useSession();
  const router = useRouter();

  const userEmail = session?.user?.email;
  const authorImage = session?.user?.image;
  const authorName = session?.user?.name;

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
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleBlogForm = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (!blogImage) {
      Swal.fire({
        icon: "warning",
        title: "Image Required",
        text: "Please upload an image for your blog",
      });
      return;
    }

    const blogInfo = {
      titleData: form.title.value.trim(),
      descriptionData: form.description.value.trim(),
      banner: blogImage,
      email: userEmail,
      profile: authorImage,
      author: authorName,
      postDate: new Date().toISOString(),
    };

    try {
      const res = await axios.post("http://localhost:5000/blogs", blogInfo);
      
      await Swal.fire({
        icon: "success",
        title: "Blog Published!",
        text: "Your blog has been successfully published",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
          router.push("/dashboard/my-blogs");
        }
      });

      form.reset();
      removeImage();
    } catch (error) {
      console.error("Blog creation failed:", error);
      Swal.fire({
        icon: "error",
        title: "Publish Failed",
        text: error.response?.data?.message || "Failed to publish blog",
      });
    }
  };

  return (
    <div className="mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Blog</h2>
          
          <form onSubmit={handleBlogForm} className="space-y-6">
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
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleBlogImage}
                      className="hidden"
                      required
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
                name="title"
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
                name="description"
                rows="8"
                placeholder="Write your blog content here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isUploading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isUploading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                  Publishing...
                </span>
              ) : (
                "Publish Blog"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}