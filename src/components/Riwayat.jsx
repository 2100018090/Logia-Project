import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Aksi2 from "./auth-content/Aksi2";
import userlogin from "./userlogin";

const Booking = () => {
  let [booking, setBooks] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [sortJudul] = useState("");

  const getAllBooking = async () => {
    const user = userlogin();
    console.log("User logged in:", user);

    try {
      const response = await fetch(`https://mpti-proyek.et.r.appspot.com/booking/${user.nama}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Bookings received:", data.booking);
        setBooks(data.booking);
      } else {
        console.error("Failed to fetch bookings:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    if (keyword === "") {
      getAllBooking();
    }
  }, [keyword, sortJudul]);

  if (sortJudul === "A-Z") {
    booking = booking.sort((a, b) => a.namaBuku.localeCompare(b.namaBuku));
  } else if (sortJudul === "Z-A") {
    booking = booking.sort((a, b) => b.namaBuku.localeCompare(a.namaBuku));
  } else {
    booking = booking.sort();
  }

  return (
    <div>
      <Navbar />
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Riwayat</h2>
          </div>
          <div className="container p-5 mb-4 ">
            <div className="bg-light rounded-3">
              <div className="row mx-5"></div>
              <div className="col-lg-6 my-3 justify-content-center d-block">
                {/* <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control mx-5"
                    placeholder="cari nama booking ..."
                    aria-label="cari nama booking"
                    value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                  />
                </div> */}
              </div>
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
                    {booking.map((book, index) => {
                      return (
                        <tr key={book._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{book.nama}</td>
                          <td>{book.tglBooking}</td>
                          <td>{book.layanan}</td>
                          <td>{book.harga}</td>
                          <Aksi2 pathdetail={`/detailRiwayat/${book._id}`} />
                        </tr>
                      );
                    })}
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
