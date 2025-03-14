import KeyFeatures from "@/components/key_features/KeyFeatures";
import CourseCategories from "@/components/home/CourseCategories";
import PopularCourses from "@/components/home/PopularCourses";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import Banner from "@/components/home/Banner";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Banner />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Key Features Section */}
      <KeyFeatures />

      {/* Course Categories Section */}
      <CourseCategories />

      {/* Popular Courses Section */}
      <PopularCourses />

      {/* Student Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}
