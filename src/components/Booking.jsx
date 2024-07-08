import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Swal from "sweetalert2";
// import ButtonAdd from "./auth-content/ButtonAdd";
import Aksi from "./auth-content/Aksi";
// import { Header } from "./header";
// import ProtectedContent from "./ProtectedContent";

const Booking = () => {
  let [booking, setBooks] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [sortJudul] = useState("");



  const getAllSemuaBooking = async () => {

    const response = await fetch(`${process.env.REACT_APP_API_URI}/booking`, {
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
        fetch(`${process.env.REACT_APP_API_URI}/booking/hapus/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).then(async (res) => {
          // const booking = await res.json();
          // console.log(booking);
          Swal.fire("Dihapus!", "Pengguna telah dihapus.", "Berhasil");
          getAllSemuaBooking();
        });
      }
    });
  };

  // const onSearch = async () => {
  //   const response = await fetch(
  //     `${process.env.REACT_APP_API_URI}/booking/search?namaBuku=${keyword}`,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     }
  //   );
  //   const result = await response.json();
  //   setBooks(result);
  // };

  useEffect(() => {
    localStorage.getItem("userLogin");
    localStorage.getItem("token");
    if (keyword === "") {
      getAllSemuaBooking();
    } else {
      // onSearch();
    }
  }, [keyword, sortJudul]);

  // const title = "Daftar Buku";
  // const onSorting = () => {
  if (sortJudul === "A-Z") {
    booking = booking.sort((a, b) => a.namaBuku.localeCompare(b.namaBuku));
  } else if (sortJudul === "Z-A") {
    booking = booking.sort((a, b) => b.namaBuku.localeCompare(a.namaBuku));
  } else {
    booking = booking.sort();
  }
  // };

  // console.log(process.env);
  return (
    <div>
      <Navbar />
      <section id="contact" class="contact">
        <div class="container">

          <div class="section-title" data-aos="fade-up">
            <h2>Riwayat</h2>
          </div>
        <div className="container p-5 mb-4 ">
          {/* <Header title={title} /> */}
          <div className="bg-light rounded-3">
            <div className="row mx-5">
              {/* <div className="col-6">
                <ButtonAdd path="/tambah" />
              </div> */}
            </div>
            <div className="col-lg-6 my-3 justify-content-center d-block">
              <div className="input-group mb-3 ">
                <input
                  type="text"
                  className="form-control mx-5"
                  placeholder="cari nama booking ..."
                  aria-label="cari nama booking"
                  value={keyword}
                  onChange={(event) => setKeyword(event.target.value)}
                />
              </div>
            </div>
            <div className="table table-responsive p-5 mb-4 bg-blue-200 rounded-3">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    {/* <th scope="col">
                      Riwayat Booking
                      <select
                        className="form-select-sm float-end"
                        aria-label="Default select example"
                        name="sortJudul"
                        onChange={(event) => {
                          setSortJudul(event.target.value);
                        }}
                      >
                        <option selected value={sortJudul}>
                          {sortJudul}
                        </option>
                        <option value={"none"}>none</option>
                        <option value={"A-Z"}>A-Z</option>
                        <option value={"Z-A"}>Z-A</option>
                      </select>
                    </th> */}
                    <th scope="col">Nama</th>
                    <th scope="col">TglBooking</th>
                    <th scope="col">Layanan</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {booking.map((booking, index) => {
                    return (
                      <tr key={booking._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{booking.nama}</td>
                        <td>{booking.tglBooking}</td>
                        <td>{booking.layanan}</td>
                        <td>{booking.harga}</td>
                        <Aksi
                          pathdetail={`/detail/${booking._id}`}
                          pathedit={`/ubah/${booking._id}`}
                          onclick={() => {
                            deleteBook(booking._id);
                          }}
                        />
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
