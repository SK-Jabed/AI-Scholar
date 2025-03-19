"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import img from "../../../public/assets/webdevbeginners.jpg.webp";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const courses = [
  { title: "React & Next.js Mastery", rating: 4.9, students: "12,000+" },
  { title: "Python for Data Science", rating: 4.8, students: "9,500+" },
  { title: "AI & Machine Learning", rating: 4.7, students: "8,200+" },
  { title: "Graphic Design Fundamentals", rating: 4.6, students: "7,000+" },
  { title: "Digital Marketing Pro", rating: 4.5, students: "6,500+" },
  { title: "Cybersecurity Essentials", rating: 4.4, students: "5,800+" },
];

export default function PopularCourses() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section>
      {/* Section Title with AOS */}
      <div data-aos="fade-down" data-aos-delay="100">
        <SectionTitle
          title="Popular Courses"
          subTitle={
            "Explore our top-rated courses designed to boost your skills and knowledge. Learn from industry experts and achieve your goals with ease."
          }
        />
      </div>

      {/* Courses Grid with Framer Motion */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            initial={{ opacity: 0, y: 50 }} // Initial animation state
            whileInView={{ opacity: 1, y: 0 }} // Animation when in view
            transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered delay
            viewport={{ once: true }} // Animate only once
          >
            {/* Image */}
            <div className="border rounded-md border-accent/20">
              <Image
                src={img}
                alt="courses"
                height={100}
                width={300}
                className="object-cover rounded-md"
              />
            </div>

            {/* Course Title */}
            <h3 className="text-xl font-semibold mt-4">{course.title}</h3>

            {/* Rating and Students */}
            <div className="flex items-center mt-2">
              <Star size={20} className="text-yellow-500" />
              <span className="ml-2 font-medium">
                {course.rating} ({course.students} Students)
              </span>
            </div>

            {/* View Course Link */}
            <Link
              href={`/courses/${index}`}
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              View Course →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}