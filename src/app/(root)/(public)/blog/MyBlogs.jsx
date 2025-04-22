"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ImagePlus, Trash } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BlogModal from "./BlogModal";
import Swal from "sweetalert2";
import Pagination from "@/components/common/Pagination";

export default function MyBlogs() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const {
    data: totalBlogs = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["blogsTotal", userEmail],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/blogs/blog/${userEmail}`
      );
      return res?.data?.data;
    },
    enabled: status === "authenticated" && !!userEmail,
  });

  // Pagination logic
  const totalPages = Math.ceil(totalBlogs.length / itemsPerPage);
  const paginatedBlogs = totalBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDeleteBlog = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(
          `http://localhost:5000/blogs/blog/${id}`
        );

        if (res.data.success) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your blog has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Blogs</h1>
          <p className="text-sm text-gray-500 mt-1">
            {totalBlogs.length} {totalBlogs.length === 1 ? "blog" : "blogs"} published
          </p>
        </div>
        <Link
          href="/dashboard/blog-post"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300"
        >
          <ImagePlus className="mr-2 h-5 w-5" />
          Post a Blog
        </Link>
      </div>

      {/* Table */}
      {totalBlogs.length > 0 ? (
        <>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Banner
                    </th>
                    <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Published Date
                    </th>
                    <th className="px-8 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedBlogs.map((blog, index) => (
                    <tr
                      key={blog._id}
                      className="hover:bg-gray-50 transition-colors duration-150 group"
                    >
                      <td className="px-8 py-5 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-500">
                          {(currentPage - 1) * itemsPerPage + index + 1}
                        </span>
                      </td>
                      <td className="px-8 py-5 whitespace-nowrap">
                        <div className="flex-shrink-0 h-16 w-24 rounded-md overflow-hidden border border-gray-200">
                          <Image
                            src={blog.banner}
                            alt={blog.titleData}
                            width={96}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="text-sm font-medium text-gray-900">
                          {blog.titleData}
                        </div>
                        <div className="text-xs text-gray-500 line-clamp-2">
                          {blog.descriptionData.substring(0, 100)}...
                        </div>
                      </td>
                      <td className="px-8 py-5 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {formatDate(blog.postDate)}
                        </div>
                      </td>
                      <td className="px-8 py-5 whitespace-nowrap text-center">
                        <div className="flex justify-center space-x-3">
                          <BlogModal blog={blog} refetch={refetch} />
                          <button
                            onClick={() => handleDeleteBlog(blog._id)}
                            className="text-red-500 hover:text-red-700 transition-colors duration-200 p-2 rounded-full hover:bg-red-50"
                          >
                            <Trash className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={setItemsPerPage}
            />
          </div>
        </>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <div className="mx-auto max-w-md">
            <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No blogs published yet
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by creating your first blog post.
            </p>
            <div className="mt-6">
              <Link
                href="/dashboard/blog-post"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300"
              >
                <ImagePlus className="mr-2 h-5 w-5" />
                Create Blog
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}