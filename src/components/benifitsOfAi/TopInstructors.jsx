"use client";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    expertise: "AI & Machine Learning",
    image: "/about.jpg",
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
    name: "Sarah Smith",
    expertise: "Cybersecurity Expert",
    image: "/about.jpg",
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
    image: "/about.jpg",
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
    name: "Emily Johnson",
    expertise: "Data Science & AI",
    image: "/about.jpg",
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
  return (
    <section className="">
      <div className="text-center">
        {/* Section Title */}
        <div className="text-center mb-10">
          <SectionTitle
            title={"Meet Our Top Instructors"}
            subTitle={`Learn from industry-leading professionals who bring real-world experience and expertise to every lesson.`}
          />
        </div>

        {/* Instructor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="relative bg-white shadow-lg rounded-xl overflow-hidden border border-green-600 
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
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {instructor.name}
                </h3>
                <p className="text-gray-600">{instructor.expertise}</p>
              </div>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
