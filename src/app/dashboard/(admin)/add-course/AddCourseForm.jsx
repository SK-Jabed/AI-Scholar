"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosInstance from "@/hooks/useAxiosInstance";
import Container from "@/components/shared/Container";

export default function AddCourseForm() {
  const axiosInstance = useAxiosInstance();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    duration: "",
    price: "",
    instructor: "",
    rating: "",
    image: null,
  });

  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const uploadImageToImgBB = async (imageFile) => {
    const body = new FormData();
    body.set("image", imageFile);

    const apiKey = process.env.NEXT_PUBLIC_IMGBB_API;

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body,
        }
      );

      const data = await response.json();

      if (!data.success) {
        throw new Error("Image upload failed");
      }

      return data.data.url;
    } catch (err) {
      console.error("Image Upload Error:", err);
      throw new Error("Failed to upload image to ImgBB");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      let uploadedImageUrl = "";

      if (formData.image) {
        uploadedImageUrl = await uploadImageToImgBB(formData.image);
        setImageUrl(uploadedImageUrl);
      }

      const courseData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        level: formData.level,
        duration: parseFloat(formData.duration),
        price: parseFloat(formData.price),
        instructor: formData.instructor,
        rating: parseInt(formData.rating),
        image: uploadedImageUrl,
      };

      const response = await axiosInstance.post("/courses", courseData);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Course created successfully",
        showConfirmButton: true,
        timer: 1500,
      });

      // Reset form
      setFormData({
        title: "",
        description: "",
        category: "",
        level: "",
        duration: "",
        price: "",
        instructor: "",
        rating: "",
        image: null,
      });
      setImageUrl("");
    } catch (err) {
      console.error("Submission Error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Add New Course
        </h2>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Course Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter course title"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Artificial Intelligence">
                    Artificial Intelligence
                  </option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Programming Languages">
                    Programming Languages
                  </option>
                  <option value="Game Development">Game Development</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Blockchain">Blockchain</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Business">Business</option>
                  <option value="Finance & Accounting">
                    Finance & Accounting
                  </option>
                  <option value="IT & Software">IT & Software</option>
                  <option value="Office Productivity">
                    Office Productivity
                  </option>
                  <option value="Personal Development">
                    Personal Development
                  </option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Photography">Photography</option>
                  <option value="Music">Music</option>
                  <option value="Health & Fitness">Health & Fitness</option>
                  <option value="Teaching & Academics">
                    Teaching & Academics
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="level"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Level
                </label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Duration (hours)
                </label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="Enter duration in hours"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Price ($)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter course price"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="instructor"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Instructor
                </label>
                <input
                  type="text"
                  id="instructor"
                  name="instructor"
                  value={formData.instructor}
                  onChange={handleChange}
                  placeholder="Enter instructor name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  placeholder="Enter rating (1-5)"
                  min="1"
                  max="5"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Course Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleChange}
                  accept="image/*"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {imageUrl && (
                  <div className="mt-2">
                    <img
                      src={imageUrl}
                      alt="Preview"
                      className="h-20 rounded"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Description (full width) */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter course description"
              rows={4}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Add Course"
            )}
          </button>
        </form>
      </div>
    </Container>
  );
}