import {
  BadgePercent,
  Book,
  Code,
  Droplet,
  Globe,
  Volleyball,
} from "lucide-react";

// const defaultCategories = [
//   {
//     _id:1,category: "All Categories",
//     icon: <Volleyball size={28} className="text-gray-600" />,
//   },
//   { _id:2,category: "Programming", icon: <Code size={28} className="text-blue-600" /> },
//   {
//     _id:3,category: "Marketing",
//     icon: <BadgePercent size={28} className="text-purple-600" />,
//   },
//   { _id:4,category: "Finance", icon: <Globe size={28} className="text-orange-600" /> },
//   {
//     _id:5,category: "UI/UX",
//     icon: <Droplet size={28} className="text-pink-600" />,
//   },
//   { _id:6,category: "Business", icon: <Book size={28} className="text-yellow-600" /> },
// ];

const Categories = ({ onCategory, active, categories }) => {

  return (
    <div className="col-span-12 md:col-span-3 bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Categories →</h3>
      <div className="space-y-4">
        {categories?.map((category) => (
          <button
            key={category._id}
            onClick={() => onCategory(category?.category)}
            className={`flex items-center space-x-3 p-3 ${
              active === category.category ? "bg-accent text-white" : "bg-gray-100 "
            }  rounded-lg cursor-pointer hover:bg-accent hover:text-white transition w-full `}
          >
            <span className="text-2xl">{category?.icon}</span>
            <p className="font-medium ">{category?.category}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
