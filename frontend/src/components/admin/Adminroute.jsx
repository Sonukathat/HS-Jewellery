import { Navigate } from "react-router-dom";

const Adminroute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!user.isAdmin) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default Adminroute;
