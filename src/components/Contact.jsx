import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({ email: '', telp: '' });

  const getContactInfo = async () => {
    try {
      const response = await fetch(`https://mpti-proyek.et.r.appspot.com/getcontact`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // Memastikan data yang diterima dari API

      // Ambil email dan telp dari data yang diterima
      if (Array.isArray(data) && data.length > 0) {
        const { email, telp } = data[0]; // Asumsikan data adalah array dan ambil item pertama
        setContactInfo({ email, telp });
      }
    } catch (err) {
      console.error("Fetch error: ", err.message);
    }
  };

  useEffect(() => {
    getContactInfo(); // Dijalankan saat halaman ini pertama kali dirender
  }, []);

  return (
    <div>
      <Navbar />

      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container">

          <div className="section-title" data-aos="fade-up">
            <h2>Hubungi Kami</h2>
          </div>

          <div className="row">

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-about">
                <h3>Logia Project</h3>
                <p>Hadir membantu masyarakat dalam mengenali potensi individu yang dimiliki secara lebih akurat. 
                  Hal ini karena metode yang digunakan meruakan metode yang dapat dipertanggungjawabkan secara ilmiah 
                  dan profesional. Melalui alat psikometri yang valid dan reliabel, serta teknik penggalian data lainnya, 
                  seperti wawancara dan observasi, maka data yang dihasilkan dapat lebih menyeluruh.</p>
                <div className="social-links">
                  <Link className="instagram" to="https://www.instagram.com/logia.project?igsh=MXQ3MG02Y3oxdHF6NA==" target="_blank"><i className="bi bi-instagram"></i></Link><i>@logia.project</i>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
              {/* No content */}
            </div>

            <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
              <div className="info">
                <div>
                  <i className="ri-map-pin-line"></i>
                  <p>Perumahan Taman Indah Permai, Jalan Perumahan Taman Indah Permai Blok A No. 1, RT.38, Suku Rami, Selebar</p>
                </div>

                <div>
                  <i className="ri-mail-send-line"></i>
                  <p>{contactInfo.email}</p>
                </div>

                <div>
                  <i className="ri-phone-line"></i>
                  <p>{contactInfo.telp}</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
      {/* <!-- End Contact Section --> */}
    </div>
  );
};

export default Contact;
