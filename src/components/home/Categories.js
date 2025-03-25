import axios from "axios";
import { useEffect, useState } from "react";
const Categories = ({ onCategory, active }) => {
  const [alCategories, setAlCategories] = useState([])

  useEffect(() => {
    const FetchCategories = async () => {
      try {
        const res = await axios.get("https://ai-scholar-server.vercel.app/courses/categories");
        setAlCategories(res.data.data || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setAlCategories([]);
      }
    };
    FetchCategories();
  }, []);
  return (
    <div className="col-span-12 md:col-span-3 bg-white p-6 ">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Categories →</h3>
      <div className="space-y-4">
        {alCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategory(category.category)}
            className={`flex items-center space-x-3 p-3 ${
              active === category.name ? "bg-accent text-white" : "bg-gray-100 "
            }  rounded-lg cursor-pointer hover:bg-accent hover:text-white transition w-full `}
          >
            <p className="font-medium ">{category.category}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
