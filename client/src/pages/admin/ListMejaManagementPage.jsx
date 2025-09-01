import { SearchIcon } from "lucide-react";
import { AdminLayout } from "../../components/AdminLayout/AdminLayout";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ListMejaManagementPage = () => {
  const [listMeja, setListMeja] = useState([]);
  // const { userId } = useParams();
  const token = localStorage.getItem("token");

  const fetchingDataListMeja = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/list-meja/user/loggedin`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setListMeja(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchingDataListMeja();
  }, []);

  return (
    <AdminLayout
      title="List Meja Management"
      description="Daftar meja yang tersedia"
      rightSection={
        <Link to="/admin/list-meja/create">
          <Button color="primary" size="lg">
            Tambah Data Meja
          </Button>
        </Link>
      }
    >
      <div className="w-full flex items-center justify-center min-h-full p-2">
        <div className="container max-w-6xl">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Table Header */}
            <div className="p-6 border-b border-gray-200">
              {/* Search and Filter */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full "
                    placeholder="Search product here..."
                  />
                </div>
                <div>
                  <select className="border border-gray-300 rounded-lg px-4 py-2  w-full sm:w-auto">
                    <option value="">Filter Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      No. Meja
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Waktu Pemesanan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Catatan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {listMeja !== null ? (
                    listMeja.map((meja) => (
                      <tr
                        className="hover:bg-gray-50 transition-colors duration-150"
                        key={`${meja._id}`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {/* <div className="ml-4"> */}
                            <div className="text-sm font-medium text-gray-900">
                              {meja.noMeja}
                            </div>
                            {/* </div> */}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {meja.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {meja.waktuPemesanan}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {meja.note}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                          >
                            Edit
                          </a>
                          <a
                            href="#"
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-4 text-center text-gray-500"
                      >
                        Tidak ada data meja tersedia.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
              <div className="flex items-center justify-between flex-col sm:flex-row">
                <div className="mb-4 sm:mb-0">
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">5</span> of{" "}
                    <span className="font-medium">24</span> results
                  </p>
                </div>
                <div>
                  <nav
                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600 hover:bg-indigo-100"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      3
                    </a>
                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                      ...
                    </span>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      8
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      9
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ListMejaManagementPage;
