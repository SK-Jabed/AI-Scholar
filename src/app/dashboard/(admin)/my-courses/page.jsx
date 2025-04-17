"use client";

import React, { act, useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import { InstructorContext } from "@/context/InstructorContext";
import { fetchInstructorCourseListService } from "@/services";
import { Edit, PlusCircle, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axiosInstance from "@/app/api/axiosInstance/axiosInstance";

const page = () => {
  const {data: session} = useSession()
  const router = useRouter();
  const { instructorCoursesList, setInstructorCoursesList } =
    useContext(InstructorContext);
    // const [active, setActive] = useState(false)

  const {
    setCurrentEditedCourseId,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
  } = useContext(InstructorContext);
// console.log(session?.user?.email)
  // async function fetchAllCourses() {
  //   const response = await fetchInstructorCourseListService(session?.user?.email);
  //   if (response?.success) setInstructorCoursesList(response?.data);
  //   console.log(response);
  // }

  useEffect(() => {
    async function fetchAllCourses() {
      const response = await fetchInstructorCourseListService(session?.user?.email);
      if (response?.success) setInstructorCoursesList(response?.data);
      // console.log(response);
    }
    fetchAllCourses();
  }, [session?.user?.email, setInstructorCoursesList]);


  const handleAdvertiseForPopularSection = async (id)=>{
    console.log(id)
    const status={
      status: 'pending'
    }
    const res = await axiosInstance.patch(`/courses/course/${id}`, status)
    console.log(res?.data?.data)
   
  }

  return (
    <div>
      <Card>
        <CardHeader className="flex justify-between flex-row items-center">
          <CardTitle className="text-3xl font-bold">My Courses</CardTitle>
          <Link href={"/dashboard/add-course"}>
            <Button
              onClick={() => {
                setCurrentEditedCourseId(null);
                setCourseLandingFormData(courseLandingInitialFormData);
                setCourseCurriculumFormData(courseCurriculumInitialFormData);
              }}
              variant="default"
              className="flex items-center gap-1 cursor-pointer font-semibold"
            >
              <span>Create New Course</span>
              <PlusCircle className="h-6 w-6" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Advertise</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {instructorCoursesList && instructorCoursesList.length > 0
                  ? instructorCoursesList.map((course) => (
                      <TableRow key={course._id}>
                        <TableCell className="font-medium">
                          {course?.title}
                        </TableCell>
                        <TableCell>{course?.enrolled}</TableCell>
                        <TableCell>${course?.pricing}</TableCell>
                        <TableCell>
                          <Button disabled={course.status != ""} onClick={()=>handleAdvertiseForPopularSection(course?._id)}>Apply for Popular courses</Button>
                        </TableCell>
                        <TableCell >{course.status? course.status : ''}</TableCell>

                        <TableCell className="text-right">
                          <Button
                            onClick={() => {
                              router.push(
                                `/dashboard/add-course?id=${course?._id}`
                              );
                            }}
                            variant="primary"
                            size="sm"
                          >
                            <Edit className="h-6 w-6" />
                          </Button>
                          <Button className="ml-1" variant="primary" size="sm">
                            <Trash className="h-6 w-6" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
