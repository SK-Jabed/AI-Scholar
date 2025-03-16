"use client";
import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import Categories from "./Categories";
import CategoryCourses from "./CategoryCourses";

export default function ExploreCourseCategories() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  return (
    <section className="">
      {/* Section Title */}
      <SectionTitle title={"Explore Course Categories"} />

      <div className="grid grid-cols-12 gap-6 mt-10">
        {/* Sidebar with Categories */}
        <Categories onCategory={setActiveCategory} active={activeCategory} />

        {/* Courses Grid */}
        <CategoryCourses />
      </div>
    </section>
  );
}
