"use client";

import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import useAxiosInstance from "@/hooks/useAxiosInstance";
import useGetAllCourses from "@/hooks/useGetAllCourses";

export default function PopularCourses() {
  const axiosInstance = useAxiosInstance();
  const [popularCourses, setPopularCourses] = useState([]);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isSessionLoading, setIsSessionLoading] = useState(true);

  const { data: session } = useSession();
  const router = useRouter();
  
  // const [popularCourses, setPopularCourses] = useState([]);
  const [courses, refetch] = useGetAllCourses()

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/courses/get-courses");
        console.log(res?.data);
        setPopularCourses(res?.data?.data || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setPopularCourses([]);
      }
    };
    fetchData();
  }, [axiosInstance]);
  
  const popularCourses = courses?.filter(course=> course.status === "approved")
  // console.log(popularCourses)
 
  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          size={20}
          className="text-yellow-500 fill-yellow-500"
        />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          size={20}
          className="text-yellow-500 fill-yellow-500"
        />
      );
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={20} className="text-gray-300" />
      );
    }

    return stars;
  };

  const handleCourseNavigate = async (getCurrentCourseId) => {
    if (!session?.user?.id) {
      console.log("User not logged in - redirecting to login");
      router.push("/login");
      return;
    }

    try {
      setIsNavigating(true);

      const response = await checkCoursePurchaseInfoService(
        getCurrentCourseId,
        session.user.id
      );

      if (response?.success) {
        // Navigate based on purchase status
        const targetPath = response.data
          ? `/course-progress/${getCurrentCourseId}`
          : `/course/${getCurrentCourseId}`;

        router.push(targetPath);
      } else {
        console.warn("Purchase check failed, defaulting to course details");
        router.push(`/course/${getCurrentCourseId}`);
      }
    } catch (error) {
      console.error("Navigation error:", error);
      router.push(`/course/${getCurrentCourseId}`);
    } finally {
      setIsNavigating(false);
    }
  };

  useEffect(() => {
    if (session !== undefined) {
      setIsSessionLoading(false);
    }
  }, [session]);

  return (
    <section>
      {/* Section Title with AOS */}
      <div data-aos="fade-down" data-aos-delay="100">
        <SectionTitle
          title="Popular Courses"
          subTitle={
            "Explore our top-rated courses designed to boost your skills and knowledge. Learn from industry experts and achieve your goals with ease."
          }
        />
      </div>

      {/* Courses Grid with Framer Motion */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {popularCourses?.map((course, index) => (
          <motion.div
            key={course._id || index}
            className="bg-white border border-gray-300 shadow-lg p-2 rounded-xl overflow-hidden hover:scale-105 transition w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
              <Image
                src={course?.image || "/default-course-image.jpg"}
                alt={course.title || "Course image"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
              />
            </div>

            {/* Course Title */}
            <h3 className="text-xl font-semibold mt-4">{course.title}</h3>

            {/* Rating and Students */}
            <div className="flex items-center mt-2 gap-1">
              {renderStars(course?.rating || 4)}
              <span className="ml-2 text-sm text-gray-600">
                ({course?.students.length || 0} students)
              </span>
            </div>

            {/* Price */}
            <div className="mt-2 text-lg font-bold text-gray-800">
              ${course?.pricing || 0}
            </div>

            {/* View Course Link */}
            <button
              onClick={() => handleCourseNavigate(course._id)}
              className="bg-accent/90 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-accent transition"
            >
              View Course →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
