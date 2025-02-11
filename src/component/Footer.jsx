import React from 'react';
import { NavLink } from 'react-router-dom'; // For routing (if needed)

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="row">
          {/* Column 1: About Us */}
          <div className="col-md-4 mb-4">
            <h5>About Us</h5>
            <p className="text-light">
              We are a leading e-commerce platform offering the best products at affordable prices. Shop with us for a seamless experience!
            </p>
          </div>

          {/* Column 2: Quick NavLinks */}
          <div className="col-md-2 mb-4">
            <h5>Quick NavLinks</h5>
            <ul className="list-unstyled">
              <li><NavLink to="*" className="text-decoration-none text-light">Home</NavLink></li>
              <li><NavLink to="/products" className="text-decoration-none text-light">products</NavLink></li>
              <li><NavLink to="/about" className="text-decoration-none text-light">About Us</NavLink></li>
              <li><NavLink to="/contact" className="text-decoration-none text-light">Contact Us</NavLink></li>
              <li><NavLink to="/faq" className="text-decoration-none text-light">FAQ</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div className="col-md-3 mb-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/shipping" className="text-decoration-none text-light">Shipping Information</NavLink></li>
              <li><NavLink to="/returns" className="text-decoration-none text-light">Returns & Exchanges</NavLink></li>
              <li><NavLink to="/privacy" className="text-decoration-none text-light">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="text-decoration-none text-light">Terms & Conditions</NavLink></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Media */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li className="text-light">Email: anilpadghane12@gmail.com</li>
              <li className="text-light">Phone: +91 7066793462</li>
              <li className="text-light">Address: Ganesh nagar, Wardha-442001, Maharashtra</li>
            </ul>
            <div className="mt-3">
              <h5>Follow Us</h5>
              <div className="d-flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-facebook fs-4"></i> {/* Bootstrap Facebook Icon */}
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-twitter fs-4"></i> {/* Bootstrap Twitter Icon */}
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-instagram fs-4"></i> {/* Bootstrap Instagram Icon */}
                </a>
                <a href="https://NavLinkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-NavLinkedin fs-4"></i> {/* Bootstrap NavLinkedIn Icon */}
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-youtube fs-4"></i> {/* Bootstrap YouTube Icon */}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="text-center mt-4 pt-3 border-top">
          <p className="text-light mb-0">
            &copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;