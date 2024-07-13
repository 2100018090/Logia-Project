import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [keyword] = useState("");
    const navigate = useNavigate();

    const dashboard = async () => {
      const response = await fetch(`https://mpti-proyek.et.r.appspot.com/dashboard`, {
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
        dashboard();  
      }
    }, [keyword]); // Menambahkan keyword sebagai dependensi

    const handleBookingKonseling = () => {
      const userLogin = localStorage.getItem("userLogin");
      if (!userLogin) {
        Swal.fire("Silahkan Login terlebih dahulu!", "", "success");
        navigate("/login");
      } else {
        navigate("/paketpsikolog");
      }
    };
    

  return (
    <div>
      <Navbar />

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Kesehatan Mental untuk Kualitas Hidup</h1> 
              <h2 data-aos="fade-up" data-aos-delay="400">Mulailah perjalanan Anda menuju kesehatan mental yang lebih baik bersama kami.</h2>
              <div data-aos="fade-up" data-aos-delay="800">
                <button className="btn-get-started scrollto" onClick={handleBookingKonseling}>Booking Konseling</button>
                {/* <button class="btn-get-started scrollto">Booking Konseling</button> */}
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
              <img src="https://storage.googleapis.com/proyekmpti/gambar%20/logo.jpg" class="img-fluid animated" alt="" />
            </div>
          </div>
        </div>

      </section>
      {/* <!-- End Hero --> */}

      <main id="main" />

        {/* <!-- ======= Clients Section ======= --> */}
        <section id="clients" class="clients clients">
          <div class="container">

            <div class="row">

              <div class="col-lg-2 col-md-4 col-6">
                {/* <img src={Client1} class="img-fluid" alt="" data-aos="zoom-in" /> */}
              </div>

              <div class="col-lg-2 col-md-4 col-6">
                {/* <img src={Client2} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100" /> */}
              </div>

              <div class="col-lg-2 col-md-4 col-6">
                <img src="https://storage.googleapis.com/proyekmpti/gambar%20/sponsor/client-3.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200" />
              </div>

              <div class="col-lg-2 col-md-4 col-6">
                <img src="https://storage.googleapis.com/proyekmpti/gambar%20/clinet20.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300" />
              </div>

              <div class="col-lg-2 col-md-4 col-6">
                {/* <img src={Client5} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400" /> */}
              </div>

              <div class="col-lg-2 col-md-4 col-6">
                {/* <img src={Client6} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500" /> */}
              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Clients Section -->

        <!-- ======= About Us Section ======= --> */}
        <section id="about" class="about">
          <div class="container">

            <div class="section-title" data-aos="fade-up">
              <h2>Tentang Kami</h2>
            </div>

            <div class="row content">
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                <p>
                  <strong>Misi</strong>
                </p>
                <ul>
                  <li><i class="ri-check-double-line"></i> Memberikan support pada Sekolah, perusahaan, institusi, maupun lembaga, dalam memenuhi kebutuhan layanan Psikologi dan pengembangan SDM sesuai kebutuhan klien</li>
                  <li><i class="ri-check-double-line"></i> Bersikap secara profesionalitas, unggul dan berkompetensi dalam Memberikan layanan, jasa psikologi dan pengembangan SDM</li>
                  <li><i class="ri-check-double-line"></i> Mengembangkan dan memberikan ide-ide kreatif dalam mengatasi problem psikologi dan juga problem pengembangan SDM yang berpengaruh pada perusahaan, institusi, maupun lembaga</li>
                </ul>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
                <p>
                <p><strong>Visi</strong></p>
                Menjadi Lembaga Jasa Psikologi dan pengembangan SDM yang Inovatif, Professional serta menjadi solusi dalam 
                memberikan layanan jasa praktik dan konsultasi psikologi di indonesia.
                </p>
                {/* <Link class="btn-learn-more">Learn More</Link> */}
              </div>
            </div>

          </div>
        </section>
        {/* <!-- End About Us Section -->

        <!-- ======= Counts Section ======= --> */}
        <section id="counts" class="counts">
          <div class="container">

            <div class="row">
              <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                <img src= "https://storage.googleapis.com/proyekmpti/gambar%20/counts-img.svg" alt="" class="img-fluid" />
              </div>

              <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
                <div class="content d-flex flex-column justify-content-center">
                  <div class="row">
                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div class="count-box">
                        <i class="bi bi-emoji-smile"></i>
                        <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" class="purecounter">10</span>
                        <p><strong>Happy Clients</strong> Konseling psikologi di sini sungguh membantu saya menemukan kedamaian batin dan menata kembali hidup saya.</p>
                      </div>
                    </div>

                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div class="count-box">
                        <i class="bi bi-journal-richtext"></i>
                        <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" class="purecounter">3</span>
                        <p><strong>Professional</strong> Tim psikolog profesional kami siap membantu Anda menghadapi tantangan kesehatan mental</p>
                      </div>
                    </div>

                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div class="count-box">
                        <i class="bi bi-clock"></i>
                        <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" class="purecounter">3</span>
                        <p><strong>Years of experience</strong> Tahun demi tahun, kami telah membuktikan komitmen kami dalam membantu mengatasi berbagai masalah kesehatan mental</p>
                      </div>
                    </div>

                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div class="count-box">
                        <i class="bi bi-award"></i>
                        <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter">55</span>
                        <p><strong>Awards</strong> Menawarkan jasa profesional di bidang terapan ilmu psikologi kepada Sekolah, perusahaan, instansi, dan masyarakat umum.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End .content--> */}
              </div>
            </div>

          </div>
        </section>
        {/* <!-- End Counts Section --> */}
      
      <Link class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></Link>
    </div>
  );
};

export default Dashboard;
