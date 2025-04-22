"use client";
import axiosInstance from "@/app/api/axiosInstance/axiosInstance";
import Pagination from "@/components/common/Pagination";
import Button from "@/components/ui/Buttons";
import useGetAllUsers from "@/hooks/useGetAllUsers";
import { User } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

// export const metadata = {
//   title: "Instructors | AI Scholar",
//   description: "This is Instructors Page of AI Scholar",
// };

export default function Instructors() {
  const [data, refetch] = useGetAllUsers();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const allInstructors = data?.filter((user) => user.role === "instructor");
// console.log(allInstructors)
  const totalPages = Math.ceil(allInstructors?.length / itemsPerPage);
  const paginatedUsers = allInstructors?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleMakeUser = (email) => {
    console.log(email);
    const data = {
      role: "student",
      instructorStatus: "",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to make this instructor to student.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(email);
        try {
          const res = await axiosInstance.patch(`/users/${email}`, data);

          console.log("User role updated:", res?.data);
          const updatedUser = res?.data?.data;

          if (updatedUser) {
            refetch();
            Swal.fire({
              title: "Approved!",
              text: "The user has been promoted to instructor.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error updating user role:", error);
        }
      }
    });
  };

  return (
    <div>
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Manage Instructors</h1>
                <p className="text-sm text-gray-500 mt-1">
                  {allInstructors.length} {allInstructors.length === 1 ? "instructor" : "instructors"}
                </p>
              </div>
              {/* <Link
                href="/dashboard/blog-post"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300"
              >
                <ImagePlus className="mr-2 h-5 w-5" />
                Post a Blog
              </Link> */}
            </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  User Details
                </th>
                <th className=" py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                {/* <th className="py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Role
                </th> */}

                <th className=" py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Make User
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedUsers?.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition-colors duration-150 group"
                >
                  <td className="px-8 py-5 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-500">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </span>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          Joined {new Date().toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" py-5 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                    <div className="text-xs text-gray-500">Active</div>
                  </td>
                  {/* <td className="font-bold">{user.role}</td> */}
                  <td className=" py-5 whitespace-nowrap">
                    <Button
                      onClick={() => handleMakeUser(user.email)}
                      className="btn btn-accent"
                    >
                      Make User
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      </div>
    </div>
  );
}
