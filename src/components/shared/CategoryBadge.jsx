import React from 'react';

// Category badge with dynamic colors
const CategoryBadge = ({ category }) => {
  const getCategoryColor = (cat) => {
    const colors = {
      "web-development": "bg-blue-100 text-blue-800",
      "backend-development": "bg-green-100 text-green-800",
      "data-science": "bg-purple-100 text-purple-800",
      "machine-learning": "bg-yellow-100 text-yellow-800",
      "artificial-intelligence": "bg-red-100 text-red-800",
      "cloud-computing": "bg-indigo-100 text-indigo-800",
      "cyber-security": "bg-pink-100 text-pink-800",
      "mobile-development": "bg-orange-100 text-orange-800",
      "game-development": "bg-teal-100 text-teal-800",
      "software-engineering": "bg-gray-100 text-gray-800",
    };
    return colors[cat] || "bg-gray-100 text-gray-800";
  };

  const formattedCategory = category
    ? category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "General";

  return (
    <span
      className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(category)}`}
    >
      {formattedCategory}
    </span>
  );
};

export default CategoryBadge;