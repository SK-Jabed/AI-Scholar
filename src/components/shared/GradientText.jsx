import React from "react";

const GradientText = ({ children }) => {
  return (
    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export default GradientText;
