"use client";
import Image from "next/image";
import { FaChartLine, FaComments, FaRobot, FaShieldAlt } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";

const AiBenefits = () => {
  const aiFeatures = [
    {
      icon: <FaRobot size={40} className="text-[#43a047]" />,
      title: "Automated Assistance",
      description:
        "AI-powered support provides instant answers, intelligent tutoring, and 24/7 guidance for seamless learning.",
    },
    {
      icon: <FaChartLine size={40} className="text-[#fbc02d]" />,
      title: "Real-time Feedback",
      description:
        "Get immediate performance analysis with AI. Track progress, adjust study habits, and refine skills efficiently.",
    },
    {
      icon: <FaComments size={40} className="text-[#e53935]" />,
      title: "Smart Recommendations",
      description:
        "AI curates personalized course suggestions, articles, and learning materials based on your preferences.",
    },
    {
      icon: <FaShieldAlt size={40} className="text-[#1e88e5]" />,
      title: "AI-Powered Security",
      description:
        "Advanced AI-driven security ensures data protection, fraud detection, and privacy enhancements in online learning platforms.",
    },
  ];

  return (
    <section className="">
      <div className="text-center">
        <div className="lg:flex items-center gap-32 ">
          <Image
            src="/swirl-icon.png" // Ensure the image is placed inside the public folder
            alt="AI Technology"
            width={100}
            height={200}
            className="hidden lg:block"
          />
          <div className="">
            <SectionTitle
              title={"Benefits of AI"}
              subTitle={`Unlock the power of AI to enhance learning, automate tasks, 
             and provide real-time insights. Experience the future of technology today!`}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiFeatures.map((item, index) => (
            <div
              key={index}
              className="relative bg-white/90 backdrop-blur-md  shadow-lg rounded-xl p-6 text-center border border-green-600 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Floating Icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full p-4 border border-green-600">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-10 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#124e66] to-[#1e88e5] opacity-0 transition-opacity duration-300 hover:opacity-10 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiBenefits;
