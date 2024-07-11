import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Swal from "sweetalert2";
import Aksi from "./auth-content/Aksi";

const Booking = () => {
  const [booking, setBooks] = useState([]);
  const [sortJudul] = useState("");

  const getAllSemuaBooking = async () => {
    const response = await fetch(`https://mpti-proyek.et.r.appspot.com/booking`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const { booking } = await response.json();
    setBooks(booking);
  };

  const deleteBook = (id) => {
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
        fetch(`https://mpti-proyek.et.r.appspot.com/booking/hapus/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).then(async (res) => {
          Swal.fire("Dihapus!", "Pengguna telah dihapus.", "Berhasil");
          getAllSemuaBooking();
        });
      }
    });
  };

  useEffect(() => {
    localStorage.getItem("userLogin");
    localStorage.getItem("token");
    getAllSemuaBooking();
  }, [sortJudul]);

  if (sortJudul === "A-Z") {
    booking.sort((a, b) => a.nama.localeCompare(b.nama));
  } else if (sortJudul === "Z-A") {
    booking.sort((a, b) => b.nama.localeCompare(a.nama));
  } else {
    booking.sort();
  }

  return (
    <div>
      <Navbar />
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Riwayat</h2>
          </div>
          <div className="container p-5 mb-4">
            <div className="bg-light rounded-3">
              <div className="table table-responsive p-5 mb-4 bg-blue-200 rounded-3">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Nama</th>
                      <th scope="col">TglBooking</th>
                      <th scope="col">Layanan</th>
                      <th scope="col">Harga</th>
                      <th scope="col">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {booking.map((booking, index) => (
                      <tr key={booking._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{booking.nama}</td>
                        <td>{booking.tglBooking}</td>
                        <td>{booking.layanan}</td>
                        <td>{booking.harga}</td>
                        <Aksi
                          pathdetail={`/detail/${booking._id}`}
                          pathedit={`/ubah/${booking._id}`}
                          onclick={() => deleteBook(booking._id)}
                        />
                      </tr>
                    ))}
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

export default Booking;
