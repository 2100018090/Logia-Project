import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import userlogin from "./userlogin";

const DetailUsers = () => {

  const user = userlogin();


  return (
    <div>
      <Navbar />
      <div className="min-vh-100 bg-secondary bg-opacity-50" id="users">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col col-md-8">
              <div className="card p-3 my-5">
                <h2 className="text-center">Profil Pengguna</h2>
                {/* <div className="row">
                  <div className="mb-3 col-5">
                    <font size={5}>Kode Barcode</font>
                  </div>
                  <div className="mb-3 col-1">
                    <font size={5}>: </font>
                  </div>
                  <div className="mb-3 col-6">
                    <font size={5}>{user._id}</font>
                  </div>
                </div> */}
                <div className="row">
                  <div className="mb-3 col-5">
                    <font size={5}>Nama</font>
                  </div>
                  <div className="mb-3 col-1">
                    <font size={5}>: </font>
                  </div>
                  <div className="mb-3 col-6">
                    <font size={5}>{user.nama}</font>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-5">
                    <font size={5}>Email</font>
                  </div>
                  <div className="mb-3 col-1">
                    <font size={5}>: </font>
                  </div>
                  <div className="mb-3 col-6">
                    <font size={5}>{user.email}</font>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="mb-3 col-5">
                    <font size={5}>Password</font>
                  </div>
                  <div className="mb-3 col-1">
                    <font size={5}>: </font>
                  </div>
                  <div className="mb-3 col-6">
                    <font size={5}>{user.password}</font>
                  </div>
                </div>   */}
                <div className="row">
                  <div className="mb-3 col-5">
                    <font size={5}>Role</font>
                  </div>
                  <div className="mb-3 col-1">
                    <font size={5}>: </font>
                  </div>
                  <div className="mb-3 col-6">
                    <font size={5}>{user.role}</font>
                  </div>
                </div>
                <div className="my-3">
                  <div className="float-end mx-5">
                    <Link to={"/"}>Kembali</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUsers;
