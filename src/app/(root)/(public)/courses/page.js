"use client";
import { useState, useEffect } from "react";
import Container from "@/components/shared/Container";
import Categories from "@/components/home/Categories";
import Image from "next/image";
import img from "../../../../../public/assets/webdevbeginners.jpg.webp";
import { motion } from "framer-motion";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([
    { category: "All Categories", _id: 124 },
  ]);
  const [category, setCategory] = useState("All Categories");

  useEffect(() => {
    fetchCourse();
  }, [category]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const fetchCourse = async () => {
    setLoading(true);
    try {
      const query =
        category === "All Categories"
          ? ""
          : `category=${encodeURIComponent(category)}`;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/courses?${query}&limit=9`
      );
      const { data } = await res.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const getAllCategories = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/courses/categories`
      );
      const { data } = await res.json();
      setCategories([{ category: "All Categories", _id: 124 }, ...data]);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <Container>
      <div className="min-h-screen ">
        <h1 className="text-3xl font-bold text-center my-12">All Courses</h1>
        <div className="grid grid-cols-12 gap-4 border border-gray-200 p-2 rounded-md">
          <div className="col-span-3 border-r border-gray-200 pr-2">
            <Categories
              categories={categories}
              active={category}
              onCategory={setCategory}
            />
          </div>

          <div className="col-span-9 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {loading ? (
              <p className="text-center col-span-full text-gray-500">
                Loading courses...
              </p>
            ) : courses.length > 0 ? (
              courses.map((course, index) => (
                <motion.div
                  key={course._id}
                  className="flex flex-col justify-between bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
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
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {course.instructor}
                    </p>
                    <p className="text-primary font-bold mt-2">
                      ${course.price}
                    </p>
                    <p className="text-primary/80 mt-2">
                      ${course.description.slice(0, 50)}...
                    </p>
                  </div>
                  <div className="p-4 bg-gray-100 flex justify-between items-center">
                    <button className="bg-accent/90 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-accent transition">
                      Enroll Now
                    </button>
                    <p className="text-sm text-gray-600">
                      {course.duration} hrs
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No courses available.
              </p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Courses;