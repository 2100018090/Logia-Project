import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import userlogin from "./userlogin";
import NavUser from "./NavUser";
import NavUsers from "./NavUsers";

const Navbar = () => {
  const navigate = useNavigate();
  const user = userlogin();

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
        navigate("/");
      }
    });
  };

  const onLogin = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Maaf',
      text: 'Silahkan Login terlebih dahulu!',
      confirmButtonText: 'OK'
    }).then(() => {
      navigate("/login");
    });
  };
  
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/proyekmpti/gambar%20/gambar%208.jpg"
            alt=""
          />
          {/* <h1><Link to='/detailusers/:id'>{user.nama}</Link></h1> */}
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link className="nav-link scrollto active" to="/">
                Beranda
              </Link>
            </li>
                <Link to="/psikolog">Psikolog</Link>
              <NavUsers nama="Layanan" path="/paketpsikolog" />
            <li className="dropdown">
              <Link to="#">
                <span>Fitur</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li>
                  <Link to="/literasi">Literasi</Link>
                </li>
                <li>
                  <Link to="/vedio">Video</Link>
                </li>
                {user && (
                  <li>
                    <Link to="/chat">Diskusi</Link>
                  </li>
                )}
              </ul>
            </li>
            <NavUsers nama="Riwayat" path="/riwayat" />
            <NavUser nama="Users" path="/users" />
            <NavUser nama="Booking" path="/booking" />
            {user ? (
              <li className="dropdown">
                <Link to="#">
                  <span>Pengaturan</span> <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="/detailusers/:id">Profil</Link>
                  </li>
                  <li>
                    <Link to="/contact">Kontak</Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li>
                <Link className="nav-link scrollto" to="/contact">
                  Kontak
                </Link>
              </li>
            )}
            {user ? (
              <li>
                <button className="getstarted scrollto" onClick={onLogout}>
                  Keluar
                </button>
              </li>
            ) : (
              <li>
                <button className="getstarted scrollto" onClick={onLogin}>
                  Masuk
                </button>
              </li>
            )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
};

export default Navbar;
