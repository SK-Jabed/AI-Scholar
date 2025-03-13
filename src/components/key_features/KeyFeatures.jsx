'use client';
import { features } from "@/utils/features";

const KeyFeatures = () => {
 
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-teal-600">Key Features</h2>
          <p className="text-lg max-w-2xl mx-auto text-base-content/80">
            Our AI-powered platform makes learning more effective, engaging, and personalized
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card bg-base-100 shadow  hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="card-title text-xl font-bold mb-2">{feature.title}</h3>
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