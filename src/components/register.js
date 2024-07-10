import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [nama, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();
    const newUser = {
      nama,
      email,
      password,
    };

    if (password.length < 5) {
      return Swal.fire({
        icon: "error",
        text: "Password harus terdiri dari 5 karakter atau lebih",
        title: "Gagal",
      });
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    };

    try {
      const response = await fetch(
        `https://mpti-proyek.et.r.appspot.com/tambahUser`,
        requestOptions
      );

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
      }

      // const users = await response.json(); // Remove if not used

      navigate("/login");

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Silahkan login!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal mendaftar",
        text: error.message || "Terjadi kesalahan saat mendaftar.",
      });
    }
  };

  return (
    <div className="min-vh-100 bg-secondary bg-opacity-50">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col col-md-6">
            <div className="card p-3 my-5">
              <h1 className="my-3 text-center">
                <img
                  src="https://storage.googleapis.com/proyekmpti/gambar%20/gambar%208.jpg"
                  alt=""
                  style={{ width: "200px", height: "auto" }}
                />
              </h1>
              <form onSubmit={register}>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="nama" className="form-label">
                      Nama
                    </label>
                    <input
                      type="text"
                      className="form-control col-md-6"
                      id="nama"
                      name="nama"
                      required
                      value={nama}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control col-md-6"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Kata Sandi
                    </label>
                    <input
                      type="password"
                      className="form-control col-md-6"
                      name="password"
                      id="password"
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="form-control btn btn-primary"
                  >
                    Daftar
                  </button>
                  <div className="my-3">
                    <span>
                      Sudah punya akun?{" "}
                      <a href="/login" className="text-decoration-none">
                        Silahkan login
                      </a>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
