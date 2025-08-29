import { ChevronRightIcon } from "lucide-react";

function Pagination() {
  return (
    <div className="flex justify-center mt-10 space-x-2">
      <a
        href="#"
        className="ring ring-primary bg-primary/20 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none"
      >
        1
      </a>
      <a
        href="#"
        className="hover:bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none"
      >
        2
      </a>
      <a
        href="#"
        className="hover:bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none"
      >
        3
      </a>
      <span className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 rounded-lg focus:outline-none">
        ...
      </span>
      <a
        href="#"
        className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 border rounded-lg hover:bg-gray-100 focus:outline-none"
      >
        21
      </a>

      <a
        href="#"
        className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 border rounded-lg hover:bg-gray-100 focus:outline-none"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </a>
    </div>
  );
}

export default Pagination;
