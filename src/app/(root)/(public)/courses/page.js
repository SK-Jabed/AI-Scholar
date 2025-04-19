"use client";

import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { filterOptions, sortOptions } from "@/config";
import { StudentContext } from "@/context/StudentContext";
import { ArrowUpDownIcon, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
  searchCoursesService,
} from "@/services";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import CourseCardSkeleton from "@/components/Skeletons/CourseCardSkeleton";
import GradientText from "@/components/shared/GradientText";

function StudentViewCoursesPage() {
  const [sort, setSort] = useState("price-lowtohigh");
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isSessionLoading, setIsSessionLoading] = useState(true);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const {
    studentViewCoursesList,
    setStudentViewCoursesList,
    loadingState,
    setLoadingState,
  } = useContext(StudentContext);

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery.length >= 2) {
      handleSearch(debouncedQuery);
    } else if (debouncedQuery.length === 0) {
      fetchAllStudentViewCourses(filters, sort);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery, filters, sort]);

  const handleSearch = async (query) => {
    setIsSearching(true);
    try {
      const response = await searchCoursesService(query);
      if (response.success) {
        setStudentViewCoursesList(response.data);
      }
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsSearching(false);
    }
  };

  function handleFilterOnChange(getSectionId, getCurrentOption) {
    let cpyFilters = { ...filters };
    const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);

    console.log(indexOfCurrentSection, getSectionId);

    if (indexOfCurrentSection === -1) {
      cpyFilters = {
        ...cpyFilters,
        [getSectionId]: [getCurrentOption.id],
      };

      console.log(cpyFilters);
    } else {
      const indexOfCurrentOption = cpyFilters[getSectionId].indexOf(
        getCurrentOption.id
      );

      if (indexOfCurrentOption === -1)
        cpyFilters[getSectionId].push(getCurrentOption.id);
      else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
    }

    setFilters(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
  }

  const fetchAllStudentViewCourses = async (filters, sort) => {
    setLoadingState(true);
    try {
      const query = new URLSearchParams({
        ...filters,
        sortBy: sort,
      });

      const response = await fetchStudentViewCourseListService(query);
      if (response?.success) {
        setStudentViewCoursesList(response?.data);
      }
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    } finally {
      setLoadingState(false);
    }
  };

  const handleCourseNavigate = async (courseId) => {
    if (!session?.user?.id) {
      console.log("User not logged in - redirecting to login");
      router.push("/login");
      return;
    }

    try {
      setIsNavigating(true);

      const response = await checkCoursePurchaseInfoService(
        courseId,
        session?.user?.id
      );

      if (response?.success) {
        // Navigate based on purchase status
        const targetPath = response.data
          ? `/course-progress/${courseId}`
          : `/course/${courseId}`;

        router.push(targetPath);
      } else {
        console.warn("Purchase check failed, defaulting to course details");
        router.push(`/course/${courseId}`);
      }
    } catch (error) {
      console.error("Navigation error:", error);
      router.push(`/course/${courseId}`);
    } finally {
      setIsNavigating(false);
    }
  };

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  }, []);

  useEffect(() => {
    if (filters !== null && sort !== null)
      fetchAllStudentViewCourses(filters, sort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, sort]);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem("filters");
    };
  }, []);

  useEffect(() => {
    if (session !== undefined) {
      setIsSessionLoading(false);
    }
  }, [session]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GradientText>Explore Our Courses</GradientText>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Discover the perfect course to advance your skills and knowledge
        </motion.p>
      </div>

      {/* Search and Sort Bar */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="relative w-full md:w-[600px]">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search courses by title, instructor or description..."
            className="pl-10 pr-4 py-6 text-md border-2 border-gray-200 focus:border-blue-500 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 px-6 py-5 border"
              >
                <ArrowUpDownIcon className="h-5 w-5" />
                <span className="text-md font-medium">
                  {sortOptions.find((opt) => opt.id === sort)?.label ||
                    "Sort By"}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-50 bg-white shadow-xl rounded-md"
            >
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(value) => setSort(value)}
                className="space-y-1 p-1"
              >
                {sortOptions.map((sortItem) => (
                  <DropdownMenuRadioItem
                    value={sortItem.id}
                    key={sortItem.id}
                    className="flex items-center px-3 py-2 text-sm text-gray-700 rounded hover:bg-gray-100 cursor-pointer"
                  >
                    <span className="ml-3">{sortItem.label}</span>
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
            <span className="text-blue-600 font-bold">
              {studentViewCoursesList.length}{" "}
              {studentViewCoursesList.length === 1 ? "Course" : "Courses"}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <motion.aside
          className="w-full md:w-64 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-6 bg-gray-50 border-0 shadow-sm rounded-lg">
            <h2 className="text-xl font-bold text-primary border-b pb-1 border-gray-500">
              Filters
            </h2>
            <div className="space-y-6">
              {Object.keys(filterOptions).map((ketItem, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-bold text-gray-700">
                    {ketItem.toUpperCase()}
                  </h3>
                  <div className="space-y-2">
                    {filterOptions[ketItem].map((option, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Checkbox
                          checked={
                            filters &&
                            Object.keys(filters).length > 0 &&
                            filters[ketItem] &&
                            filters[ketItem].indexOf(option.id) > -1
                          }
                          onCheckedChange={() =>
                            handleFilterOnChange(ketItem, option)
                          }
                        />
                        <Label className="font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.aside>

        {/* Courses List */}
        <main className="flex-1">
          {loadingState || isSearching ? (
            <div className="grid gap-6">
              {[...Array(3)].map((_, i) => (
                <CourseCardSkeleton key={i} />
              ))}
            </div>
          ) : studentViewCoursesList.length > 0 ? (
            <motion.div
              className="grid gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {studentViewCoursesList.map((courseItem) => (
                <motion.div
                  key={courseItem._id}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Card
                    onClick={() => handleCourseNavigate(courseItem._id)}
                    className="cursor-pointer border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="flex flex-col sm:flex-row gap-6 p-6">
                      <div className="w-full sm:w-64 h-48 flex-shrink-0 relative rounded-lg overflow-hidden">
                        <Image
                          src={courseItem.image || "/default-course.jpg"}
                          alt={courseItem.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 256px"
                        />
                        <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                          {courseItem.level.toUpperCase()}
                        </div>
                      </div>
                      <div className="flex-1 space-y-3">
                        <CardTitle className="text-2xl font-bold text-gray-800">
                          {courseItem.title}
                        </CardTitle>
                        <p className="text-gray-600">
                          By {courseItem.instructor.instructorName}
                        </p>
                        <p className="text-gray-700">
                          {courseItem.curriculum?.length || 0} Lectures •{" "}
                          {courseItem.primaryLanguage}
                        </p>
                        <p className="text-gray-500 line-clamp-2">
                          {courseItem.subtitle}
                        </p>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-2xl font-bold text-blue-600">
                            ${courseItem.pricing}
                          </span>
                          <span className="text-sm text-gray-500">
                            {new Date(courseItem.date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No Courses Found
              </h3>
              <p className="text-gray-500">
                {searchQuery
                  ? "Try a different search term"
                  : "Adjust your filters to see more results"}
              </p>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}

export default StudentViewCoursesPage;