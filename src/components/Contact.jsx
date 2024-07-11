import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";


const Contact = () => {
    const [keyword] = useState("");
    const contact = async () => {
        const response = await fetch(`https://mpti-proyek.et.r.appspot.com/contact`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        console.log(data);
        // Handle the response as needed
      };
      
      useEffect(() => {
        localStorage.getItem("userLogin");
        localStorage.getItem("token");
        if (keyword === "") {
          contact();  
        }
      }, [keyword]); // Menambahkan keyword sebagai dependensi

    return(
        <div>
      <Navbar />

        {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" class="contact">
        <div class="container">

          <div class="section-title" data-aos="fade-up">
            <h2>Hubungi Kami</h2>
          </div>

          <div class="row">

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="contact-about">
                <h3>Logia Project</h3>
                <p>Hadir membantu masyarakat dalam mengenali potensi individu yang dimiliki secara lebih akurat. 
                  Hal ini karena metode yang digunakan meruakan metode yang dapat dipertanggungjawabkan secara ilmiah 
                  dan profesional. Melalui alat psikometri yang valid dan reliabel, serta teknik penggalian data lainnya, 
                  seperti wawancara dan observasi, maka data yang dihasilkan dapat lebih menyeluruh.</p>
                <div class="social-links">
                  {/* <Link class="twitter"><i class="bi bi-twitter"></i></Link>
                  <Link class="facebook"><i class="bi bi-facebook"></i></Link> */}
                  <Link class="instagram" to="https://www.instagram.com/logia.project?igsh=MXQ3MG02Y3oxdHF6NA==" target="_blank"><i class="bi bi-instagram"></i></Link><i>@logia.project</i>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
              {/* <div class="info">
                <div>
                  <i class="ri-map-pin-line"></i>
                  <p>Perumahan Taman Indah Permai, Jalan Perumahan Taman Indah Permai Blok A No. 1, RT.38, Suka Rami, Selebar</p>
                </div>

                <div>
                  <i class="ri-mail-send-line"></i>
                  <p>mfebrianalamin@gmail.com</p>
                </div>

                <div>
                  <i class="ri-phone-line"></i>
                  <p>+62 821-7979-6086</p>
                </div>

              </div> */}
            </div>

            <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
            <div class="info">
                <div>
                  <i class="ri-map-pin-line"></i>
                  <p>Perumahan Taman Indah Permai, Jalan Perumahan Taman Indah Permai Blok A No. 1, RT.38, Suku Rami, Selebar</p>
                </div>

                <div>
                  <i class="ri-mail-send-line"></i>
                  <p>mfebrianalamin@gmail.com</p>
                </div>

                <div>
                  <i class="ri-phone-line"></i>
                  <p>+62 821-7979-6086</p>
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