import React from 'react';
import imgs from '../Assests/midimg.jpg'; // Ensure correct filename
import "./MiddleImg.css";

const MiddleImg = () => {
  return (
    <div className="middle-img-container">
      {/* Image */}
      <img src={imgs} className="img-fluid middle-img" alt="Dairy & Bakery" />

      {/* Overlay Text */}
      <div className="middle-text right-side-text">
        <h4>Dairy & Bakery</h4>
        <h4>Fresh Products</h4>
        <h3>30% off Sale <span className='text-secondary'>Hurry Up!!!</span></h3>
        <button className='btn btn-dark text-light my-3'>Shop Now</button>
      </div>
    </div>
  );
};

export default MiddleImg;
