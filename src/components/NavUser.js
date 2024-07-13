import React from "react";
import { Link } from "react-router-dom";

const NavUser = (props) => {
  const user = JSON.parse(localStorage.getItem("userLogin"));

  if (user && (user.role === "1" || user.role === "2" || user.role === "3")) {
    return (
      <li><Link className="nav-link scrollto" to={props.path}>{props.nama}</Link></li>
    );
  }

  return null;
};

export default NavUser;
