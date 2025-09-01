import { useParams, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import { ProductCard } from "../components/ProductCard";
import { ProjectAccordion } from "../components/ProjectAccordion";
import { useState, useEffect } from "react";

const CafeDetailPage = () => {
  const [products, setProducts] = useState([]);
  const [listMeja, setListMeja] = useState([]);
  const { userId } = useParams();
  const location = useLocation();
  const { namaCafe, lokasiCafe, noTelp } = location.state || {};

  // Sample product data
  // const products = Array.from({ length: 10 }, (_, index) => ({
  //   id: index + 1,
  //   name: "Nama Product",
  //   price: "Rp. xxx",
  //   stock: "Stock",
  //   image: `https://via.placeholder.com/600x400/000000/FFFFFF?text=600+x+400`,
  // }));

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/${userId}`
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchlistMeja = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/list-meja/${userId}`
      );
      const data = await response.json();
      console.log(data);
      setListMeja(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchlistMeja();
  }, []);

  return (
    <div className="min-h-screen mt-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cafe Info */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {namaCafe}
              </h2>
              <p className="text-gray-600">{lokasiCafe}</p>
              <p className="text-gray-600">{noTelp}</p>
            </div>
          </div>
        </div>

        <ProjectAccordion dataProducts={products} dataListMeja={listMeja} />

        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default CafeDetailPage;
