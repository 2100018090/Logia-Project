import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { Link, useParams } from "react-router-dom";

const DetailRiwayat = () => {
  const [booking, getBooking] = useState({});
  const { id } = useParams();

  const getBookingById = async () => {
    const response = await fetch(`https://mpti-proyek.et.r.appspot.com/booking/id/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      getBooking(data.booking);
    } else {
      console.error("Failed to fetch booking details:", response.status, response.statusText);
    }
  };

  useEffect(() => {
    getBookingById();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-vh-100 bg-secondary bg-opacity-50" id="users">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col col-md-8">
              <div className="card p-3 my-5">
                <h2 className="text-center">Detail Booking</h2>
                <div className="row">
                  <div className="mb-3 col-5">
                    <font size={5}>Kode Booking</font>
                  </div>
                  <div className="mb-3 col-1">
                    <font size={5}>: </font>
                  </div>
                  <div className="mb-3 col-6">
                    <font size={5}>{booking._id}</font>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-5">
                    <font size={5}>Nama</font>
                  </div>
                  <div className="mb-3 col-1">
                    <font size={5}>: </font>
                  </div>
                  <div className="mb-3 col-6">
                    <font size={5}>{booking.nama}</font>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-5">
                    <font size={5}>tglBooking</font>
                  </div>
                  <div className="mb-3 col-1">
                    <font size={5}>: </font>
                  </div>
                  <div className="mb-3 col-6">
                    <font size={5}>{booking.tglBooking}</font>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-5">
                    <font size={5}>Layanan</font>
                  </div>
                  <div className="mb-3 col-1">
                    <font size={5}>: </font>
                  </div>
                  <div className="mb-3 col-6">
                    <font size={5}>{booking.layanan}</font>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-5">
                    <font size={5}>tglKonseling</font>
                  </div>
                  <div className="mb-3 col-1">
                    <font size={5}>: </font>
                  </div>
                  <div className="mb-3 col-6">
                    <font size={5}>{booking.tglKonseling}</font>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-5">
                    <font size={5}>Nama Psikolog</font>
                  </div>
                  <div className="mb-3 col-1">
                    <font size={5}>: </font>
                  </div>
                  <div className="mb-3 col-6">
                    <font size={5}>{booking.namaPsikolog}</font>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-5">
                    <font size={5}>Harga</font>
                  </div>
                  <div className="mb-3 col-1">
                    <font size={5}>: </font>
                  </div>
                  <div className="mb-3 col-6">
                    <font size={5}>{booking.harga}</font>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-5">
                    <font size={5}>User Email</font>
                  </div>
                  <div className="mb-3 col-1">
                    <font size={5}>: </font>
                  </div>
                  <div className="mb-3 col-6">
                    <font size={5}>{booking.userEmail}</font>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-5">
                    <font size={5}>Psikolog Email</font>
                  </div>
                  <div className="mb-3 col-1">
                    <font size={5}>: </font>
                  </div>
                  <div className="mb-3 col-6">
                    <font size={5}>{booking.psikologEmail}</font>
                  </div>
                </div>
                <div className="my-3">
                  <div className="float-end mx-5">
                    <Link to={"/riwayat"}>Kembali</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRiwayat;
