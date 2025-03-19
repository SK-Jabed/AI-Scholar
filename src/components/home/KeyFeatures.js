"use client";
import { features } from "@/utils/features";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const KeyFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section>
      <div className="text-center">
        {/* Section Title with AOS */}
        <div data-aos="fade-down" data-aos-delay="100">
          <SectionTitle
            title={"Key Features"}
            subTitle={
              "Unlock the key features that enhance your learning experience. From AI-driven insights to interactive lessons, we’ve got you covered."
            }
          />
        </div>

        {/* Features Grid with Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card bg-base-100/30 border-2 border-gray-50 shadow hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card-body items-center text-center">
                <div className="mb-4" data-aos="zoom-in" data-aos-delay={index * 100}>
                  {feature.icon}
                </div>
                <h3 className="card-title text-xl font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-base-content/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;