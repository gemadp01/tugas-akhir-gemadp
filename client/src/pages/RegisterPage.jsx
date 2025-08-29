import { ArrowRightIcon, EyeIcon } from "lucide-react";
import Button from "../components/Button";
import Map from "../components/Map";
import Layout from "../components/Layout";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [location, setLocation] = useState(""); // alamat text
  const [coords, setCoords] = useState(null); // koordinat
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  // kalau user ketik manual alamat
  const handleInputChange = async (e) => {
    const value = e.target.value;
    setLocation(value);

    if (value.length > 3) {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
        );
        const data = await res.json();

        if (data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);
          setCoords([lat, lon]);
        }
      } catch (err) {
        console.error("Gagal cari lokasi:", err);
      }
    }
  };

  // callback dari map ketika user klik
  const handleMapSelect = (placeName, latlng) => {
    setLocation(placeName); // ubah input field
    setCoords([latlng.lat, latlng.lng]); // simpan koordinat
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent form submit
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value,
      namaCafe: e.target.namaCafe.value,
      noTelp: e.target.noTelp.value,
      lokasiCafe: e.target.lokasiCafe.value,
    };

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Request gagal, status: " + res.status);
      }

      alert("Data berhasil dikirim!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error("Error:", err);
      alert("Terjadi error: " + err.message);
    }
  };

  return (
    <Layout>
      <div className="container min-h-screen my-50 flex justify-center items-center">
        <div className="w-2xl mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1 text-center">
            Register
          </h2>
          <form method="POST" autoComplete="off" onSubmit={handleSubmit}>
            <p className="text-red-500" />
            <div className="space-y-2">
              <div>
                <label htmlFor="username" className="text-primary mb-2 block" />
                Username
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block w-full border border-gray-300 px-4 py-3 text-primary text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                  placeholder="Masukkan Username"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="password" className="text-primary mb-2 block" />
                Password
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="block w-full border border-gray-300 px-4 py-3 text-primary text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                    placeholder="Masukkan Password"
                    required
                  />
                  <div
                    onClick={togglePassword}
                    className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-8 text-primary border-l border-gray-300"
                  >
                    <EyeIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="email" className="text-primary mb-2 block" />
                Email
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full border border-gray-300 px-4 py-3 text-primary text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                  placeholder="Masukkan email"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="namaCafe" className="text-primary mb-2 block" />
                Nama Cafe
                <input
                  type="text"
                  name="namaCafe"
                  id="namaCafe"
                  className="block w-full border border-gray-300 px-4 py-3 text-primary text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                  placeholder="Masukkan Nama Cafe"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="noTelp" className="text-primary mb-2 block" />
                Nomor Telepon
                <input
                  type="text"
                  name="noTelp"
                  id="noTelp"
                  className="block w-full border border-gray-300 px-4 py-3 text-primary text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                  placeholder="Masukkan Nomor Telepon"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label
                  htmlFor="lokasiCafe"
                  className="text-primary mb-2 block"
                />
                Lokasi
                <input
                  type="text"
                  name="lokasiCafe"
                  id="lokasiCafe"
                  className="block w-full border border-gray-300 px-4 py-3 text-primary text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                  value={location}
                  onChange={handleInputChange}
                  placeholder="Tulis lokasi atau klik di peta"
                  required
                />
                <Map coords={coords} onMapSelect={handleMapSelect} />
              </div>
            </div>
            <div className="mt-4">
              <Button type="submit" className="w-full">
                Create an Account <ArrowRightIcon className="w-4 h-4 inline" />
              </Button>
              <div className="flex gap-2 pt-5">
                <p className="text-primary text-sm">Already have an account?</p>
                <Link to="/login" className="text-primary text-sm underline">
                  Login here!
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default RegisterPage;
