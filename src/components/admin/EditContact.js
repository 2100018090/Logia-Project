import React, { useEffect, useState, useCallback } from "react";
import Swal from "sweetalert2";
import Navbar from "../navbar";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEdit = async (event) => {
    event.preventDefault();
    const userLogin = localStorage.getItem("userLogin");
    if (!userLogin) {
      return navigate("/login");
    }
    const data = {
      email,
      telp,
    };

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      `https://mpti-proyek.et.r.appspot.com/contacts/${id}`,
      requestOptions
    );
    const contact = await response.json();
    if (response.status === 200) {
      navigate("/contact_admin");
      Swal.fire({
        icon: "success",
        title: "Berhasil Ubah Kontak",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: contact.message,
      });
    }
  };

  const getContactById = useCallback(async () => {
    const response = await fetch(
      `https://mpti-proyek.et.r.appspot.com/contacts/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const { contact } = await response.json();
    setEmail(contact.email);
    setTelp(contact.telp);
  }, [id]);

  useEffect(() => {
    getContactById();
    localStorage.getItem("userLogin");
    localStorage.getItem("token");
  }, [getContactById]);

  const title = "Ubah Data Kontak";

  return (
    <div>
      <Navbar />
      <section id="contact" className="contact">
        <div className="min-vh-100 bg-secondary bg-opacity-50">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col col-md-6">
                <div className="card p-3 my-5">
                  <h1 className="text-center">{title}</h1>
                  <form onSubmit={handleEdit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Masukkan email.."
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="telp" className="form-label">
                        Telepon
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="telp"
                        id="telp"
                        placeholder="Masukkan nomor telepon.."
                        required
                        value={telp}
                        onChange={(event) => setTelp(event.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <button
                        type="submit"
                        className="form-control btn btn-primary"
                      >
                        Ubah
                      </button>
                    </div>
                  </form>
                  <Link to={"/contact"}>Kembali</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditContact;
