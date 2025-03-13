import {
  Book,
  Code,
  FlaskConical,
  Globe,
  PaintBucket,
  TestTube2,
} from "lucide-react";

const categories = [
  { name: "Programming", icon: <Code size={28} className="text-blue-600" /> },
  {
    name: "Science",
    icon: <FlaskConical size={28} className="text-green-600" />,
  },
  {
    name: "Mathematics",
    icon: <TestTube2 size={28} className="text-purple-600" />,
  },
  { name: "History", icon: <Globe size={28} className="text-orange-600" /> },
  {
    name: "Arts & Design",
    icon: <PaintBucket size={28} className="text-pink-600" />,
  },
  { name: "Business", icon: <Book size={28} className="text-yellow-600" /> },
];

export default function CourseCategories() {
  return (
    <section className="px-6 py-10 ">
      {/* section title */}
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Explore Course Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition"
          >
            {category.icon}
            <p className="mt-2 font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
