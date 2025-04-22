"use client";
import axiosInstance from "@/app/api/axiosInstance/axiosInstance";
import Pagination from "@/components/common/Pagination";
import Button from "@/components/ui/Buttons";
import useGetAllUsers from "@/hooks/useGetAllUsers";
import { Trash2, User } from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const InstructorRequest = () => {
  const [data, refetch] = useGetAllUsers();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      const pendingInstructors = data?.filter(
        (user) => user.instructorStatus === "pending"
      );
      setUsers(pendingInstructors);
    }
  }, [data]);

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePendingRequest = (email, stat) => {
    console.log(email, stat);
    const data = {
      role: "instructor",
      instructorStatus: stat,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to approve this instructor request.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(email);
        try {
          const res = await axiosInstance.patch(`/users/status/${email}`, data);

          console.log("User role updated:", res?.data?.data._id);
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
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className=" py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Pending Status
                </th>
                <th className=" py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Reject Request
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
                  <td className="px-8 py-5 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                    <div className="text-xs text-gray-500">Active</div>
                  </td>
                  <td>
                    <Button
                      onClick={() => handlePendingRequest(user.email, "done")}
                      className="btn btn-accent"
                    >
                      {user.instructorStatus}
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => handlePendingRequest(user.email, "")}
                      className="btn btn-accent"
                    >
                      <Trash2 />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
};

export default InstructorRequest;
