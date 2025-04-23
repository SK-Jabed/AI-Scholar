"use client";

import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { fetchStudentEnrolledCoursesService } from "@/services";
import { StudentContext } from "@/context/StudentContext";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  EyeIcon,
  ClockIcon,
  BookOpenIcon,
  StarIcon,
  LanguagesIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import GradientText from "@/components/shared/GradientText";
import CategoryBadge from "@/components/shared/CategoryBadge";
import StudentCoursesCardSkeleton from "@/components/Skeletons/StudentCoursesCardSkeleton";

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
        console.log(response?.data);
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
    <div className="container mx-auto px-4 py-8">
      {/* Header with animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <GradientText>Learning Journey</GradientText>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Continue your education with these amazing courses you have enrolled
          in
        </p>
      </motion.div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <StudentCoursesCardSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-red-600 mb-2">Error</h3>
            <p className="text-red-500">{error}</p>
            <Button
              onClick={fetchStudentBoughtCourses}
              className="mt-4"
              variant="outline"
            >
              Try Again
            </Button>
          </div>
        </motion.div>
      ) : studentEnrolledCoursesList &&
        studentEnrolledCoursesList.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {studentEnrolledCoursesList.map((course, index) => (
            <motion.div
              key={course._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-0 shadow-lg rounded-xl overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-0 flex-grow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={course?.courseImage}
                      alt={course?.courseTitle}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-2 left-2">
                      <CategoryBadge category={course?.courseCategory} />
                    </div>
                    <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                      {course?.courseLevel?.toUpperCase()}
                    </div>
                  </div>
                  <div className="p-2">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">
                      {course?.courseTitle}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 flex items-center">
                      <span className="flex items-center mr-3">
                        <LanguagesIcon className="h-4 w-4 mr-1" />
                        {course?.primaryLanguage.toUpperCase()}
                      </span>
                      <span className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {new Date(course?.dateOfPurchase).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </p>
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center justify-center px-4 py-2 rounded-full ring-2 ring-white bg-blue-100 text-blue-600 text-xs font-semibold">
                        {course?.enrolledStudent} Enrolled
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="text-sm font-medium">4.8</span>
                        <span className="text-xs text-gray-500 ml-1">(24)</span>
                      </div>
                      <span className="text-lg font-bold text-blue-600">
                        ${course?.coursePricing}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 pl-2">
                    Created By: {course?.instructorName}
                  </p>
                </CardContent>
                <CardFooter className="p-2 border-t">
                  <Button
                    onClick={() =>
                      router.push(
                        `/course-progress/${course?.courseId || course?._id}`
                      )
                    }
                    className="w-full bg-gradient-to-r from-blue-600 to-violet-500 hover:from-blue-700 hover:to-violet-600 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <EyeIcon className="mr-1 h-4 w-4" />
                    Continue Learning
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-700 mb-3">
              No Courses Enrolled
            </h3>
            <p className="text-gray-600 mb-6">
              You have not enrolled in any courses yet. Explore our catalog to
              start learning!
            </p>
            <Button onClick={() => router.push("/courses")}>
              Browse Courses
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}