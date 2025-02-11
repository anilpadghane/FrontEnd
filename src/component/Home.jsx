import React from 'react';
import img1 from '../Assests/4.jpg';
import img2 from '../Assests/5.jpg';
import img3 from '../Assests/7.jpg';
import img4 from '../Assests/8 (1).jpg';
import './Home.css'; // Ensure this CSS file is included
import Carousel from './Carousel';
import Navbar2 from './Navbar2';

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Carousel Section */}
        <div className="col-lg-8 col-md-7">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-image-container">
                  <img src={img1} className="d-block w-100" alt="Seasonal fruits" />
                  <div className="carousel-overlay">
                    <p className='text-secondary'>Fresh and Healthy</p>
                    <h2>FRUITS & VEGETABLE</h2>
                    <p className='text-secondary fw-bold'>Starting at just $20.00</p>
                    <button className="shop-now-button">Shop Now</button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-image-container">
                  <img src={img2} className="d-block w-100" alt="Assorted fruits" />
                  <div className="carousel-overlay">
                    <p className='text-secondary'>Organic & Healthy</p>
                    <h2>SNACKS AND SPICES</h2>
                    <p className='text-secondary fw-bold'>Starting at just $20.00</p>
                    <button className="shop-now-button">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Two Smaller Images Section */}
        <div className="col-lg-4 col-md-5">
          <div className="row">
            <div className="col-12 mb-3 p-0">
              <div className="image-container">
                <img src={img3} className="img-fluid" alt="Fresh fruits" />
                <div className="overlay">
                  <p>Fresh</p>
                  <h4>Fruits</h4>
                  <button className="shop-now-button">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 p-0">
              <div className="image-container">
                <img src={img4} className="img-fluid" alt="Assorted fruits" />
                <div className="overlay">
                  <p>Snacks</p>
                  <h4>& Spices</h4>
                  <button className="shop-now-button">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <Navbar2 />
    </div>
  );
};

export default Home;
