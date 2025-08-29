import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import FindCafePage from "./pages/FindCafePage";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import CafeDetailPage from "./pages/CafeDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/admin/DashboardPage";
import ProductManagementPage from "./pages/admin/ProductManagementPage";
import CreateProductPage from "./pages/admin/CreateProductPage";
import EditProductPage from "./pages/admin/EditProductPage";
import ListMejaManagementPage from "./pages/admin/ListMejaManagementPage";
import CreateListMejaPage from "./pages/admin/CreateListMejaPage";
import EditListMejaPage from "./pages/admin/EditListMejaPage";

function App() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  return (
    <>
      {!location.pathname.startsWith("/admin") ? <Header /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-cafe" element={<FindCafePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/find-cafe/cafe-detail/:id" element={<CafeDetailPage />} />

        <Route
          path="/login"
          element={token ? <Navigate to="/admin/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={
            token ? <Navigate to="/admin/dashboard" /> : <RegisterPage />
          }
        />

        <Route path="/admin">
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="products" element={<ProductManagementPage />} />
          <Route path="products/create" element={<CreateProductPage />} />
          <Route path="products/edit/:id" element={<EditProductPage />} />

          <Route path="list-meja" element={<ListMejaManagementPage />} />
          <Route path="list-meja/create" element={<CreateListMejaPage />} />
          <Route path="list-meja/edit/:id" element={<EditListMejaPage />} />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>

      {!location.pathname.startsWith("/admin") ? <Footer /> : null}
      {/* <Coba /> */}
    </>
  );
}

export default App;
