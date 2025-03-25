"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const CategoryCourses = () => {
 
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/courses`);
        setCourses(res.data.data || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]);
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <motion.div
          key={course._id || index}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <div className="relative w-full h-[250px]">
            <Image
              src={course?.image || "/default-course-image.jpg"}
              alt={course.title || "Course image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {course.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{course.instructor}</p>
            <p className="text-primary font-bold mt-2">${course.price}</p>
          </div>
          <div className="p-4 bg-gray-100 flex justify-between items-center">
            <button className="bg-accent/90 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-accent transition">
              Enroll Now
            </button>
            <p className="text-sm text-gray-600">{course.duration} hrs</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryCourses;
