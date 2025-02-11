import React, { useState } from "react";
import axios from "axios";

const ProductAddForm = ({ onAdd }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send POST request to add the new product
    axios
      .post("http://localhost:3000/snack_spices", newProduct)
      .then((response) => {
        onAdd(response.data); // Pass the new product back to the parent
        setNewProduct({
          name: "",
          description: "",
          price: "",
          image: "",
          rating: 0,
        });
      })
      .catch((error) => console.error("Error adding product:", error));
  };

  return (
    <div>
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="form-control mb-2"
        />
        <input
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
          placeholder="Description"
          className="form-control mb-2"
        />
        <input
          type="text"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Price"
          className="form-control mb-2"
        />
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="form-control mb-2"
        />
        <input
          type="number"
          name="rating"
          value={newProduct.rating}
          onChange={handleChange}
          placeholder="Rating"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductAddForm;
