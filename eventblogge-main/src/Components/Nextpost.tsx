import React from 'react';
import ramImage from '../img/main.jpg';
import ads from '../img/ads.jpg';
import iplteam from '../img/captain.jpg';
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
                  <h3 className="mb-0">IPL 2024 Information</h3>
                  <div className="mb-1 text-body-secondary">Feb 12</div>
                  <p className="card-text mb-auto">The wait is finally over! IPL 2024 has been officially announced. </p>
                  <a href="/iplcaptain" className="icon-link gap-1 icon-link-hover stretched-link ">
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
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
                  <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
                  <h3 className="mb-0">Post title</h3>
                  <div className="mb-1 text-body-secondary">Nov 11</div>
                  <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional
                    content.</p>
                  <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                <img src={ads} className="float-end rounded img-fluid" alt="Loading img.." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
                  <h3 className="mb-0">Featured post</h3>
                  <div className="mb-1 text-body-secondary">Nov 12</div>
                  <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to
                    additional content.</p>
                  <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg className="bd-placeholder-img" width="210" height="250" xmlns="http://www.w3.org/2000/svg"
                    role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                    focusable="false">
                    <title>Placeholder</title>
                    <img src="#" width="100%" height="100%" alt="Random Image" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
                  <h3 className="mb-0">Post title</h3>
                  <div className="mb-1 text-body-secondary">Nov 11</div>
                  <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional
                    content.</p>
                  <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg className="bd-placeholder-img" width="210" height="250" xmlns="http://www.w3.org/2000/svg"
                    role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                    focusable="false">
                    <title>Placeholder</title>
                    <img src="#" width="100%" height="100%" alt="Random Image" />
                  </svg>
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
                  <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
                  <h3 className="mb-0">Featured post</h3>
                  <div className="mb-1 text-body-secondary">Nov 12</div>
                  <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to
                    additional content.</p>
                  <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg className="bd-placeholder-img" width="210" height="250" xmlns="http://www.w3.org/2000/svg"
                    role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                    focusable="false">
                    <title>Placeholder</title>
                    <img src="#" width="100%" height="100%" alt="Random Image" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
                  <h3 className="mb-0">Post title</h3>
                  <div className="mb-1 text-body-secondary">Nov 11</div>
                  <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional
                    content.</p>
                  <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg className="bd-placeholder-img" width="210" height="250" xmlns="http://www.w3.org/2000/svg"
                    role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                    focusable="false">
                    <title>Placeholder</title>
                    <img src="#" width="100%" height="100%" alt="Random Image" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add more carousel items as needed */}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default BlogCarousel;
