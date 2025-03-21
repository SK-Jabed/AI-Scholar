"use client";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../shared/SectionTitle";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    expertise: "AI & Machine Learning",
    image: "/assets/instructors/instructor-1.jpg",
    description:
      "An expert in AI with 10+ years of experience in deep learning and NLP.",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Steven Smith",
    expertise: "Cybersecurity Expert",
    image: "/assets/instructors/instructor-2.jpg",
    description: "Specialized in ethical hacking and cyber defense strategies.",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Michael Brown",
    expertise: "Web Development",
    image: "/assets/instructors/instructor-3.jpg",
    description:
      "Full-stack web developer with extensive knowledge in modern frameworks.",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Liam Johnson",
    expertise: "Data Science & AI",
    image: "/assets/instructors/instructor-4.jpg",
    description:
      "Data scientist with experience in machine learning and big data analytics.",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];

const TopInstructors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <div className="text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title={"Meet Our Top Instructors"}
            subTitle={`Learn from industry-leading professionals who bring real-world experience and expertise to every lesson.`}
          />
        </motion.div>

        {/* Instructor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              data-aos="fade-up"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative shadow-lg rounded-xl overflow-hidden border border-green-600 
              hover:shadow-2xl transition-all duration-300 group focus-within:ring-2 focus-within:ring-green-500"
            >
              {/* Profile Image */}
              <div className="w-32 h-32 border border-green-600 mx-auto mt-6 rounded-full overflow-hidden">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Instructor Details */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 text-center"
              >
                <h3 className="text-xl font-semibold">{instructor.name}</h3>
                <p className="text-gray-600">{instructor.expertise}</p>
              </motion.div>

              {/* Hover Overlay */}
            <div
              className="absolute inset-0 bg-black/80 text-white flex flex-col items-center justify-center px-6 text-sm 
                opacity-0 translate-x-full transition-all duration-500 md:group-hover:opacity-100 md:group-hover:translate-x-0 
                focus-within:opacity-100 focus-within:translate-x-0"
            >
              <p className="mb-4">{instructor.description}</p>

              {/* Social Media Links */}
              <div className="flex gap-4 mb-4">
                <a
                  href={instructor.social.facebook}
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href={instructor.social.linkedin}
                  className="text-blue-700 hover:text-blue-900 transition"
                >
                  <FaLinkedinIn size={20} />
                </a>
                <a
                  href={instructor.social.twitter}
                  className="text-blue-400 hover:text-blue-600 transition"
                >
                  <FaTwitter size={20} />
                </a>
              </div>

              {/* "Go to Profile" Button */}
              <a
                href="#"
                className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-full transition"
              >
                Go to Profile
              </a>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
