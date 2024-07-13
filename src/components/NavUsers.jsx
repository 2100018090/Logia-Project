import React from "react";
import { Link } from "react-router-dom";

const NavUsers = (props) => {
  const user = JSON.parse(localStorage.getItem("userLogin"));

  if (user && user.role >= "5") {
    return (
      <li><Link className="nav-link scrollto" to={props.path}>{props.nama}</Link></li>
    );
  }

  return null;
};

export default NavUsers;
