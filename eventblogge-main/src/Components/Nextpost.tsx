import React, { useRef, useState } from 'react';
import aurora from '../img/Scienceaurora.jpg'
import iplteam from '../img/captain.jpg';
import hemantNextPost from '../img/hemantNextPost.jpg';
import SustanableIT from '../img/SustanableIT.jpg';
const BlogCarousel = () => {
  

  return (
    <div id="carouselExampleIndicators" className="carousel slide container" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary-emphasis">IPL</strong>
                  <h3 className="mb-0">IPL 2024 Information</h3><br />
                  <p className="card-text mb-auto">The wait is finally over! IPL 2024 has been officially announced. </p>
                  <a href="/iplcaptain" className="icon-link gap-1 icon-link-hover stretched-link ">
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right" />
                    </svg>
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                <img src={iplteam} className="float-end rounded img-fluid" alt="Loading img.." />

                
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success-emphasis">Science</strong>
                  <h3 className="mb-0">The Mesmerizing Aurora Phenomenon</h3>
                  <br />
                  <p className="mb-auto">The night sky has long been a canvas for celestial wonders.</p>
                  <a href="/aurora" className="icon-link gap-1 icon-link-hover stretched-link">
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                <img src={aurora} className="float-end rounded img-fluid" alt="Loading img.." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary-emphasis">Politics</strong>
                  <h3 className="mb-0">Missing Jharkhand CM 'Hemant Soren'</h3>
                  <p className="card-text mb-auto">All ruling alliance MLAs in Jharkhand asked to stay in Ranch .</p>
                  <a href="/politics" className="icon-link gap-1 icon-link-hover stretched-link">
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                <img src={hemantNextPost} className="float-end rounded img-fluid" alt="Loading img.." />


                  
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success-emphasis">Technology</strong>
                  <h3 className="mb-0">Reducing the Environmental Footprint </h3>
                  
                  <p className="mb-auto">  In an era where technological advancements are transforming the way we live and work, the environmental impact of Information Technology (IT) has come under scrutiny.
.</p>
                  <a href="/sustainable" className="icon-link gap-1 icon-link-hover stretched-link">
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                <img src={SustanableIT} className="float-end rounded img-fluid" alt="Loading img.." />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
}

export default BlogCarousel;
