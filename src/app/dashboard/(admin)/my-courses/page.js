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
import { Edit, PlusCircle, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Card>
        <CardHeader className="flex justify-between flex-row items-center">
          <CardTitle className="text-3xl font-bold">My Courses</CardTitle>
          <Link href={"/dashboard/add-course"}>
            <Button
              // onClick={() => {
              //   setCurrentEditedCourseId(null);
              //   setCourseLandingFormData(courseLandingInitialFormData);
              //   setCourseCurriculumFormData(courseCurriculumInitialFormData);
              //   navigate("/instructor/create-new-course");
              // }}
              className="px-8 py-4 text-white flex items-center gap-1 cursor-pointer font-semibold"
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
                  <TableHead>Revenue</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* {listOfCourses && listOfCourses.length > 0
                  ? listOfCourses.map((course) => ( */}
                <TableRow>
                  <TableCell className="font-medium">
                    {/* {course?.title} */}
                    Full Stack Web Development
                  </TableCell>
                  <TableCell>
                    {/* {course?.students?.length} */}
                    50
                  </TableCell>
                  <TableCell>
                    {/* ${course?.students?.length * course?.pricing} */}
                    $2500
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      // onClick={() => {
                      //   navigate(
                      //     `/instructor/edit-course/${course?._id}`
                      //   );
                      // }}
                      variant="ghost"
                      size="sm"
                    >
                      <Edit className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash className="h-6 w-6" />
                    </Button>
                  </TableCell>
                </TableRow>
                {/* ))
                  : null} */}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
