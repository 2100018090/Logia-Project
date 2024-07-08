import React from "react";
import { Navigate } from "react-router-dom";

const PageUser = (props) => {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  if (userLogin.role === "4") {
    return <Navigate to="/users" />;
  }
  return props.children;
};

export default PageUser;
