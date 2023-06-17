import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingTORedirect";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const currUser = JSON.parse(localStorage.getItem("user"))

  console.log(currUser)
  return (currUser && currUser.role==='admin') ? children : <LoadingToRedirect />;
};

export default PrivateRoute;