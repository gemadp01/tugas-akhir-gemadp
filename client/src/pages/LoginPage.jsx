import { EyeIcon } from "lucide-react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login gagal");
        return;
      }

      // simpan token ke localStorage
      localStorage.setItem("token", data.token);

      alert("Login berhasil!");
      navigate("/admin/dashboard");
    } catch (err) {
      console.log(err);
      setError("Terjadi kesalahan server");
    }
  };

  return (
    <Layout>
      <div className="container min-h-screen flex justify-center items-center">
        <div className="w-2xl mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1 text-center">
            Login
          </h2>
          <form method="POST" autoComplete="off" onSubmit={handleLogin}>
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
                  placeholder="your username here..."
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="password" className="text-primary mb-2 block" />
                Password
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full border border-gray-300 px-4 py-3 text-primary text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                    placeholder="***********"
                  />
                  <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-8 text-primary border-l border-gray-300">
                    <EyeIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button type="submit" className="w-full">
                Login
              </Button>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div className="flex gap-2 pt-5">
                <p className="text-primary text-sm">
                  Don't have an account yet?
                </p>
                <Link className="text-primary text-sm underline" to="/register">
                  Sign up!
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
