// app/courses/page.js (Server Component)
"use client"
import Container from "@/components/shared/Container";
import Categories from "@/components/home/Categories";
import Image from "next/image";
import img from "../../../../../public/assets/webdevbeginners.jpg.webp"
import {useState,useEffect } from "react"

const Courses =() => {

const [courses, setCourses] = useState([])
const [loading, setLoading] = useState(false)
const [categories, setCategories] = useState([])
const [category, setCategory] = useState("")

useEffect(()=>{
fetchCourse()
getAllCategories()
},[])

const fetchCourse=async()=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses?limit=6`);
  const {data} = await res.json();
  setCourses(data)
}

const getAllCategories= async()=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses/categories`);
  const {data} = await res.json();
  setCategories(data)
  
}

  return (
    <Container>
      <div className="min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">All Courses</h1>
          <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">

    <Categories categories={categories} active={category} onCategory={setCategory} />

          </div>
        <div className="col-span-9 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                {
                  <Image
                  src={img}
                  alt={course.title}
                  width={100}
                  height={100}
                  className="w-full h-40 object-cover rounded-lg"
                  />
                }
                <h2 className="text-xl font-semibold mt-4 truncate">{course.title}</h2>
                <p className="text-gray-600">{course.description}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Enroll Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No courses available.</p>
          )}
        </div>
        </div>
      </div>
    </Container>
  );
};

export default Courses;
