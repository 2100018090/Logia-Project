import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import userlogin from "./userlogin";
import NavUser from "./NavUser";
import NavUsers from "./NavUsers";

const Navbar = () => {
  const navigate = useNavigate();
  // const user = userlogin();

  const onLogout = () => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Sesi Anda akan dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Keluar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Anda Berhasil Keluar Silahkan Kembali!", "", "success");
        localStorage.clear("userLogin");
        localStorage.clear("token");
        navigate("/login");
      }
    });
  };
  return (

        <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">

          <div class="logo">
            <img src="https://storage.googleapis.com/proyekmpti/gambar%20/gambar%208.jpg" alt=""  />
            {/* <h1><Link to='/detailusers/:id'>{user.nama}</Link></h1> */}
            {/* <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
          </div>

          <nav id="navbar" class="navbar">
            <ul>
              <li><Link class="nav-link scrollto active" to="/">Beranda</Link></li>
              <li><Link class="nav-link scrollto" to="/psikolog">Psikolog</Link></li>
              <li><Link class="nav-link scrollto" to='/paketpsikolog'>Layanan</Link></li>
              <li class="dropdown"><Link><span>Fitur</span> <i class="bi bi-chevron-down"></i></Link>
                <ul>
                  <li><Link to='/literasi'>Literasi</Link></li>
                  <li><Link to='/vedio'>Video</Link></li>
                  <li><Link to='/chat'>Diskusi</Link></li>
                </ul>
              </li>
              <NavUsers nama={"Riwayat"} path={"/riwayat"}/>
              <NavUser nama={"Users"} path={"/users"} />
              <NavUser nama={"Booking"} path={"/booking"} />
              <li class="dropdown"><Link><span>Pengaturan</span> <i class="bi bi-chevron-down"></i></Link>
                <ul>
                  <li><Link to='/detailusers/:id'>Profil</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                </ul>
              </li>
              <li><button class="getstarted scrollto" onClick={onLogout}>Keluar</button></li>
              {/* <li><a class="getstarted scrollto" href="#about">Log Out</a></li> */}
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}

        </div>
      </header>
  );
};
export default Navbar;
