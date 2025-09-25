import { Navigate } from "react-router-dom";

const Adminroute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/signin" />;
  }

  if (!user.isAdmin) {
    return <Navigate to="/page-not-found" />;
  }

  return children;
};

export default Adminroute;
