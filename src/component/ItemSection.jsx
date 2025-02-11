// import React from 'react';
import './ItemSection.css'; // Import CSS for styling

// Product Data (Array of Objects)


const products = [
  {
    id: 1,
    name: "California Almonds",
    category: "Dried Fruits",
    price: "$50",
    pack: "2 pack",
    img: "/almonds.jpg" // Replace with actual image URL
  },
  {
    id: 2,
    name: "Cashew Nuts",
    category: "Dried Fruits",
    price: "$40",
    pack: "3 pack",
    img: "11_1.jpg"
  },
  {
    id: 3,
    name: "Pistachios",
    category: "Dried Fruits",
    price: "$60",
    pack: "1 pack",
    img: "/dates.jpg"
  }
];

const ItemSection = () => {
  return (
    <section className='container my-5'>
    <div className='row'>
      {/* New Arrivals */}
      <div className='col-md-6 col-lg-3 mb-4'>
        <div className="titletext">
          <h2>New <span>Arrivals</span></h2>
        </div>
        <div className='row'>
          {products.map((product) => (
            <div className='col-12' key={product.id}>
              <div className='card bg-white shadow-sm p-2'>
                <div className="row g-0 d-flex align-items-center">
                  {/* Image on Left */}
                  <div className="col-4">
                    <img src={product.img} className='img-fluid rounded' alt={product.name} />
                  </div>
                  {/* Text on Right */}
                  <div className="col-8">
                    <div className='card-body p-2'>
                      <h5 className='product-title fw-bold d-flex align-items-center'>
                        {product.name}
                        <i className='bi bi-circle-fill text-success fs-6  position-absolute top-0 end-0 m-2'></i>
                      </h5>
                      <h6 className='text-secondary'>{product.category}</h6>
                      <span className='price text-success fw-bold'>{product.price}</span>
                      <span className='text-secondary'> - {product.pack}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Top Selling */}
      <div className='col-md-6 col-lg-3 mb-4'>
        <div className="titletext">
          <h2>Top <span>Selling</span></h2>
        </div>
        <div className='row'>
          {products.map((product) => (
            <div className='col-12' key={product.id}>
              <div className='card bg-white shadow-sm p-2'>
                <div className="row g-0 d-flex align-items-center">
                  <div className="col-4">
                    <img src={product.img} className='img-fluid rounded' alt={product.name} />
                  </div>
                  <div className="col-8">
                    <div className='card-body p-2'>
                      <h5 className='product-title fw-bold d-flex align-items-center'>
                        {product.name}
                        <i className='bi bi-circle-fill text-success fs-6  position-absolute top-0 end-0 m-2'></i>
                      </h5>
                      <h6 className='text-secondary'>{product.category}</h6>
                      <span className='price text-success fw-bold'>{product.price}</span>
                      <span className='text-secondary'> - {product.pack}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Top Rated */}
      <div className='col-md-6 col-lg-3 mb-4'>
        <div className="titletext">
          <h2>Top <span>Rated</span></h2>
        </div>
        <div className='row'>
          {products.map((product) => (
            <div className='col-12' key={product.id}>
              <div className='card bg-white shadow-sm p-2'>
                <div className="row g-0 d-flex align-items-center">
                  <div className="col-4">
                    <img src={product.img} className='img-fluid rounded' alt={product.name} />
                  </div>
                  <div className="col-8">
                    <div className='card-body p-2'>
                      <h5 className='product-title fw-bold d-flex align-items-center'>
                        {product.name}
                        <i className='bi bi-circle-fill text-success fs-6  position-absolute top-0 end-0 m-2'></i>
                      </h5>
                      <h6 className='text-secondary'>{product.category}</h6>
                      <span className='price text-success fw-bold'>{product.price}</span>
                      <span className='text-secondary'> - {product.pack}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Trending Items */}
      <div className='col-md-6 col-lg-3 mb-4'>
        <div className="titletext">
          <h2>Trending <span>Items</span></h2>
        </div>
        <div className='row'>
          {products.map((product) => (
            <div className='col-12' key={product.id}>
              <div className='card bg-white shadow-sm p-2'>
                <div className="row g-0 d-flex align-items-center">
                  <div className="col-4">
                    <img src={product.img} className='img-fluid rounded' alt={product.name} />
                  </div>
                  <div className="col-8">
                    <div className='card-body p-2'>
                      <h5 className='product-title fw-bold d-flex align-items-center'>
                        {product.name}
                        <i className='bi bi-circle-fill text-warning fs-6  position-absolute top-0 end-0 m-2'></i>
                      </h5>
                      <h6 className='text-secondary'>{product.category}</h6>
                      <span className='price text-success fw-bold'>{product.price}</span>
                      <span className='text-secondary'> - {product.pack}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
    </div>
  </section>
  
  );
};

export default ItemSection;
