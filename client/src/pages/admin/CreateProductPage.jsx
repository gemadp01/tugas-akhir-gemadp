import { useNavigate } from "react-router-dom";
import { AdminLayout } from "../../components/AdminLayout/AdminLayout";
import { Breadcrumb } from "../../components/Breadcrumb";
import Button from "../../components/Button";

const CreateProductPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      productName: e.target.productName.value,
      productCategory: e.target.productCategory.value,
      productPrice: e.target.productPrice.value,
      // productImage: e.target.productImage.files[0],
      productQuantity: e.target.productQuantity.value,
      productStatus: e.target.productStatus.value,
    };

    try {
      const res = await fetch("http://localhost:3000/api/products/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Gagal menambahkan data, status: " + res.status);
      }

      alert("Data berhasil ditambahkan!");
      setTimeout(() => {
        navigate("/admin/products");
      }, 2000);
    } catch (err) {
      alert("Terjadi error: " + err.message);
    }
  };

  return (
    <AdminLayout title="Create Product" description="Tambah Product Baru">
      <Breadcrumb />
      <div className="bg-white p-10 rounded-lg shadow-lg w-full ">
        <h2 className="text-3xl font-semibold mb-6  text-gray-800">
          Tambah Data Meja
        </h2>
        <form
          method="POST"
          // encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label
              htmlFor="productName"
              className="block text-gray-700 font-medium mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="w-full px-4 py-3 border rounded-lg"
              autoFocus
              placeholder="Masukkan nama produk"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="productCategory"
              className="block text-gray-700 font-medium mb-2"
            >
              Product Category
            </label>
            <select
              name="productCategory"
              id="productCategory"
              className="w-full px-4 py-3 border rounded-lg"
            >
              <option value="makanan">Makanan</option>
              <option value="minuman">Minuman</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="productQuantity"
              className="block text-gray-700 font-medium mb-2"
            >
              Quantity
            </label>
            <input
              type="number"
              id="productQuantity"
              name="productQuantity"
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="productPrice"
              className="block text-gray-700 font-medium mb-2"
            >
              Price
            </label>
            <input
              type="text"
              id="productPrice"
              name="productPrice"
              className="w-full px-4 py-3 border rounded-lg"
              autoFocus
              placeholder="Masukkan harga produk"
            />
          </div>
          {/* <div className="mb-5">
            <label
              htmlFor="productImage"
              className="block text-gray-700 font-medium mb-2"
            >
              Product Image
            </label>
            <input
              type="file"
              id="productImage"
              name="productImage"
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div> */}

          <div className="mb-5">
            <label
              htmlFor="productStatus"
              className="block text-gray-700 font-medium mb-2"
            >
              Product Status
            </label>
            <select
              name="productStatus"
              id="productStatus"
              className="w-full px-4 py-3 border rounded-lg"
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>

          <Button type="submit" color="primary" size="lg" className="w-full">
            Tambah data
          </Button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreateProductPage;
