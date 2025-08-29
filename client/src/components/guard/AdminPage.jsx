// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AdminPage = (props) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }
  return props.children;
};
