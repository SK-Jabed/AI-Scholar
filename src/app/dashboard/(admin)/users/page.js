"use client";

import { useEffect, useState } from "react";
import { User, UserCog, ChevronDown, UserPlus, Trash2, Ban } from "lucide-react";
import Pagination from "@/components/common/Pagination";
import useAxiosInstance from "@/hooks/useAxiosInstance";
import { useForm } from "react-hook-form";
import usetGetAllUsers from "@/hooks/usetGetAllUsers";
import Button from "@/components/ui/Buttons";

const Users = () => {
  const { register, handleSubmit } = useForm();

  const axiosInstance = useAxiosInstance();
  const [data, refetch] = usetGetAllUsers()
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
// console.log(data)

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);
  


  const totalPages = Math.ceil(users.length / itemsPerPage);
  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  
    const onSubmit = async (data, userId, status) =>{
      try {
        const sentData={
          role: data,
          banStatus: status
        }
        console.log(sentData)
        const res = await axiosInstance.patch(`/users/${userId}`, {role: data,  banStatus: status});
    
        console.log("User role updated:", res?.data?.data);
        const updatedUser = res?.data?.data;

        // Optional: refresh user list here
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, role: updatedUser.role } : user
          )
        );
      } catch (error) {
        console.error("Error updating user role:", error);
      }
    };


    const handleUserBan=async (id, status)=>{
      let banStatus={
        banStatus: true
      }
      if (status) {
        // console.log(status)
        banStatus.banStatus = false
      }
      else{
        banStatus.banStatus = true

      }
      console.log(banStatus)
      const res = await axiosInstance.patch(`/users/${id}`,  banStatus );
      if (res?.data?.success) {
        console.log(res.data.data)
        // console.log(object)
        refetch()
      }

    }
  

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
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Update
                </th>
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Ban User
                </th>
                <th className=" py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Delete User
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
                  <td>{user.role}</td>
                  <td className="p-8 pr-40 py-5 whitespace-nowrap ">
                    <div className="relative">
                      <form
                        onSubmit={handleSubmit((data) =>
                          onSubmit(
                            data[`role${index}`]
                              ? data[`role${index}`]
                              : "anonymous",
                              user?._id,user.banStatus
                          )
                        )}
                      >
                        <select {...register(`role${index}`)}  className="select ">
                          <option value="admin">Admin</option>
                          <option value="instructor">Instructor</option>
                          <option value="student">Student</option>
                        </select>
                        <button
                          type="submit"
                          className="btn-outline btn rounded-md hover:bg-gray-300 transition"
                        >
                          Update role
                        </button>
                      </form>
                    </div>
                  </td>
                  <td className="px-8"><button  onClick={()=> handleUserBan(user._id, user.banStatus)} className="btn flex items-center"><Ban />{!user.banStatus ? 'Ban' : 'Unban'}</button></td>
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
