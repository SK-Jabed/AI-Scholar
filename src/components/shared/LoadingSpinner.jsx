import React from "react";
import { Loader2Icon } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <Loader2Icon className="h-12 w-12 animate-spin text-blue-500" />
    </div>
  );
};

export default LoadingSpinner;