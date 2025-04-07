"use client";

import { useEffect, useState } from "react";
import { User, UserCog, ChevronDown, UserPlus } from "lucide-react";
import Pagination from "@/components/common/Pagination";
import useAxiosInstance from "@/hooks/useAxiosInstance";

const Users = () => {
  const axiosInstance = useAxiosInstance();
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axiosInstance.get("/users");
        setUsers(res.data.message || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setUsers([]);
      }
    };
    dataFetch();
  }, [axiosInstance]);

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-14">
        <div className="relative inline-block mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 relative z-10">
            User Management
          </h1>
          <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-gray-100 to-gray-200 z-0"></div>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Manage users with precision and ease of your application
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="flex items-center bg-white rounded-lg shadow-xs px-4 py-2 border border-gray-200">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">
              Total: <span className="text-gray-900">{users.length}</span>
            </span>
          </div>
          {/* <button className="flex items-center bg-white rounded-lg shadow-xs px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
            <UserPlus className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Add User</span>
          </button> */}
        </div>
      </div>

      {/* User Table */}
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
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedUsers.map((user, index) => (
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
                  <td className="px-8 py-5 whitespace-nowrap">
                    {user.role === "admin" ? (
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <UserCog className="w-4 h-4 mr-1.5" />
                        Administrator
                      </div>
                    ) : (
                      <button className="inline-flex items-center px-3 py-2 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-200">
                        <User className="w-4 h-4 mr-1.5" />
                        Student
                        <ChevronDown className="w-3 h-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </button>
                    )}
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
};

export default Users;