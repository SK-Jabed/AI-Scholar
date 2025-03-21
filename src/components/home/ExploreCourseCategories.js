"use client";
import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import Categories from "./Categories";
import CategoryCourses from "./CategoryCourses";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export default function ExploreCourseCategories() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

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
          title={"Explore Course Categories"}
          subTitle={
            "Explore our diverse course categories and unlock new opportunities. Learn skills that align with your passions and career goals."
          }
        />
      </div>

      <div className="grid grid-cols-12 gap-6 mt-10">
        {/* Sidebar with Categories */}
        <Categories onCategory={setActiveCategory} active={activeCategory} />

        {/* Courses Grid */}
        <CategoryCourses />
      </div>
    </section>
  );
}