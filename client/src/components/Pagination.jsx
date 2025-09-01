import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(3);

  const pages = [1, 2, 3, 4];

  return (
    <div className="flex justify-center items-center space-x-2 mb-12">
      <button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 text-sm rounded ${
            currentPage === page
              ? "bg-gray-600 text-white"
              : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
        className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
