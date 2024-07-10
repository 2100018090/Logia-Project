import React, { useEffect, useState, useCallback } from "react";
import Swal from "sweetalert2";
import Navbar from "./navbar";
import { Link, useNavigate, useParams } from "react-router-dom";

const UbahPengguna = () => {
  const [nama, setNama] = useState("");
  const [tglBooking, settglBooking] = useState("");
  const [layanan, setlayanan] = useState("");
  const [tglKonseling, settglKonseling] = useState("");
  const [namaPsikolog, setnamaPsikolog] = useState("");
  const [harga, setHarga] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  const handleEdit = async (event) => {
    event.preventDefault();
    const userLogin = localStorage.getItem("userLogin");
    if (!userLogin) {
      return navigate("/login");
    }
    const data = {
      nama,
      tglBooking,
      layanan,
      tglKonseling,
      namaPsikolog,
      harga,
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
      `https://mpti-proyek.et.r.appspot.com/booking/ubah/${id}`,
      requestOptions
    );
    const booking = await response.json();
    if (response.status === 200) {
      navigate("/booking");
      Swal.fire({
        icon: "success",
        title: "Berhasil Ubah Booking",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: booking.message,
      });
    }
  };

  const getBookingById = useCallback(async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URI}/booking/id/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const { booking } = await response.json();
    setNama(booking.nama);
    settglBooking(booking.tglBooking);
    setlayanan(booking.layanan);
    settglKonseling(booking.tglKonseling);
    setnamaPsikolog(booking.namaPsikolog);
    setHarga(booking.harga);
  }, [id]);

  useEffect(() => {
    getBookingById();
    localStorage.getItem("userLogin");
    localStorage.getItem("token");
  }, [getBookingById]);

  const title = "Ubah Data Pengguna";

  return (
    <div>
      <Navbar />
      <section id="contact" class="contact">
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
                        name="nama"
                        id="nama"
                        placeholder="masukkan nama.."
                        required
                        value={nama}
                        onChange={(event) => setNama(event.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="tglBooking" className="form-label">
                        Tanggal Booking
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        name="tglBooking"
                        id="tglBooking"
                        placeholder="masukkan tglBooking.. "
                        required
                        value={tglBooking}
                        onChange={(event) => settglBooking(event.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="layanan" className="form-label">
                        Layanan
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="layanan"
                        id="layanan"
                        placeholder="masukkan layanan.. "
                        required
                        value={layanan}
                        onChange={(event) => setlayanan(event.target.value)}
                      />
                    </div>
                    <div className="mb-3 ">
                      <label htmlFor="layanan" className="form-label">
                        Tanggal Konseling
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        name="tglKonseling"
                        id="tglKonseling"
                        placeholder="masukkan Tanggal Konseling.. "
                        value={tglKonseling}
                        onChange={(event) => settglKonseling(event.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3 ">
                      <label htmlFor="namaPsikolog" className="form-label">
                        Nama Psikolog
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="namaPsikolog"
                        id="namaPsikolog"
                        placeholder="masukkan Nama Psikolog.. "
                        value={namaPsikolog}
                        onChange={(event) => setnamaPsikolog(event.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3 ">
                      <label htmlFor="harga" className="form-label">
                        Harga
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="harag"
                        id="harag"
                        placeholder="masukkan Harga.. "
                        value={harga}
                        onChange={(event) => setnamaPsikolog(event.target.value)}
                        required
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
                  <Link to={"/booking"}>Kembali</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UbahPengguna;
