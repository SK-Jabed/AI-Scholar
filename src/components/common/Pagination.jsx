import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center justify-center mt-6 space-y-4">
      {/* Pagination Controls */}
      <div className="flex items-center space-x-2">
        {/* Previous Button */}
        <button
          className={`px-4 py-2 rounded-md flex items-center space-x-2 transition-all duration-200 ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-900"
          }`}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft size={18} />
          <span>Prev</span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-1">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                page === currentPage
                  ? "bg-black text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-black hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          className={`px-4 py-2 rounded-md flex items-center space-x-2 transition-all duration-200 ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-900"
          }`}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <span>Next</span>
          <ChevronRight size={18} />
        </button>

        {/* Items Per Page Selection */}
        <div className="flex items-center space-x-2 ml-4">
          <label
            htmlFor="itemsPerPage"
            className="text-sm font-medium text-gray-600"
          >
            Items per page:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:border-black focus:ring-2 focus:ring-black transition-all duration-200"
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Pagination;