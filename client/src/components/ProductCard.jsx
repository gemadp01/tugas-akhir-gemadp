export const ProductCard = ({ name, price, stock, status, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="aspect-[3/2] bg-black flex items-center justify-center">
        {/* <span className="text-white text-lg">600 × 400</span> */}
        <img src={`http://localhost:3000/${image}`} alt="" />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-1">{name}</h3>
        <p className="text-sm font-semibold text-gray-900 mb-1">
          Rp. {price.toLocaleString("id-ID")}
        </p>
        <p className="text-sm text-gray-500">Stock: {stock}</p>
        {status === "available" ? (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {status}
          </span>
        ) : (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            {status}
          </span>
        )}
      </div>
    </div>
  );
};
