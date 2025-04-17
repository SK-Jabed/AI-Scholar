"use client";

import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { fetchStudentEnrolledCoursesService } from "@/services";
import Image from "next/image";
import { StudentContext } from "@/context/StudentContext";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { EyeIcon } from "lucide-react";

export default function StudentCoursesPage() {
  const { studentEnrolledCoursesList, setStudentEnrolledCoursesList } =
    useContext(StudentContext);
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchStudentBoughtCourses() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchStudentEnrolledCoursesService(
        session?.user?.id
      );

      if (response?.success && Array.isArray(response?.data)) {
        setStudentEnrolledCoursesList(response?.data);
      } else if (response?.success && !Array.isArray(response?.data)) {
        setStudentEnrolledCoursesList([]);
      } else {
        setError("Failed to fetch courses.");
      }
    } catch (err) {
      if (err?.response?.status === 500) {
        setStudentEnrolledCoursesList([]);
      } else {
        setError("Something went wrong. Please try again later.");
      }
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (session?.user?.id) {
      fetchStudentBoughtCourses();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user?.id]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8">My Courses</h1>

      {loading ? (
        <p className="text-lg text-gray-500">Loading your courses...</p>
      ) : error ? (
        <p className="text-red-500 text-lg">{error}</p>
      ) : studentEnrolledCoursesList &&
        studentEnrolledCoursesList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {studentEnrolledCoursesList.map((course) => (
            <Card key={course._id} className="flex flex-col">
              <CardContent className="p-4 flex-grow">
                <Image
                  src={course?.courseImage}
                  alt={course?.title}
                  width={450}
                  height={256}
                  className="h-64 w-full object-cover rounded-md mb-4"
                />
                <h3 className="font-bold mb-1">{course?.title}</h3>
                <p className="text-sm text-gray-700 mb-2">
                  {course?.instructorName}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() =>
                    router.push(`/course-progress/${course?.courseId}`)
                  }
                  className="flex-1"
                >
                  <EyeIcon className="mr-2 h-4 w-4" />
                  Start Watching
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-600">
          You haven’t enrolled in any courses yet.
        </p>
      )}
    </div>
  );
}