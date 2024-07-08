import React from "react";
import Navbar from "./navbar";
import Gambar1 from '../Assets/portfolio/DEPRESI .jpg';
import Gambar2 from '../Assets/portfolio/DISOSIATIF.jpg';
import Gambar3 from '../Assets/portfolio/PTSD.jpg';
import Gambar4 from '../Assets/portfolio/OCD.jpeg';
import Gambar5 from '../Assets/portfolio/PSIKOSOMATIS.jpeg';
import Gambar6 from '../Assets/portfolio/FACTITIOUS DISORDER.jpg';
import Gambar7 from '../Assets/portfolio/GANGGUAN ANXIETAS.jpg';
import Gambar8 from '../Assets/portfolio/KONTROL IMPULS.jpg';
import Gambar9 from '../Assets/portfolio/ADHD.jpg';


const Literasi = () => {
    return(

        <div>
            <Navbar />
            {/* // <!-- ======= Portfolio Section ======= --> */}
            <section id="portfolio" class="portfolio">
            <div class="container">
      
              <div class="section-title" data-aos="fade-up">
                <h2>Literasi</h2>
                <p>Bacalah dan Temui Buku di Logia Project: Ahli  Kesehatan Mental Anda</p>
              </div>
      
              <div class="row" data-aos="fade-up" data-aos-delay="200">
                <div class="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    {/* <li data-filter="*" class="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li> */}
                  </ul>
                </div>
              </div>
      
              <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="400">
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img src={Gambar1} class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>DEPRESI</h4>
                      <div class="portfolio-links">
                        <a href="https://storage.googleapis.com/proyekmpti/pdf/GANGGUAN%20MENTAL%20DEPRESI.pdf" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Literasi"><i class='bx bx-book-open'></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div class="portfolio-wrap">
                    <img src={Gambar2} class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>DISOSIATIF</h4>
                      <div class="portfolio-links">
                        <a href="https://storage.googleapis.com/proyekmpti/pdf/GANGGUAN%20MENTAL%20DISOSIATIF.pdf" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Literasi"><i class='bx bx-book-open'></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img src={Gambar3} class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>PTSD</h4>
                      <div class="portfolio-links">
                        <a href="https://storage.googleapis.com/proyekmpti/pdf/GANGGUAN%20MENTAL%20STRESS%20PASCA.pdf" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Literasi"><i class='bx bx-book-open'></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div class="portfolio-wrap">
                    <img src={Gambar4} class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>OCD</h4>
                      <div class="portfolio-links">
                        <a href="https://storage.googleapis.com/proyekmpti/pdf/GANGGUAN%20MENTAL%20OBSESSIVE.pdf" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Literasi"><i class='bx bx-book-open'></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div class="portfolio-wrap">
                    <img src={Gambar5} class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>PSIKOSOMATIS</h4>
                      <div class="portfolio-links">
                        <a href="https://storage.googleapis.com/proyekmpti/pdf/GANGGUAN%20MENTAL%20PSIKOSOMATIS.pdf" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Literasi"><i class='bx bx-book-open'></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img src={Gambar6} class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>FACTITIOUS DISORDER</h4>
                      <div class="portfolio-links">
                        <a href="https://storage.googleapis.com/proyekmpti/pdf/Factitious%20Disorder.pdf" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Literasi"><i class='bx bx-book-open'></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div class="portfolio-wrap">
                    <img src={Gambar7} class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>GANGGUAN ANXIETAS</h4>
                      <div class="portfolio-links">
                        <a href="https://storage.googleapis.com/proyekmpti/pdf/GANGGUAN%20ANXIETAS.pdf" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Literasi"><i class='bx bx-book-open'></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div class="portfolio-wrap">
                    <img src={Gambar8} class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>KONTROL IMPULS</h4>
                      <div class="portfolio-links">
                        <a href="https://storage.googleapis.com/proyekmpti/pdf/Kontrol%20Impuls.pdf" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Literasi"><i class='bx bx-book-open'></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div class="portfolio-wrap">
                    <img src={Gambar9} class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>ADHD</h4>
                      <div class="portfolio-links">
                        <a href="https://storage.googleapis.com/proyekmpti/pdf/Attention%20Deficit%20Hyperactivity%20Disorder%20atau%20ADHD%20(1).pdf" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Literasi"><i class='bx bx-book-open'></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
              </div>
      
            </div>
          </section>
        </div>

    );
};

export default Literasi;