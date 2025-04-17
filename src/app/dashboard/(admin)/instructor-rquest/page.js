"use client";
import usetGetAllUsers from "@/hooks/usetGetAllUsers";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/common/Pagination";
import { User } from "lucide-react";
import Button from "@/components/ui/Buttons";
import Swal from "sweetalert2";
import axiosInstance from "@/app/api/axiosInstance/axiosInstance";

const InstructorRequest = () => {
  const { userss } = usetGetAllUsers();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (userss) {
        // console.log(userss)
        const pendingInstructors = userss?.filter(user=> user.instructorStatus === 'pending')
      setUsers(pendingInstructors);
    }
  }, [userss]);

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const handlePendingRequest= async (email)=>{
    console.log(email)
    const data = {
      role: "instructor",
      instructorStatus : 'done'
    };
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            try {
                const res =  axiosInstance.patch(`/users/user/${email}`, data);
          
                console.log("User role updated:", res);
                const updatedUser = res?.data?.data;
          
                if (updatedUser) {
                  setisClicked(true)
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
          
             
              } catch (error) {
                console.error("Error updating user role:", error);
              }
          
        }
      });
   
  }


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
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Pending Status
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
                  <td >
                    <Button onClick={()=>handlePendingRequest(user.email)} className="btn btn-accent">{user.instructorStatus}</Button>
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
