import React from "react";
import "./TwoImage.css";

const TwoImage = () => {
  return (
    <div className="container my-3">
      <div className="row g-4">
        {/* First Image */}
        <div className="col-md-6 col-12 position-relative img-container">
          <img src="/2 (2).jpg" alt="First" className="img-fluid rounded shadow w-100" />

          {/* Discount Badge */}
          <div className="discount-badge">70% OFF</div>

          {/* Overlay Text */}
          <div className="overlay-text img-1">
            <h4 className="fw-bold">SNACKS & SPICES</h4>
            <h5 className="text-secondary">The flavour of something special</h5>
            <button className="btn btn-dark text-light mt-3">Shop Now</button>
          </div>
        </div>

        {/* Second Image */}
        <div className="col-md-6 col-12 position-relative img-container">
          <img src="/3 (2).jpg" alt="Second" className="img-fluid rounded shadow w-100" />

          {/* Discount Badge */}
          <div className="discount-badge">50% OFF</div>

          {/* Overlay Text */}
          <div className="overlay-text img-2">
            <h4 className="fw-bold">FRUITS & VEGGIES</h4>
            <h5 className="text-secondary">A healthy meal for everyone</h5>
            <button className="btn btn-dark text-light mt-3">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoImage;
