"use client";
import axiosInstance from "@/app/api/axiosInstance/axiosInstance";
import Pagination from "@/components/common/Pagination";
import useGetAllCourses from "@/hooks/useGetAllCourses";
import { User } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ManagePopulatBannerAdvertise = () => {
  const [courses, refetch] = useGetAllCourses();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
//   console.log(courses);

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const paginatedUsers = courses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );



  const handleApprovePopularBannerAdvertise= async (id)=>{
    console.log(id)
    const status ={
        status: 'approved'
    }
    const res = await axiosInstance.patch(`/courses/course/${id}`, status)
    console.log(res.data)
    if (res?.data) {
        refetch()
    }
  }











  return (
    <div>
      ManagePopulatBannerAdvertise
      <tbody className="bg-white divide-y divide-gray-200">
        {paginatedUsers?.map((course, index) => (
          <tr
            key={course._id}
            className="hover:bg-gray-50 transition-colors duration-150 group"
          >
            <td className="px-8 py-5 whitespace-nowrap">
              <span className="text-sm font-medium text-gray-500">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </span>
            </td>
            <td className="px-8 py-5 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  
                    <User className="h-5 w-5 text-gray-400" />
                 
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {course.title}
                  </div>
                  <div className="text-xs text-gray-500">{course.subtitle}</div>
                </div>
              </div>
            </td>
            <td className="px-8 py-5 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                {course.instructor?.instructorEmail}
              </div>
              <div className="text-xs text-gray-500">
                {course.primaryLanguage}
              </div>
            </td>
            <td className="px-8 py-5 whitespace-nowrap capitalize text-sm text-gray-700">
              {course.status || "draft"}
            </td>
            <td className="px-8 py-5 whitespace-nowrap">
              <div className="relative">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // handle update logic
                  }}
                >
                 
                  <button
                  onClick={()=>handleApprovePopularBannerAdvertise(course._id)}
                    type="submit"
                    className="btn-outline btn rounded-md hover:bg-gray-300 transition"
                  >
                    Show On Home Page
                  </button>
                </form>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      <div className="mt-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      </div>{" "}
     
    </div>
  );
};

export default ManagePopulatBannerAdvertise;
