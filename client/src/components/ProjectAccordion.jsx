import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { CafeTable } from "./CafeTable";

export const ProjectAccordion = ({ dataProducts, dataListMeja }) => {
  const [activeTab, setActiveTab] = useState("Products");
  const tabs = ["Products", "Ketersediaan meja"];

  console.log(dataProducts);

  return (
    <>
      <div className="mb-8">
        {/* Tabs */}
        <div className="flex space-x-0 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === tab
                  ? "bg-gray-600 text-white border-gray-600"
                  : "bg-white text-gray-700 border-transparent hover:text-gray-900"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {activeTab === "Products" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {dataProducts.length > 0 ? (
            dataProducts.map((product) => (
              <ProductCard
                key={product._id}
                name={product.productName}
                price={product.productPrice}
                stock={product.productQuantity}
                status={product.productStatus}
                image={product.productImage}
              />
            ))
          ) : (
            <p className="text-gray-500">No data available.</p>
          )}
        </div>
      )}

      {/* Ketersediaan Meja */}
      {activeTab === "Ketersediaan meja" &&
        (dataListMeja.length > 0 ? (
          dataListMeja.map((meja) => (
            <CafeTable
              key={meja._id}
              noMeja={meja.noMeja}
              waktuPemesanan={meja.waktuPemesanan}
              note={meja.note}
              status={meja.status}
            />
          ))
        ) : (
          <p className="text-gray-500">No data available.</p>
        ))}
    </>
  );
};
