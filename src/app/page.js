import AiBenefits from "@/components/home/AiBenefits";
import TopInstructors from "@/components/home/TopInstructors";
import Banner from "@/components/home/Banner";
<<<<<<< HEAD
import ExploreCourseCategories from "@/components/home/ExploreCourseCategories";
import HowItWorks from "@/components/home/HowItWorks";
import KeyFeatures from "@/components/home/KeyFeatures";
import PopularCourses from "@/components/home/PopularCourses";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Container from "@/components/shared/Container";
=======
import Faq from "@/components/home/Faq";
>>>>>>> d81d0ac ( conflict request)

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <Banner />
<<<<<<< HEAD

      <Container>
        {/* How It Works Section */}
        <HowItWorks />
=======
      <Faq />
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
>>>>>>> d81d0ac ( conflict request)

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
