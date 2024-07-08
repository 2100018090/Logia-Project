import React from "react";
import { Link } from "react-router-dom";

const NavUsers = (props) => {
  const user = JSON.parse(localStorage.getItem("userLogin"));
  // if (user.role === "1") {
  // console.log(user);

  if (user.role >= "5") {
    return (
      <li><Link class="nav-link scrollto" to={props.path} >{props.nama}</Link></li>
    );
  }

  // }
};

export default NavUsers;
