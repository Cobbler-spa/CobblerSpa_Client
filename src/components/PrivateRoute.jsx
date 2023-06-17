import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingTORedirect";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state.auth }));

  return (user && user.role==='admin') ? children : <LoadingToRedirect />;
};

export default PrivateRoute;