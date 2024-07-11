import React from "react";
import Navbar from "./navbar";
// import Gambar1 from '../Assets/portfolio/PSIKOSOMATIS.jpeg';
// import Vedio1 from '../Assets/portfolio/BoBoiBoy Trailer HD.mp4';

const Vedio = () => {
    return(

        <div>
            <Navbar />
            {/* // <!-- ======= Portfolio Section ======= --> */}
            <section id="portfolio" class="portfolio">
            <div class="container">
      
              <div class="section-title" data-aos="fade-up">
                <h2>Video</h2>
                <p>Tontonlah dan Temui Video di Logia Project: Ahli  Kesehatan Mental Anda</p>
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
                    <img src="https://storage.googleapis.com/proyekmpti/gambar%20/gambar%204%20(1).jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>  Skizofrenia</h4>
                      {/* <p>Vedio Boboboy</p> */}
                      <div class="portfolio-links">
                      <a href="https://storage.googleapis.com/proyekmpti/Vedio/Y2meta.app-Apa%20itu%20Skizofrenia--(1080p).mp4" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Video"><i class='bx bx-movie-play'></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div class="portfolio-wrap">
                    <img src="https://storage.googleapis.com/proyekmpti/gambar%20/gambar%202.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Traumatic Stress Disorder</h4>
                      {/* <p>Web</p> */}
                      <div class="portfolio-links">
                        <a href="https://storage.googleapis.com/proyekmpti/Vedio/Y2meta.app-Apa%20itu%20Post-Traumatic%20Stress%20Disorder%20(PTSD)%20_-(1080p).mp4" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Video"><i class='bx bx-movie-play'></i></a>

                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img src="https://storage.googleapis.com/proyekmpti/gambar%20/gambar%203%20(1).jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Gangguan Bipolar</h4>
                      {/* <p>App</p> */}
                      <div class="portfolio-links">
                        <a href="https://storage.googleapis.com/proyekmpti/Vedio/Y2meta.app-Apa%20Itu%20Gangguan%20Bipolar--(720p).mp4" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Video"><i class='bx bx-movie-play'></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div class="portfolio-wrap">
                    <img src="https://storage.googleapis.com/proyekmpti/gambar%20/gambar%205%20(1).jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Depresi</h4>
                      <div class="portfolio-links">
                        <a href="https://storage.googleapis.com/proyekmpti/Vedio/Y2meta.app-Apa%20itu%20Depresi--(720p).mp4" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Video"><i class='bx bx-movie-play'></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div class="portfolio-wrap">
                    <img src="https://storage.googleapis.com/proyekmpti/gambar%20/gambar%206%20(1).jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Anxiety Disorder</h4>
                      <div class="portfolio-links">
                        <a href="https://storage.googleapis.com/proyekmpti/Vedio/Y2meta.app-Apa%20itu%20Anxiety%20Disorder_-(1080p).mp4" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Video"><i class='bx bx-movie-play'></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img src="https://storage.googleapis.com/proyekmpti/gambar%20/gambar%207%20(1).jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>ADHD</h4>
                      <div class="portfolio-links">
                        <a href="https://storage.googleapis.com/proyekmpti/Vedio/Y2meta.app-Apa%20Itu%20ADHD_-(1080p).mp4" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Buka Video"><i class='bx bx-movie-play'></i></a>
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

export default Vedio;