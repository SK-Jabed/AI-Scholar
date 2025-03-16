import AiBenefits from "@/components/benifitsOfAi/AiBenefits";
import Banner from "@/components/home/Banner";
import ExploreCourseCategories from "@/components/home/ExploreCourseCategories";
import HowItWorks from "@/components/home/HowItWorks";
import PopularCourses from "@/components/home/PopularCourses";
import KeyFeatures from "@/components/key_features/KeyFeatures";
import Container from "@/components/shared/Container";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <Banner />

      <Container>
        {/* How It Works Section */}
        <HowItWorks />

        {/* benefits of ai section*/}
        <AiBenefits />

        {/* Key Features Section */}
        <KeyFeatures />

        {/* Course Categories Section */}
        <ExploreCourseCategories />

        {/* Popular Courses Section */}
        <PopularCourses />

        {/* Student Testimonials Section */}
        <TestimonialsSection />
      </Container>
    </div>
  );
}
