/* eslint-disable @next/next/no-img-element */
const courses = [
  {
    title: "Full-Stack Web Development",
    instructor: "John Doe",
    price: 49.99,
    duration: 40,
    image: "https://source.unsplash.com/400x300/?technology,code",
  },
  {
    title: "UI/UX Design Fundamentals",
    instructor: "Jane Smith",
    price: 29.99,
    duration: 25,
    image: "https://source.unsplash.com/400x300/?design,ui",
  },
  {
    title: "Data Science with Python",
    instructor: "Alice Johnson",
    price: 59.99,
    duration: 50,
    image: "https://source.unsplash.com/400x300/?data,science",
  },
  {
    title: "Digital Marketing Strategies",
    instructor: "Robert Brown",
    price: 39.99,
    duration: 30,
    image: "https://source.unsplash.com/400x300/?marketing,digital",
  },
  {
    title: "Cybersecurity Essentials",
    instructor: "Michael Scott",
    price: 44.99,
    duration: 35,
    image: "https://source.unsplash.com/400x300/?security,cyber",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    instructor: "Sarah Connor",
    price: 69.99,
    duration: 60,
    image: "https://source.unsplash.com/400x300/?ai,machine",
  },
];
const CategoryCourses = () => {
  return (
    <div className="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
        >
          <img
            src={image}
            alt={course.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {course.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{course.instructor}</p>
            <p className="text-primary font-bold mt-2">${course.price}</p>
          </div>
          <div className="p-4 bg-gray-100 flex justify-between items-center">
            <button className="bg-accent/90 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-accent transition">
              Enroll Now
            </button>
            <p className="text-sm text-gray-600">{course.duration} hrs</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCourses;
