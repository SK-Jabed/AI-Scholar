"use client";
import axiosInstance from "@/app/api/axiosInstance/axiosInstance";
import { Button } from "@/components/ui/button";
import useGetAllUsers from "@/hooks/useGetAllUsers";
import { GraduationCap, Sparkles } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";

const BecomeInstructor = () => {
  const [data, refetch] = useGetAllUsers() 
  const { data: session } = useSession();
  const email = session?.user?.email;
  const [clicked, setClicked] = useState(false);
  const handleBecomeInstructor = async () => {
    // console.log('object')
    // console.log(email);
    // const role = {
    //   role: "instructor",
    // };
    const instructorStatus = {
        instructorStatus: "pending",
    };
    try {
      const res = await axiosInstance.patch(`/users/status/${email}`, instructorStatus);

      console.log("User role updated:", res?.data?.data);
      const updatedUser = res?.data?.data;

      if (updatedUser) {
        refetch()
        setClicked(true)
      }

    //   TODO -----------------alert

      // Optional: refresh user list here
    //   setUsers((prevUsers) =>
    //     prevUsers.map((user) =>
    //       user.email === email ? { ...user, role: updatedUser.role } : user
    //     )
    //   );
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-4 mb-6">
          <GraduationCap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-3xl font-bold">Become an Instructor</h1>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Share your knowledge with thousands of learners. As an instructor, you
          can create courses, track student progress, and make an impact in the
          community.
        </p>

        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-400 space-y-2 mb-6">
          <li>Create engaging course content</li>
          <li>Manage your own dashboard</li>
          <li>Earn recognition and rewards</li>
        </ul>

        <Button
          onClick={handleBecomeInstructor}
          disabled={clicked}
          className="flex items-center gap-2 text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
        >
          <Sparkles className="w-5 h-5" />
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default BecomeInstructor;
