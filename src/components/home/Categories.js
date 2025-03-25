
const Categories = ({ onCategory, active, categories }) => {

  return (
    <div className="col-span-12 md:col-span-3 bg-white p-6 ">
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
            <p className="font-medium ">{category?.category}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
