import AiBenefits from "@/components/home/AiBenefits";
import TopInstructors from "@/components/home/TopInstructors";
import Banner from "@/components/home/Banner";
import ExploreCourseCategories from "@/components/home/ExploreCourseCategories";
import HowItWorks from "@/components/home/HowItWorks";
import KeyFeatures from "@/components/home/KeyFeatures";
import PopularCourses from "@/components/home/PopularCourses";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <Banner />

      <Container>
        {/* How It Works Section */}
        <HowItWorks />

        {/* Benefits of AI section*/}
        <AiBenefits />

        {/* Key Features Section */}
        <KeyFeatures />

        {/* Course Categories Section */}
        <ExploreCourseCategories />

        {/* Top Instructors section*/}
        <TopInstructors />

        {/* Popular Courses Section */}
        <PopularCourses />

        {/* Student Testimonials Section */}
        <TestimonialsSection />
      </Container>
    </div>
  );
}
