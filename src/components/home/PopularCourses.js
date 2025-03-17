import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import img from "../../../public/assets/webdevbeginners.jpg.webp";
import SectionTitle from "../shared/SectionTitle";

const courses = [
  { title: "React & Next.js Mastery", rating: 4.9, students: "12,000+" },
  { title: "Python for Data Science", rating: 4.8, students: "9,500+" },
  { title: "AI & Machine Learning", rating: 4.7, students: "8,200+" },
  { title: "Graphic Design Fundamentals", rating: 4.6, students: "7,000+" },
  { title: "Digital Marketing Pro", rating: 4.5, students: "6,500+" },
  { title: "Cybersecurity Essentials", rating: 4.4, students: "5,800+" },
];

export default function PopularCourses() {
  return (
    <section className="">
      <SectionTitle title=" Popular Courses" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition "
          >
            {/* image */}
            <div className="border rounded-md border-accent/20">
              <Image
                src={img}
                alt="curses"
                height={100}
                width={300}
                className="object-cover rounded-md"
              />
            </div>

            <h3 className="text-xl font-semibold">{course.title}</h3>
            <div className="flex items-center mt-2">
              <Star size={20} className="text-yellow-500" />
              <span className="ml-2 font-medium">
                {course.rating} ({course.students} Students)
              </span>
            </div>
            <Link
              href={`/courses/${index}`}
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              View Course →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
