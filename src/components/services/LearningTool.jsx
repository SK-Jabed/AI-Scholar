"use client";

import React, { useEffect, useState } from "react";

const LearningTool = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/json-data/learningTools.json") // Fetch from the public folder
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error loading team data:", error));
  }, []);

  return (
    <div className="mt-20">
      <section className="bg-white">
        <div className="">
          <h2 className="text-3xl font-bold mb-10 text-center">
            AI Learning Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningTool;