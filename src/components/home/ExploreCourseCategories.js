"use client";
import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import Categories from "./Categories";
import CategoryCourses from "./CategoryCourses";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export default function ExploreCourseCategories() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([{ category: "All Categories", _id: 124 }]);
  const [category, setCategory] = useState("All Categories");

  useEffect(() => {
    getAllCategories();
  }, []);
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const getAllCategories = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses/categories`);
      const { data } = await res.json();
      setCategories([{ category: "All Categories", _id: 124 }, ...data]);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <section>
      {/* Section Title with AOS */}
      <div data-aos="fade-down" data-aos-delay="100">
        <SectionTitle
          title={"Explore Course Categories"}
          subTitle={
            "Explore our diverse course categories and unlock new opportunities. Learn skills that align with your passions and career goals."
          }
        />
      </div>

      <div className="grid grid-cols-12 gap-6 mt-10">
        {/* Sidebar with Categories */}
        <Categories categories={categories} active={category} onCategory={setCategory} />

        {/* Courses Grid */}
        <CategoryCourses/>
      </div>
    </section>
  );
}
