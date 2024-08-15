import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import Swal from "sweetalert2";
import Aksi from "../auth-content/AksiTerbaru";

const ContactAdmin = () => {
  const [kontak, setKontak] = useState([]);

  const getContacts = async () => {
    try {
      const response = await fetch(`https://mpti-proyek.et.r.appspot.com/getcontact`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result); // Memastikan data yang diterima dari API

      // Jika result langsung berupa array kontak, gunakan result, jika tidak gunakan result.kontak
      setKontak(Array.isArray(result) ? result : result.kontak);
    } catch (err) {
      console.error("Fetch error: ", err.message);
      setKontak([]); // Mengatasi error dengan mengatur state ke array kosong
    }
  };

  const deleteContact = (id) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Berhasil kehapus!",
      onClick: (event) => event.preventDefault(),
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://mpti-proyek.et.r.appspot.com/contacts/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).then(async (res) => {
          Swal.fire("Dihapus!", "Kontak telah dihapus.", "Berhasil");
          getContacts(); // Memperbarui daftar kontak setelah dihapus
        });
      }
    });
  };

  useEffect(() => {
    getContacts(); // Dijalankan saat halaman ini pertama kali dirender
  }, []);

  return (
    <div>
      <Navbar />
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Contact</h2>
          </div>
          <div className="container p-5 mb-4">
            <div className="bg-light rounded-3">
              <div className="table table-responsive p-5 mb-4 bg-blue-200 rounded-3">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Email</th>
                      <th scope="col">Telp</th>
                      <th scope="col">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kontak && kontak.length > 0 ? (
                      kontak.map((kontak, index) => (
                        <tr key={kontak._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{kontak.email}</td>
                          <td>{kontak.telp}</td>
                          <Aksi
                            pathedit={`/editcontact/${kontak._id}`}
                            onclick={() => {
                              deleteContact(kontak._id);
                            }}
                          />
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4">Tidak ada kontak yang tersedia.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactAdmin;
