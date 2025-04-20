"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EditIcon, Trash } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Swal from "sweetalert2";

export default function AllBlogs() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

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
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  if (isLoading) return <p className="p-4">Loading your blogs...</p>;

  return (
    <div className="overflow-x-auto p-4 bg-white rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        All Blogs ({totalBlogs?.length || 0})
      </h1>

      <table className="min-w-full table-auto text-sm border-2 border-gray-300 overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-5 py-3 border border-gray-300 text-left">
              Serial
            </th>
            <th className="px-5 py-3 border border-gray-300 text-center">
              Banner
            </th>
            <th className="px-5 py-3 border border-gray-300 text-left">
              Title
            </th>
            <th className="px-5 py-3 border border-gray-300 text-left">
              Post Date
            </th>
            <th className="px-5 py-3 border border-gray-300 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {totalBlogs?.map((blog, inx) => (
            <tr
              key={blog._id || inx}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="px-5 py-4 border border-gray-300">{inx + 1}</td>
              <td className="px-5 py-4 border border-gray-300">
                <div className="flex justify-center">
                  <Image
                    src={blog.banner}
                    alt={blog.titleData || "Blog banner"}
                    width={80}
                    height={50}
                    className="w-20 h-12 object-cover rounded-md border border-gray-200 mx-auto"
                  />
                </div>
              </td>
              <td className="px-5 py-4 border border-gray-300">
                {blog.titleData}
              </td>
              <td className="px-5 py-4 border border-gray-300">
                {blog.postDate}
              </td>
              <td className="px-5 py-4 border border-gray-300">
                <div className="flex justify-center gap-3">
                  <button className="text-blue-500 hover:text-blue-700 transition-colors">
                    <EditIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(`${blog._id}`)}
                    className="text-red-500 hover:text-red-700 transition-colors"
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
  );
}
