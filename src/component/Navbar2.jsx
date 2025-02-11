import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar2.css'

const Navbar2 = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fw-bold">
      <div className="container">
        {/* Brand Name */}
        <div className="navbar-brand" >
         <h2>New <span className="text-success">Products</span></h2> 
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
  <li className="nav-item me-5"> {/* Added margin-end (right) */}
    <NavLink className="nav-link" exact to="/all">
     <h5>ALL</h5> 
    </NavLink>
  </li>
  <li className="nav-item me-5">
    <NavLink className="nav-link" to="/snackspices">
      <h5>SNACKS & SPICES</h5>
    </NavLink>
  </li>
  <li className="nav-item me-5">
    <NavLink className="nav-link" to="/fruits">
      <h5> FRUITS</h5>
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link " to="/vegetable" tabIndex="-1" aria-disabled="true">
      <h5>VEGETABLE </h5>
    </NavLink>
  </li>
</ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
