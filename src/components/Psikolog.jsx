import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link} from "react-router-dom";

const Psikolog = () => {
    
    const [keyword] = useState("");
    const psikolog = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URI}/psikolog`, {
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
            psikolog();  
        }
      }, [keyword]); // Menambahkan keyword sebagai dependensi

    return(
    <div>
        <Navbar />
        {/* <!-- ======= Team Section ======= --> */} 
        <section id="team" class="team section-bg">
            <div class="container">
            <div class="section-title" data-aos="fade-up">
                <h2>Psikolog</h2>
                <p>Temui Para Psikolog di Logia Project: Ahli  Kesehatan Mental Anda</p>
            </div>

            <div class="row">

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="100">
                    <div class="member-img">
                    <img src="https://storage.googleapis.com/proyekmpti/gambar%20/Psikolog-1.jpg" class="img-fluid" alt="" />
                    <div class="social">
                        <Link><i class="bi bi-twitter"></i></Link>
                        <Link><i class="bi bi-facebook"></i></Link>
                        <Link><i class="bi bi-instagram"></i></Link>
                        <Link><i class="bi bi-linkedin"></i></Link>
                    </div>
                    </div>
                    <div class="member-info">
                    <h4>Muhamad Febrian Al-Amin, S.Psi, M.Psi, Psikolog</h4>
                    <span>Psikolog</span>
                    </div>
                </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="200">
                    <div class="member-img">
                    <img src="https://storage.googleapis.com/proyekmpti/gambar%20/Psikolog-2.jpg" class="img-fluid" alt="" />
                    <div class="social">
                        <Link><i class="bi bi-twitter"></i></Link>
                        <Link><i class="bi bi-facebook"></i></Link>
                        <Link><i class="bi bi-instagram"></i></Link>
                        <Link><i class="bi bi-linkedin"></i></Link>
                    </div>
                    </div>
                    <div class="member-info">
                    <h4>Diana Zumrotus Sa'adah, M.Psi Psikolog</h4>
                    <span>Psikolog</span>
                    </div>
                </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="300">
                    <div class="member-img">
                    <img src="https://storage.googleapis.com/proyekmpti/gambar%20/Psikolog-3.jpg" class="img-fluid" alt="" />
                    <div class="social">
                        <Link><i class="bi bi-twitter"></i></Link>
                        <Link><i class="bi bi-facebook"></i></Link>
                        <Link><i class="bi bi-instagram"></i></Link>
                        <Link><i class="bi bi-linkedin"></i></Link>
                    </div>
                    </div>
                    <div class="member-info">
                    <h4>Putri Rahmalia, M.Psi., Psikolog</h4>
                    <span>Psikolog</span>
                    </div>
                </div>
                </div>
            </div>

            </div>
        </section>
        {/* <!-- End Team Section --> */}
    </div>
    );
};

export default Psikolog;