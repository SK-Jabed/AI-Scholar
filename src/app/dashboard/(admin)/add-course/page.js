"use client";

import React, { useContext, useEffect } from "react";
import CourseCurriculum from "@/components/add-course/CourseCurriculum";
import CourseLanding from "@/components/add-course/CourseLanding";
import CourseSettings from "@/components/add-course/CourseSettings";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import {
  addNewCourseService,
  fetchInstructorCourseDetailsService,
  updateCourseByIdService,
} from "@/services";

import { InstructorContext } from "@/context/InstructorContext";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

const AddCoursePage = () => {
  const {
    courseLandingFormData,
    courseCurriculumFormData,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
    currentEditedCourseId,
    setCurrentEditedCourseId,
  } = useContext(InstructorContext);

  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const getCurrentEditedCourseId = searchParams.get("id");

  // console.log(getCurrentEditedCourseId);

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    }

    return value === "" || value === null || value === undefined;
  }

  function validateFormData() {
    for (const key in courseLandingFormData) {
      if (isEmpty(courseLandingFormData[key])) {
        return false;
      }
    }

    let hasFreePreview = false;

    for (const item of courseCurriculumFormData) {
      if (
        isEmpty(item.title) ||
        isEmpty(item.videoUrl) ||
        isEmpty(item.public_id)
      ) {
        return false;
      }

      if (item.freePreview) {
        hasFreePreview = true; //found at least one free preview
      }
    }

    return hasFreePreview;
  }

  async function handleCreateCourse() {
    const courseFinalFormData = {
      ...courseLandingFormData,
      instructor: {
        instructorName: session?.user?.name,
        instructorEmail: session?.user?.email,
        instructorImage: session?.user?.image || "",
      },
      date: new Date(),
      students: [],
      curriculum: courseCurriculumFormData,
      isPublished: true,
    };

    const response =
      currentEditedCourseId !== null
        ? await updateCourseByIdService(
            currentEditedCourseId,
            courseFinalFormData
          )
        : await addNewCourseService(courseFinalFormData);

    if (response?.success) {
      setCourseLandingFormData(courseLandingInitialFormData);
      setCourseCurriculumFormData(courseCurriculumInitialFormData);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your submission has been done",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/dashboard/my-courses");
      setCurrentEditedCourseId(null);
    }

    // console.log(courseFinalFormData, "courseFinalFormData");
  }

  async function fetchCurrentCourseDetails() {
    const response = await fetchInstructorCourseDetailsService(
      currentEditedCourseId
    );

    if (response?.success) {
      const setCourseFormData = Object.keys(
        courseLandingInitialFormData
      ).reduce((acc, key) => {
        acc[key] = response?.data[key] || courseLandingInitialFormData[key];

        return acc;
      }, {});

      setCourseLandingFormData(setCourseFormData);
      setCourseCurriculumFormData(response?.data?.curriculum);
    }
  }

  useEffect(() => {
    if (currentEditedCourseId !== null) fetchCurrentCourseDetails();
    // console.log(currentEditedCourseId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentEditedCourseId]);

  useEffect(() => {
    if (getCurrentEditedCourseId)
      setCurrentEditedCourseId(getCurrentEditedCourseId);
  }, [getCurrentEditedCourseId, setCurrentEditedCourseId]);

  return (
    <div>
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-3xl font-extrabold mb-5 text-primary">
            Create a new course
          </h1>
          <Button
            // disabled={!validateFormData()}
            variant="default"
            className="text-sm tracking-wider font-bold px-8 cursor-pointer"
            onClick={handleCreateCourse}
          >
            SUBMIT
          </Button>
        </div>
        <Card>
          <CardContent>
            <div className="container mx-auto p-4">
              <Tabs defaultValue="course-landing-page" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="course-landing-page">
                    Course Landing Page
                  </TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="course-landing-page">
                  <CourseLanding />
                </TabsContent>
                <TabsContent value="curriculum">
                  <CourseCurriculum />
                </TabsContent>
                <TabsContent value="settings">
                  <CourseSettings />
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddCoursePage;