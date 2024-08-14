import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./navbar";

const PaketPsikolog = () => {
  const [tglKonseling, setTglKonseling] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const navigate = useNavigate();

  const handleBooking = async (paket, namaPsikolog, harga, psikologEmail) => {
    const userData = JSON.parse(localStorage.getItem("userLogin")); // Mengambil dan parsing data pengguna dari localStorage

    if (!userData || !userData.nama || !userData.email) {
      setBookingMessage('Gagal melakukan booking: Nama atau email pengguna tidak ditemukan di localStorage');
      return;
    }

    try {
      const response = await fetch(`https://mpti-proyek.et.r.appspot.com/books/tambah`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          nama: userData.nama, // Menggunakan nama pengguna dari objek userData
          userEmail: userData.email, // Menggunakan email pengguna dari objek userData
          namaPsikolog, // Nama psikolog yang dipilih
          psikologEmail, // Email psikolog berdasarkan paket yang dipilih
          tglBooking: new Date().toISOString(), // Tanggal saat ini
          layanan: paket, // Paket yang dipilih
          tglKonseling: tglKonseling, // Tanggal konseling yang sudah diisi
          harga: harga
        })
      });

      if (response.status === 201) {
        navigate("/riwayat");
        Swal.fire({
          icon: "success",
          title: "Selamat Menikmati Konseling",
        });
      } else {
        navigate("/paketpsikolog");
        Swal.fire({
          icon: "warning",
          title: "Masukan Tanggal Konseling",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setBookingMessage('Terjadi kesalahan saat melakukan booking');
    }
  };

  const handleDateChange = (event) => {
    setTglKonseling(event.target.value);
  };

  return (
    <div>
      <Navbar />
      {/* Bagian Pricing */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-title">
            <h2>Layanan</h2>
            <p>Temukan layanan psikolog yang sesuai dengan kebutuhan anda di Logia Project</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="box" data-aos="zoom-in-right" data-aos-delay="200">
                <h3>Paket 1</h3>
                <h4><sup>Layanan Minat Bakat</sup><span></span></h4>
                <ul>
                  <li>Test Penjurusan</li>
                  <li>Test Ketahanan Kerja</li>
                  <li>Test Kepribadian</li>
                  <li><b>Harga : Rp. 175.000</b></li>
                  <li>Tanggal <input type="date" onChange={handleDateChange} /></li>
                </ul>
                <div className="btn-wrap">
                  <button 
                    className="btn-buy" 
                    onClick={() => handleBooking(
                      "Paket 1", 
                      "Muhamad Febrian Al-Amin, S.Psi, M.Psi, Psikolog", 
                      "175000", 
                      "mfebrianalamin@gmail.com"
                    )}
                  >
                    Booking
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div className="box recommended" data-aos="zoom-in" data-aos-delay="100">
                <h3>Paket 2</h3>
                <h4><sup>Layanan Test Masuk Sekolah</sup><span></span></h4>
                <ul>
                  <li>Test Kesiapan Sekolah(SD)</li>
                  <li>Seleksi Siswa</li>
                  <li>Seleksi Mahasiswa Baru</li>
                  <li><b>Harga : Rp. 200.000</b></li>
                  <li>Tanggal <input type="date" onChange={handleDateChange} /></li>
                </ul>
                <div className="btn-wrap">
                  <button 
                    className="btn-buy" 
                    onClick={() => handleBooking(
                      "Paket 2", 
                      "Diana Zumrotus Sa'adah, M.Psi Psikolog", 
                      "200000", 
                      "saadahdiana@gmail.com"
                    )}
                  >
                    Booking
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in-left" data-aos-delay="200">
                <h3>Paket 3</h3>
                <h4><sup>Layanan Konseling Psikologi</sup><span></span></h4>
                <ul>
                  <li>Konseling Individual</li>
                  <li>Konseling Individual+Psikotes</li>
                  <li>Konseling Kelompok</li>
                  <li><b>Harga : Rp. 250.000</b></li>
                  <li>Tanggal <input type="date" onChange={handleDateChange} /></li>
                </ul>
                <div className="btn-wrap">
                  <button 
                    className="btn-buy" 
                    onClick={() => handleBooking(
                      "Paket 3", 
                      "Putri Rahmalia, M.Psi., Psikolog", 
                      "250000", 
                      "logiaprojectt@gmail.com"
                    )}
                  >
                    Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Akhir Pricing Section */}

      {/* Menampilkan pesan booking */}
      {bookingMessage && (
        <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f0f0f0" }}>
          <h3>Pesan Booking:</h3>
          <p>{bookingMessage}</p>
        </div>
      )}
    </div>
  );
};

export default PaketPsikolog;
