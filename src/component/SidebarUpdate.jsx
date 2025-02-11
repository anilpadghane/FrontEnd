import React from "react";

const SidebarUpdate = ({ isOpen, onClose, onSubmit, productData, onInputChange }) => {
  return (
    <div
      className={`sidebar ${isOpen ? "open" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "300px",
        height: "100%",
        backgroundColor: "#fff",
        boxShadow: "-4px 0 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        padding: "20px",
        zIndex: 1000,
      }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{ border: "none", background: "none", fontSize: "1.5rem", cursor: "pointer" }}
      >
        <i className="bi bi-x-circle"></i>
      </button>

      <h3>Update Product</h3>

      <form onSubmit={onSubmit}>
        {/* Product Name */}
        <input
          type="text"
          name="name"
          value={productData.name}
          onChange={onInputChange}
          placeholder="Product Name"
          className="form-control mb-2"
          required
        />

        {/* Description */}
        <input
          type="text"
          name="description"
          value={productData.description}
          onChange={onInputChange}
          placeholder="Description"
          className="form-control mb-2"
          required
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          value={productData.price}
          onChange={onInputChange}
          placeholder="Price"
          className="form-control mb-2"
          required
        />

        {/* Image URL */}
        <input
          type="text"
          name="image"
          value={productData.image}
          onChange={onInputChange}
          placeholder="Image URL"
          className="form-control mb-2"
          required
        />

        {/* Rating */}
        <input
          type="number"
          name="rating"
          value={productData.rating}
          onChange={onInputChange}
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          className="form-control mb-2"
          required
        />

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default SidebarUpdate;
