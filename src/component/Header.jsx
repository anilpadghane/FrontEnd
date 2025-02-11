import logo from "../Assests/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container d-flex align-items-center justify-content-between px-lg-4 px-md-3 px-2 py-3 flex-wrap">
      {/* Logo */}
      <div className="d-flex align-items-center">
        <img
          src={logo}
          alt="Logo"
          className="me-2 logo-img"
        />
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="input-group">
          {/* Dropdown for Product Categories */}
          <select className="form-select category-dropdown" defaultValue="all">
            <option value="all">Category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="books">Books</option>
            <option value="home-appliances">Home Appliances</option>
          </select>

          {/* Text Input for Search */}
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search products..."
          />

          {/* Search Button */}
          <button className="btn search-btn" type="button">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>

      {/* Right Icons */}
      <div className="d-flex align-items-center gap-2 right-icons">
        <button className="btn btn-link text-dark" aria-label="Login">
          <i className="bi bi-person icon"></i>
        </button>
        <button className="btn btn-link text-dark" aria-label="Wishlist">
          <i className="bi bi-heart icon-heart"></i>
        </button>
        <button className="btn btn-link text-dark" aria-label="Cart">
          <i className="bi bi-cart3 icon"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
