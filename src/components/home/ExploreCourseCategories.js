"use client";
import { useState } from "react";
import Categories from "./Categories";
import CategoryCourses from "./CategoryCourses";

export default function ExploreCourseCategories() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  return (
    <section className="px-6 py-12 ">
      {/* Section Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-center text-accent mb-8">
        Explore Course Categories
      </h2>

      <div className="grid grid-cols-12 gap-6 mt-10">
        {/* Sidebar with Categories */}
        <Categories onCategory={setActiveCategory} active={activeCategory} />

        {/* Courses Grid */}
        <CategoryCourses />
      </div>
    </section>
  );
}
