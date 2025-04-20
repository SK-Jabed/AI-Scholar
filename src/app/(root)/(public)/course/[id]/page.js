"use client";

import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import { StudentContext } from "@/context/StudentContext";
import {
  Calendar,
  CheckCircle,
  Globe,
  Lock,
  PlayCircle,
  User2,
  Users,
  Clock,
  BookOpen,
  MessageSquare,
  Award,
  CheckCircle2,
  Video,
} from "lucide-react";
import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseDetailsService,
} from "@/services";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container";

export default function CourseDetailsPage({ params }) {
  const {
    studentViewCourseDetails,
    setStudentViewCourseDetails,
    currentCourseDetailsId,
    setCurrentCourseDetailsId,
    loadingState,
    setLoadingState,
  } = useContext(StudentContext);

  const [displayCurrentVideoFreePreview, setDisplayCurrentVideoFreePreview] =
    useState(null);
  const [showFreePreviewDialog, setShowFreePreviewDialog] = useState(false);
  const [approvalUrl, setApprovalUrl] = useState("");
  const [purchaseStatus, setPurchaseStatus] = useState(null);

  const { id } = React.use(params);
  const { data: session } = useSession();

  const router = useRouter();
  const pathname = usePathname();

  async function fetchStudentViewCourseDetails() {
    setLoadingState(true);
    try {
      const response = await fetchStudentViewCourseDetailsService(
        currentCourseDetailsId
      );
      if (response?.success) {
        setStudentViewCourseDetails(response?.data);
      }
    } catch (error) {
      console.error("Failed to fetch course details:", error);
    } finally {
      setLoadingState(false);
    }
  }

  function handleSetFreePreview(getCurrentVideoInfo) {
    setDisplayCurrentVideoFreePreview(getCurrentVideoInfo?.videoUrl);
  }

  const handlePurchase = () => {
    router.push(`/payment?courseId=${id}`);
  };

  useEffect(() => {
    const checkPurchaseStatus = async () => {
      if (session?.user?.id && id) {
        try {
          const response = await checkCoursePurchaseInfoService(
            id,
            session?.user?.id
          );
          if (response?.success) {
            setPurchaseStatus(response.data);
            if (response.data) {
              router.push(`/course-progress/${id}`);
            }
          }
        } catch (error) {
          console.error("Purchase status check failed:", error);
        }
      }
    };

    checkPurchaseStatus();
  }, [session?.user?.id, id, router]);

  useEffect(() => {
    if (displayCurrentVideoFreePreview !== null) setShowFreePreviewDialog(true);
  }, [displayCurrentVideoFreePreview]);

  useEffect(() => {
    if (currentCourseDetailsId !== null) fetchStudentViewCourseDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCourseDetailsId]);

  useEffect(() => {
    if (id) setCurrentCourseDetailsId(id);
  }, [id, setCurrentCourseDetailsId]);

  useEffect(() => {
    if (!pathname.includes("/course")) {
      setStudentViewCourseDetails(null);
      setCurrentCourseDetailsId(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (loadingState) {
    return (
      <div className="min-h-screen mx-auto xl:px-20 lg:px-16 md:px-10 sm:px-4 px-6">
        <div className="space-y-8">
          <Skeleton className="h-12 w-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-32 w-full" />
              ))}
            </div>
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (approvalUrl !== "") {
    window.location.href = approvalUrl;
  }

  const getIndexOfFreePreviewUrl =
    studentViewCourseDetails?.curriculum?.findIndex(
      (item) => item.freePreview
    ) ?? -1;

  return (
    <Container>
      <div className="min-h-screen">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 text-white p-6 md:p-8 rounded-t-lg mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {studentViewCourseDetails?.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            {studentViewCourseDetails?.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <User2 className="h-4 w-4" />
              {studentViewCourseDetails?.instructor?.instructorName}
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <Calendar className="h-4 w-4" />
              {new Date(studentViewCourseDetails?.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <Globe className="h-4 w-4" />
              {studentViewCourseDetails?.primaryLanguage.toUpperCase()}
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <Users className="h-4 w-4" />
              {studentViewCourseDetails?.students?.length} Enrolled
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-violet-50 pt-1">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span>What You will Learn</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 py-2">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {studentViewCourseDetails?.objectives
                      ?.split(",")
                      .map((objective, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="mt-0.5 h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-600 font-medium">
                            {objective.trim()}
                          </span>
                        </motion.li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Course Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 pt-1">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span>Course Description</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 py-2">
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {studentViewCourseDetails?.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Welcome Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 pt-1">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    <span>Welcome Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 py-2">
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-gray-700 italic font-medium">
                      {studentViewCourseDetails?.welcomeMessage}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Curriculum - Enhanced with better visual hierarchy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 pt-1">
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-blue-600" />
                    Course Curriculum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {studentViewCourseDetails?.curriculum?.map(
                      (curriculumItem, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.05 * index }}
                          className={`flex items-center p-3 rounded-lg ${
                            curriculumItem?.freePreview
                              ? "bg-blue-50 cursor-pointer hover:bg-blue-100"
                              : "bg-gray-50 cursor-not-allowed"
                          } transition-colors`}
                          onClick={
                            curriculumItem?.freePreview
                              ? () => handleSetFreePreview(curriculumItem)
                              : null
                          }
                        >
                          {curriculumItem?.freePreview ? (
                            <PlayCircle className="mr-3 h-5 w-5 text-blue-600" />
                          ) : (
                            <Lock className="mr-3 h-5 w-5 text-gray-400" />
                          )}
                          <span className="flex-1 font-medium">
                            {curriculumItem?.title}
                          </span>
                          {curriculumItem?.freePreview && (
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              Free Preview
                            </span>
                          )}
                        </motion.li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Course Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow mt-6">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 pt-1">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Course Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Level:</span>
                      <span className="font-medium capitalize">
                        {studentViewCourseDetails?.level}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Language:</span>
                      <span className="font-medium">
                        {studentViewCourseDetails?.primaryLanguage.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium">
                        {studentViewCourseDetails?.category
                          ?.replace(/-/g, " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Students:</span>
                      <span className="font-medium">
                        {studentViewCourseDetails?.students?.length}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </main>

          {/* Sidebar - Maintained your original structure with enhancements */}
          <aside className="w-full lg:w-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="sticky top-20 space-y-6"
            >
              {/* Video Preview Card */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow mt-6">
                <CardContent className="px-6 py-2">
                  <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-black">
                    <VideoPlayer
                      url={
                        getIndexOfFreePreviewUrl !== -1
                          ? studentViewCourseDetails?.curriculum[
                              getIndexOfFreePreviewUrl
                            ]?.videoUrl
                          : ""
                      }
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-bold">
                      ${studentViewCourseDetails?.pricing}
                    </span>
                    <span className="text-sm text-gray-500">
                      One-time payment
                    </span>
                  </div>
                  <Button
                    onClick={handlePurchase}
                    className="w-full py-6 text-lg font-medium"
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </aside>
        </div>

        {/* Free Preview Dialog - Enhanced version */}
        {/* <Dialog
        open={showFreePreviewDialog}
        onOpenChange={() => {
          setShowFreePreviewDialog(false);
          setDisplayCurrentVideoFreePreview(null);
        }}
      >
        <DialogContent className="w-full max-w-4xl">
          <DialogHeader>
            <DialogTitle>Course Preview</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-black rounded-lg">
            <VideoPlayer
              url={displayCurrentVideoFreePreview}
              width="100%"
              height="100%"
            />
          </div>
          <div className="py-4">
            <h3 className="font-bold mb-3">Available Previews</h3>
            <div className="space-y-2">
              {studentViewCourseDetails?.curriculum
                ?.filter((item) => item.freePreview)
                .map((filteredItem, index) => (
                  <div
                    key={index}
                    onClick={() => handleSetFreePreview(filteredItem)}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                      displayCurrentVideoFreePreview === filteredItem.videoUrl
                        ? "bg-blue-50"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <PlayCircle className="h-5 w-5 text-blue-600" />
                      <span>{filteredItem?.title}</span>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      Free Preview
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button onClick={handlePurchase}>Enroll Now</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}

        {/* Free Preview Dialog */}
        <Dialog
          open={showFreePreviewDialog}
          onOpenChange={() => {
            setShowFreePreviewDialog(false);
            setDisplayCurrentVideoFreePreview(null);
          }}
        >
          <DialogContent className="max-w-4xl bg-white rounded-lg overflow-hidden">
            <DialogHeader className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <DialogTitle className="text-white">Course Preview</DialogTitle>
            </DialogHeader>
            <div className="aspect-video bg-black">
              <VideoPlayer
                url={displayCurrentVideoFreePreview}
                width="100%"
                height="100%"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">Preview Lessons</h3>
              <div className="space-y-2">
                {studentViewCourseDetails?.curriculum
                  ?.filter((item) => item.freePreview)
                  .map((filteredItem, index) => (
                    <div
                      key={index}
                      onClick={() => handleSetFreePreview(filteredItem)}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                        displayCurrentVideoFreePreview === filteredItem.videoUrl
                          ? "bg-blue-50 border border-blue-200"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <PlayCircle className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">
                          {filteredItem?.title}
                        </span>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Free Preview
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <DialogFooter className="px-6 pb-6">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="border-gray-300 hover:bg-gray-50"
                >
                  Close Preview
                </Button>
              </DialogClose>
              <Button
                onClick={handlePurchase}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Enroll to Access All Content
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Container>
  );
}
