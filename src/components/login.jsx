import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = async (event) => {
    event.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      return Swal.fire({
        icon: "error",
        text: "Email dan Password harus diisi",
        title: "Email dan Password Diperlukan!",
      });
    }

    const userLogin = {
      email,
      password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLogin),
    };

    try {
      const response = await fetch(
        `https://mpti-proyek.et.r.appspot.com/login`,
        requestOptions
      );

      const { dataUser: user, message, token } = await response.json();

      if (!response.ok) {
        return Swal.fire({
          icon: "error",
          title: message,
        });
      }

      localStorage.setItem("token", token);
      localStorage.setItem("userLogin", JSON.stringify(user));

      if (user.role === "5") {
        navigate("/");
      } else if (user.role === "1") {
        navigate("/dashboard_admin");
      } else {
        // Default navigation if role is not 1 or 5
        navigate("/login");
      }

      Swal.fire({
        icon: "success",
        title: message,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Terjadi kesalahan",
        text: "Gagal melakukan login, silakan coba lagi.",
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
              <div className="card-body">
                <form onSubmit={onLogin}>
                  <div className="col">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Masukkan email ..."
                        name="email"
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
                        className="form-control"
                        placeholder="Masukkan kata sandi ..."
                        name="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="form-control btn btn-primary my-2"
                    >
                      Masuk
                    </button>
                    <div className="my-3 col">
                      <span className="d-block my-2">
                        Belum punya akun?{" "}
                        <a href="/register" className="text-decoration-none">
                          Daftar
                        </a>
                      </span>
                      <span className="d-block my-2">
                        Kembali ke Beranda{" "}
                        <a href="/" className="text-decoration-none">
                          Kembali
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
    </div>
  );
};

export default Login;
