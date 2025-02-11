import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBackgroundDimmed, setIsBackgroundDimmed] = useState(false); // For background dimming
  const [selectedCity, setSelectedCity] = useState("Pune");
  const cities = ["Pune", "Mumbai", "Delhi", "Bangalore", "Chennai"];

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const toggleSidebar = () => {
    if (!isSidebarOpen) {
      // Open sidebar with delay for background dimming
      setIsBackgroundDimmed(true);
      setTimeout(() => {
        setIsSidebarOpen(true);
      }, 400); 
    } else {
      // Close sidebar with immediate background undimming
      setIsSidebarOpen(false);
      setTimeout(() => {
        setIsBackgroundDimmed(false);
      }, 400); 
    }
  };

  return (
    <div>
      {/* Dimmed Background */}
      {isBackgroundDimmed && (
        <div
          onClick={toggleSidebar} // Clicking outside the sidebar will close it
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(12, 12, 12, 0.5)", // Semi-transparent overlay
            zIndex: 999,
            transition: "opacity 0.3s ease", // Smooth fade-in/out
            opacity: isSidebarOpen ? 1 : 0, // Adjust opacity based on sidebar state
          }}
        ></div>
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "300px",
            height: "100%",
            backgroundColor: "white", //  background
            color: "green", //  text
            textDecoration:"underline",
            boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            padding: "20px",
            transition: "transform 0.3s ease", // Smooth slide-in animation
            transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <button className="btn btn-success"
            style={{
             
              border: "1px solid black",
              fontSize: "18px",
              cursor: "pointer",
              marginBottom: "20px",
              color: "#fff", // close button
            }}
            onClick={toggleSidebar}
          >
            <strong>Close</strong>
          </button>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ margin: "10px 0" }}>
              <NavLink
                to="/"
                onClick={toggleSidebar}
                style={{
                  textDecoration: "none",
                  color: "green", // White text
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Home
              </NavLink>
            </li>
            <li style={{ margin: "10px 0" }}>
              <NavLink
                to="/productdata"
                onClick={toggleSidebar}
                style={{
                  textDecoration: "none",
                  color: "green", // White text
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Category
              </NavLink>
            </li>
            <li style={{ margin: "10px 0" }}>
              <NavLink
                to="/products"
                onClick={toggleSidebar}
                style={{
                  textDecoration: "none",
                  color: "green", // White text
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Products
              </NavLink>
            </li>
            <li style={{ margin: "10px 0" }}>
              <NavLink
                to="/"
                onClick={toggleSidebar}
                style={{
                  textDecoration: "none",
                  color: "green", // White text
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Blog
              </NavLink>
            </li>
            <li style={{ margin: "10px 0" }}>
              <NavLink
                to="/"
                onClick={toggleSidebar}
                style={{
                  textDecoration: "none",
                  color: "green", // White text
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Discover
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg"
        style={{
          background: "#fff", // White background for navbar
          border: "1px solid grey",
          padding: "5px 100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Grid Icon (Left) */}
        <NavLink
          to="#"
          className="navbar-brand"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0px",
            marginRight: "20px",
            cursor: "pointer",
          }}
          onClick={toggleSidebar}
        >
          <i className="bi bi-grid" style={{ fontSize: "2rem", color: "#333" }}></i>
        </NavLink>

        {/* Navbar Links (Center) */}
        <ul
          className="navbar-nav"
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <li className="nav-item">
            <NavLink className="nav-link" to="/" style={{ fontWeight: "bold" }}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/vendor"
              style={{ fontWeight: "bold" }}
            >
              Category
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/products"
              style={{ fontWeight: "bold" }}
            >
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/blog"
              style={{ fontWeight: "bold" }}
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/discover"
              style={{ fontWeight: "bold" }}
            >
              Discover
            </NavLink>
          </li>
        </ul>

        {/* Address Icon with Dropdown (Right) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            border: "1px solid grey",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <i
            className="bi bi-geo-alt"
            style={{
              fontSize: "20px",
              marginRight: "10px",
              padding: "0 8px",
            }}
          ></i>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            style={{
              padding: "8px 25px",
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
