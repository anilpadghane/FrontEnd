import React from 'react'
import "./Vendor.css"
import { NavLink } from 'react-router-dom'
import img1 from "../Assests/10_1.jpg";
import img2 from "../Assests/1 (3).jpg"
import img3 from "../Assests/6_1 (1).jpg"
import img4 from "../Assests/9_1.jpg"
import img5 from "../Assests/11_1.jpg"
import img6 from "../Assests/12_1.jpg"
import img7 from "../Assests/13_1.jpg"
import img8 from "../Assests/14_1.jpg"
import img9 from "../Assests/32_1.jpg"
import img10 from "../Assests/33_1.jpg"
import img11 from "../Assests/34_1.jpg"
import img12 from "../Assests/35_1.jpg"
import img13 from "../Assests/36_1.jpg"
import img14 from "../Assests/37_1.jpg"
import img15 from "../Assests/38_1.jpg"
import img16 from "../Assests/40_1.jpg"

import logo1 from "../Assests/1133.jpg"; // Unique logos for each card
import logo2 from "../Assests/2 (3).jpg";
import logo3 from "../Assests/3 (3).jpg";
import logo4 from "../Assests/4 (3).jpg";

const Vendor = () => {

   
    const products = [
        { id: 1, name: "Meaga Mart", qty: 50, rating: '', sales: 200, logo: logo1 }
    ];
    const products2=[
        { id: 2, name: "Farmiso", qty: 30, rating: '', sales: 150, logo: logo2 }
    ];
    const products3=[
        { id: 3, name: "Ocean Crate", qty: 40, rating: '', sales: 180, logo: logo3 }
      ]; 
    const products4=[
        { id: 4, name: "Milky Store", qty: 25, rating: '', sales: 120, logo: logo4 },
      ];
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light  px-6 m-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left Heading (Name) */}
        <h2 className="navbar-brand Vendor-h2 m-0">Top <span className='text-success'>Vendors</span></h2>

        {/* Right Navigation */}
        <div className="d-flex">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink   className="nav Vendor-link" to="/vendor">Vendors <i className='bi bi-caret-right-fill'></i></NavLink>
            </li>
          </ul>
        </div>
      </div>
      </nav>

      {/* card vendor  first card*/}
      <div className="container mt-4">
        <div className="row">
          {/* First set of cards */}
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card product-card p-3">
                {/* Card Header (Unique Logo & Product Info) */}
                <div className="card-header d-flex align-items-center bg-light">
                  <img src={product.logo} className="header-logo me-3" alt="Logo" />
                  <div className="d-flex flex-column">
                    <h6 className="m-0 nameP text-dark fw-bold">{product.name}</h6>
                    <span className="text-secondary itemP">{product.qty} Items</span>
                    <span>⭐⭐⭐⭐ {product.rating}</span>
                    <span className="text-secondary salesP">📈Sales {product.sales}</span>
                  </div>
                </div>

                {/* Card Body with Images */}
                <div className="card-body text-center">
                  <div className="row">
                    <div className="col-6 mb-2">
                      <img src={img1} className="img-fluid product-img" alt="Product 1" />
                    </div>
                    <div className="col-6 mb-2">
                      <img src={img2} className="img-fluid product-img" alt="Product 2" />
                    </div>
                    <div className="col-6">
                      <img src={img3} className="img-fluid product-img" alt="Product 3" />
                    </div>
                    <div className="col-6">
                      <img src={img4} className="img-fluid product-img" alt="Product 4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Second set of cards */}
          {products2.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card product-card p-3">
                {/* Card Header (Unique Logo & Product Info) */}
                <div className="card-header d-flex align-items-center bg-light">
                  <img src={product.logo} className="header-logo me-3" alt="Logo" />
                  <div className="d-flex flex-column">
                    <h6 className="m-0 nameP text-dark fw-bold">{product.name}</h6>
                    <span className="text-secondary itemP">{product.qty} Items</span>
                    <span>⭐⭐⭐⭐ {product.rating}</span>
                    <span className="text-secondary salesP">📈Sales {product.sales}</span>
                  </div>
                </div>

                {/* Card Body with Images */}
                <div className="card-body text-center">
                  <div className="row">
                    <div className="col-6 mb-2">
                      <img src={img5} className="img-fluid product-img" alt="Product 1" />
                    </div>
                    <div className="col-6 mb-2">
                      <img src={img6} className="img-fluid product-img" alt="Product 2" />
                    </div>
                    <div className="col-6">
                      <img src={img7} className="img-fluid product-img" alt="Product 3" />
                    </div>
                    <div className="col-6">
                      <img src={img8} className="img-fluid product-img" alt="Product 4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Third set of cards */}
          {products3.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card product-card p-3">
                {/* Card Header (Unique Logo & Product Info) */}
                <div className="card-header d-flex align-items-center bg-light">
                  <img src={product.logo} className="header-logo me-3" alt="Logo" />
                  <div className="d-flex flex-column">
                    <h6 className="m-0 nameP text-dark fw-bold">{product.name}</h6>
                    <span className="text-secondary itemP">{product.qty} Items</span>
                    <span>⭐⭐⭐⭐ {product.rating}</span>
                    <span className="text-secondary salesP">📈Sales {product.sales}</span>
                  </div>
                </div>

                {/* Card Body with Images */}
                <div className="card-body text-center">
                  <div className="row">
                    <div className="col-6 mb-2">
                      <img src={img9} className="img-fluid product-img" alt="Product 1" />
                    </div>
                    <div className="col-6 mb-2">
                      <img src={img10} className="img-fluid product-img" alt="Product 2" />
                    </div>
                    <div className="col-6">
                      <img src={img11} className="img-fluid product-img" alt="Product 3" />
                    </div>
                    <div className="col-6">
                      <img src={img12} className="img-fluid product-img" alt="Product 4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Fourth set of cards */}
          {products4.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card product-card p-3">
                {/* Card Header (Unique Logo & Product Info) */}
                <div className="card-header d-flex align-items-center bg-light">
                  <img src={product.logo} className="header-logo me-3" alt="Logo" />
                  <div className="d-flex flex-column">
                    <h6 className="m-0 nameP text-dark fw-bold">{product.name}</h6>
                    <span className="text-secondary itemP">{product.qty} Items</span>
                    <span>⭐⭐⭐⭐ {product.rating}</span>
                    <span className="text-secondary salesP">📈Sales {product.sales}</span>
                  </div>
                </div>

                {/* Card Body with Images */}
                <div className="card-body text-center">
                  <div className="row">
                    <div className="col-6 mb-2">
                      <img src={img13} className="img-fluid product-img" alt="Product 1" />
                    </div>
                    <div className="col-6 mb-2">
                      <img src={img14} className="img-fluid product-img" alt="Product 2" />
                    </div>
                    <div className="col-6">
                      <img src={img15} className="img-fluid product-img" alt="Product 3" />
                    </div>
                    <div className="col-6">
                      <img src={img16} className="img-fluid product-img" alt="Product 4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Vendor
