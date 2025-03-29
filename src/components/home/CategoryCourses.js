"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CategoryCourses = ({ selectedCategory }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, [selectedCategory]);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const query =
        selectedCategory === "All Categories"
          ? ""
          : `category=${encodeURIComponent(selectedCategory)}`;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/courses?${query}`
      );
      const { data } = await res.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="col-span-full text-center">Loading courses...</p>
        ) : courses.length === 0 ? (
          <p className="col-span-full text-center">No courses found.</p>
        ) : (
          courses.map((course, index) => (
            <motion.div
              key={course._id || index}
              className="bg-white border border-gray-300 shadow-lg p-2 rounded-xl overflow-hidden hover:scale-105 transition w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              {/* Image Container */}
              <div className="relative w-full h-[250px]">
                <Image
                  src={course?.image || "/default-course-image.jpg"}
                  alt={course.title || "Course image"}
                  layout="fill"
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {course.instructor}
                </p>
                <p className="text-primary font-bold mt-2">${course.price}</p>
              </div>

              {/* Footer */}
              <div className="p-4 bg-gray-100 flex justify-between items-center">
                <button className="bg-accent/90 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-accent transition">
                  Enroll Now
                </button>
                <p className="text-sm text-gray-600">{course.duration} hrs</p>
              </div>
            </motion.div>
          ))
        )}
      </div>
  );
};

export default CategoryCourses;
