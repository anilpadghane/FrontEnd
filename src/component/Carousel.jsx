import React from "react";
import img1 from "../Assests/cake.jpg";
import img2 from "../Assests/dairy.jpg";
import img3 from "../Assests/eggs.png";
import img4 from "../Assests/fastfood.png";
import img5 from "../Assests/fish.webp";
import img6 from "../Assests/fruit.png";
import img7 from "../Assests/juice.webp";
import img8 from "../Assests/vegtable.jpg";

import "./Carousel.css"; // Add custom styling here if needed

const Carousel = () => {
  return (
    <div className="container main">
    <div className="container mt-4">
      <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="row">
              {/* Card 1 */}
              <div className="col-md-2">
                <div className="card position-relative carousel-card">
                  <div className="badge bg-success position-absolute top-0 end-0 p-2">
                    -20%
                  </div>
                  <img src={img1} className="card-img-top img-carouselone" alt="Product 1" />
                 
                  <div className="card-body text-center ">
                    <h5 className="card-title">Bakery</h5>
                    <p className="card-text">565 items</p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-md-2">
                <div className="card position-relative carousel-card">
                  <div className="badge bg-success position-absolute top-0 end-0 p-2">
                    -10%
                  </div>
                  <img src={img2} className="card-img-top img-carouselone" alt="Product 2" />
                  <div className="card-body text-center ">
                    <h5 className="card-title">Dairy & Milk</h5>
                    <p className="card-text">788 items</p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-md-2">
                <div className="card position-relative carousel-card">
                  <div className="badge bg-success position-absolute top-0 end-0 p-2">
                    -15%
                  </div>
                  <img src={img3} className="card-img-top img-carouselone" alt="Product 3" />
                  <div className="card-body text-center ">
                    <h5 className="card-title">Eggs</h5>
                    <p className="card-text">898 items</p>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="col-md-2">
                <div className="card position-relative carousel-card">
                  <div className="badge bg-success position-absolute top-0 end-0 p-2">
                    -25%
                  </div>
                  <img src={img4} className="card-img-top img-carouselone" alt="Product 4" />
                  <div className="card-body text-center ">
                    <h5 className="card-title">Fast Food</h5>
                    <p className="card-text">578 items</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card position-relative carousel-card">
                  <div className="badge bg-success position-absolute top-0 end-0 p-2">
                    -30%
                  </div>
                  <img src={img5} className="card-img-top img-carouselone" alt="Product 5" />
                  <div className="card-body text-center ">
                    <h5 className="card-title">Sea Food</h5>
                    <p className="card-text">741 items</p>
                  </div>
                </div>
              </div>
              {/* card-6 */}
              <div className="col-md-2">
                <div className="card position-relative carousel-card">
                  <div className="badge bg-success position-absolute top-0 end-0 p-2">
                    -30%
                  </div>
                  <img src={img6} className="card-img-top img-carouselone" alt="Product 6" />
                  <div className="card-body text-center ">
                    <h5 className="card-title">Fruits</h5>
                    <p className="card-text">852 items</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          {/* Second Slide */}
          <div className="carousel-item">
            <div className="row">
              {/* Card 5 */}
              <div className="col-md-2">
                <div className="card position-relative carousel-card">
                  <div className="badge bg-success position-absolute top-0 end-0 p-2">
                    -30%
                  </div>
                  <img src={img5} className="card-img-top img-carouselone" alt="Product 5" />
                  <div className="card-body text-center ">
                    <h5 className="card-title">Sea Food</h5>
                    <p className="card-text">741 items</p>
                  </div>
                </div>
              </div>
              {/* card-6 */}
              <div className="col-md-2">
                <div className="card position-relative carousel-card">
                  <div className="badge bg-success position-absolute top-0 end-0 p-2">
                    -30%
                  </div>
                  <img src={img6} className="card-img-top img-carouselone" alt="Product 6" />
                  <div className="card-body text-center ">
                    <h5 className="card-title">Fruits</h5>
                    <p className="card-text">852 items</p>
                  </div>
                </div>
              </div>
              {/* card-7 */}
              <div className="col-md-2">
                <div className="card position-relative carousel-card">
                  <div className="badge bg-success position-absolute top-0 end-0 p-2">
                    -30%
                  </div>
                  <img src={img7} className="card-img-top img-carouselone" alt="Product 7" />
                  <div className="card-body text-center ">
                    <h5 className="card-title">Drink and Milk</h5>
                    <p className="card-text">454 items</p>
                  </div>
                </div>
                
              </div>
              {/* card-8 */}
              <div className="col-md-2">
                <div className="card position-relative carousel-card">
                  <div className="badge bg-success position-absolute top-0 end-0 p-2">
                    -30%
                  </div>
                  <img src={img8} className="card-img-top img-carouselone" alt="Product 8" />
                  <div className="card-body text-center ">
                    <h5 className="card-title">Vegetable</h5>
                    <p className="card-text">858 items</p>
                  </div>
                </div>
                
              </div>
              {/* Card 1 */}
              <div className="col-md-2">
                <div className="card position-relative carousel-card">
                  <div className="badge bg-success position-absolute top-0 end-0 p-2">
                    -20%
                  </div>
                  <img src={img1} className="card-img-top img-carouselone" alt="Product 1" />
                 
                  <div className="card-body text-center ">
                    <h5 className="card-title">Bakery</h5>
                    <p className="card-text">565 items</p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-md-2">
                <div className="card position-relative carousel-card">
                  <div className="badge bg-success position-absolute top-0 end-0 p-2">
                    -10%
                  </div>
                  <img src={img2} className="card-img-top img-carouselone" alt="Product 2" />
                  <div className="card-body text-center ">
                    <h5 className="card-title">Dairy & Milk</h5>
                    <p className="card-text">788 items</p>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#cardCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
          <span className="visually-hidden"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#cardCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
          <span className="visually-hidden"></span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
