"use client";
import { features } from "@/utils/features";
import SectionTitle from "../shared/SectionTitle";

const KeyFeatures = () => {
  return (
    <section className=" ">
      <div className="">
        <SectionTitle
          title={"  Key Features"}
          subTitle={
            "      Our AI-powered platform makes learning more effective, engaging, and personalized"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-100/30 border-2 border-gray-50 shadow  hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="card-title text-xl font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-base-content/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
