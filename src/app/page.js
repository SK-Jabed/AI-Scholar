import Banner from "@/components/home/Banner";
import ExploreCourseCategories from "@/components/home/ExploreCourseCategories";
import HowItWorks from "@/components/home/HowItWorks";
import PopularCourses from "@/components/home/PopularCourses";
import KeyFeatures from "@/components/key_features/KeyFeatures";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";

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
      <ExploreCourseCategories />

      {/* Popular Courses Section */}
      <PopularCourses />

      {/* Student Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}
