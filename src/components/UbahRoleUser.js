import React, { useEffect, useState, useCallback } from "react";
import Navbar from "./navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UbahRoleUser = () => {
  const [namaUser, setNamaUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [roleUser, setRoleUser] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleEdit = async (event) => {
    event.preventDefault();
    const data = { role: roleUser };

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(
      `https://mpti-proyek.et.r.appspot.com/ubahRoleUser/${id}`,
      requestOptions
    );
    const success = await response.json();

    if (success.modifiedCount === 1) {
      navigate("/users");
      Swal.fire({
        icon: "success",
        title: "Role User Berhasil Diubah",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Role User Gagal Diubah",
      });
    }
  };

  const getUserById = useCallback(async () => {
    const response = await fetch(
      `https://mpti-proyek.et.r.appspot.com/users/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const { user } = await response.json();
    setNamaUser(user.nama);
    setEmailUser(user.email);
    setRoleUser(user.role);
  }, [id]); // Menambahkan id ke dalam array dependencies useCallback

  useEffect(() => {
    getUserById(); // Menggunakan getUserById di dalam useEffect
  }, [getUserById]); // Menambahkan getUserById ke dalam array dependencies useEffect

  const title = "Ubah Role User";

  return (
    <div>
      <Navbar />
      <div className="min-vh-100 bg-secondary bg-opacity-50">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col col-md-6">
              <div className="card p-3 my-5">
                <h1 className="text-center">{title}</h1>
                <form onSubmit={handleEdit}>
                  <div className="mb-3">
                    <label htmlFor="nama" className="form-label">
                      Nama
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={namaUser}
                      name="nama"
                      id="nama"
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={emailUser}
                      name="email"
                      id="email"
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select"
                      name="role"
                      value={roleUser}
                      onChange={(event) => setRoleUser(event.target.value)}
                    >
                      <option value="1">1</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="form-control btn btn-primary"
                    >
                      Ubah Role User
                    </button>
                  </div>
                </form>
                <Link to={"/users"}>Kembali</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbahRoleUser;
