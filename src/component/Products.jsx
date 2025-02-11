import React, { useState, useEffect } from "react";
import data from "../data"; //  Import Local Data
import Sidebar from "./Sidebar";
import SidebarUpdate from "./SidebarUpdate";



const Products = () => {
  const [products, setProducts] = useState([]); // Holds all products
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUpdateSidebarOpen, setIsUpdateSidebarOpen] = useState(false);
  const [productData, setProductData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    image: "",
    rating: 0,
    category: "snack_spices",
  });

  //  Load Data from `data.js`
  useEffect(() => {
    const allProducts = [
      ...data.snack_spices.map((item) => ({ ...item, category: "snack_spices" })),
      ...data.fruits.map((item) => ({ ...item, category: "fruits" })),
      ...data.vegetable.map((item) => ({ ...item, category: "vegetable" })),
    ];
    setProducts(allProducts);
  }, []);

  //  Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //  Add Product (Fix: Assign Unique ID)
  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = { ...productData, id: Date.now() }; //  Generate a unique ID
    setProducts((prevProducts) => [...prevProducts, newProduct]); //  Update state correctly
    resetForm();
    setIsSidebarOpen(false);
  };

  //  Update Product (Fix: Correct State Update)
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productData.id ? { ...productData } : product //  Update only the selected product
      )
    );

    resetForm();
    setIsUpdateSidebarOpen(false);
  };

  //  Delete Product (Fix: Ensure Proper State Update)
  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  //  Reset Form Fields
  const resetForm = () => {
    setProductData({ id: "", name: "", description: "", price: "", image: "", rating: 0, category: "snack_spices" });
  };

  return (
    <>
    
     
      <div className="container mt-5">
        <h2 className="text-center text-success fw-bold mb-4">Product List</h2>

        {/* Button to Open Add Product Sidebar */}
        <div className="cart-icon p-3" onClick={() => { resetForm(); setIsSidebarOpen(true); }} style={{ position: "relative", cursor: "pointer" }}>
          <button className="btn btn-success fw-bold"> Add Product </button>
        </div>

        {/* Sidebar for Adding Product */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onSubmit={handleAddProduct}
          productData={productData}
          onInputChange={handleInputChange}
        />

        {/* Sidebar for Updating Product */}
        <SidebarUpdate
          isOpen={isUpdateSidebarOpen}
          onClose={() => setIsUpdateSidebarOpen(false)}
          onSubmit={handleUpdateProduct}
          productData={productData}
          onInputChange={handleInputChange}
        />

        {/* Product List */}
        <div className="row mt-4">
          {products.map((product) => (
            <div className="col-md-3 col-sm-5 mb-5" key={product.id}>
              <div className="card bg-white shadow-sm" style={{ width: "100%", border: "1px solid gray", borderRadius: "8px" }}>
                <div className="text-center">
                  <img src={product.image} className="img-fluid" alt={product.name} style={{ height: "200px", objectFit: "cover", width: "80%" }} />
                </div>
                <div className="card-body text-center">
                  <h5 className="fw-bold text-success">{product.name}</h5>
                  <p className="text-muted">{product.description}</p>

                  {/* Display Ratings */}
                  <div className="mb-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i key={i} className={`bi ${i < product.rating ? "bi-star-fill text-warning" : "bi-star text-secondary"}`}></i>
                    ))}
                  </div>

                  <h5 className="text-dark fw-bold">${product.price}</h5>

                  {/* Update & Delete Buttons */}
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <button
                      className="btn btn-dark btn-sm"
                      onClick={() => {
                        setProductData({ ...product });
                        setIsUpdateSidebarOpen(true);
                      }}
                    >
                      Update
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProduct(product.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
