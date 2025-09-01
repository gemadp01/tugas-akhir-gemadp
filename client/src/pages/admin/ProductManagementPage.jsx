import { SearchIcon } from "lucide-react";
import { AdminLayout } from "../../components/AdminLayout/AdminLayout";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductManagementPage = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");

  const fetchingDataProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/products/user/loggedin",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const confirmDelete = confirm(
      "Apakah Anda yakin ingin menghapus product ini?"
    );
    if (!confirmDelete) return;

    try {
      const productId = e.target.productId.value;
      const res = await fetch(
        `http://localhost:3000/api/products/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert("Product berhasil dihapus!");
        // update state supaya UI ikut berubah
        setProducts((prev) => prev.filter((p) => p._id !== productId));
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchingDataProducts();
  }, []);

  return (
    <AdminLayout
      title="Product Management"
      description="Daftar Product"
      rightSection={
        <Link to="/admin/products/create">
          <Button color="primary" size="lg">
            Tambah Data Product
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
                  <select className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto">
                    <option value="">Filter Category</option>
                    <option value="makanan">Makanan</option>
                    <option value="minuman">Minuman</option>
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
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    {/* <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Image
                    </th> */}
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
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
                  {/* Row 1 */}
                  {products !== null ? (
                    products.map((product) => (
                      <tr
                        className="hover:bg-gray-50 transition-colors duration-150"
                        key={product._id}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={
                                  product.productImage
                                    ? `http://localhost:3000/${product.productImage}`
                                    : "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                                }
                                alt="product"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {product.productName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {product.productCategory}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            Rp. {product.productPrice.toLocaleString("id-ID")}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {product.productQuantity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {product.productStatus === "available" ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {product.productStatus}
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              {product.productStatus}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                          >
                            Edit
                          </a>
                          <form
                            method="POST"
                            onSubmit={handleDelete}
                            className="inline"
                          >
                            <input
                              type="hidden"
                              name="productId"
                              value={product._id}
                            />
                            <button
                              type="submit"
                              className="text-red-600 hover:text-red-900 cursor-pointer"
                            >
                              Delete
                            </button>
                          </form>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500"
                      >
                        Tidak ada data products.
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

export default ProductManagementPage;
