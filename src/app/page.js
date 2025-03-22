import AiBenefits from "@/components/home/AiBenefits";
import TopInstructors from "@/components/home/TopInstructors";
import Banner from "@/components/home/Banner";
import ExploreCourseCategories from "@/components/home/ExploreCourseCategories";
import HowItWorks from "@/components/home/HowItWorks";
import KeyFeatures from "@/components/home/KeyFeatures";
import PopularCourses from "@/components/home/PopularCourses";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Container from "@/components/shared/Container";

import Faq from "@/components/home/Faq";


export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <Banner />

      <Container>
        {/* How It Works Section */}
        <HowItWorks />

    
      {/*2. ToDo:  Key Features Section (Grid layout for main features)
Student Testimonials Section (Carousel/grid for user reviews)- by Abdur Rahman  */}
      <KeyFeatures />
      {/* 3. toDo: Course Categories Section (Cards for different subjects)
Popular Courses Section (Top-rated courses grid) -by Sushanto kumar
 */}
      {/* Course Categories */}
      <CourseCategories />
      {/* Popular Courses */}
      <PopularCourses />

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

        {/* Frequently Asked Questions Section */}
        <Faq />
      </Container>
    </div>
  );
}
