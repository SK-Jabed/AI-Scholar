import KeyFeatures from "@/components/key_features/KeyFeatures";

import CourseCategories from "@/components/home/CourseCategories";
import PopularCourses from "@/components/home/PopularCourses";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <div>
      {/*1. ToDo: Hero Section (Header, navigation)
FAQ Section (Accordion with common questions) */}

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

      {/* 4. ToDo: How It Works Section (Step-by-step process UI)
Footer + Contact Us (Links, form, social media)- by Sheikh Jabed*/}

      {/* 5. ToDo: AI Benefits Section (Infographic/icons for AI features)
Instructor Spotlight (Cards for top instructors) */}

      {/* 6. ToDo: About Us Page (Grid layout with filters & sorting)
Contact Page (Title, description, instructor, enroll button) */}
    </div>
  );
}
