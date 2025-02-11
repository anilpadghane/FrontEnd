import React, { useEffect, useState } from "react";




const LiveDateTime = () => {
    const [dateTime, setDateTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setDateTime(new Date());
      }, 1000); // Updates every second
  
      return () => clearInterval(timer); // Cleanup on unmount
    }, []);
  
    // Get Current Day Name (Monday-Sunday)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[dateTime.getDay()];
  
    // Format Time (12-hour format with AM/PM)
    const hours = dateTime.getHours() % 12 || 12; // Convert 24-hour to 12-hour format
    const minutes = dateTime.getMinutes().toString().padStart(2, "0");
    const seconds = dateTime.getSeconds().toString().padStart(2, "0");
    const ampm = dateTime.getHours() >= 12 ? "PM" : "AM";
    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  
    return (
      <div className="container my-4">
        <h2 className="d-flex justify-content-between">
          Day of the <span className="text-success"> Deal </span>
          <span className="ms-auto bg-light p-2 rounded">
            {dayName}, {formattedTime}
          </span> {/* Aligns day and time to the right */}
        </h2>
      </div>
    );
  };
  
// Product Data
const productOne = [
  {
    id: 1,
    img: "/dates.jpg",
    name: "DRY FRUITS",
    description: "Dates Value Pouch.",
    rating: 4,
    price: "$55.99",
    oldPrice: "$85.99",
  },
  {
    id: 2,
    img: "/19_1.jpg",
    name: "EGGS",
    description: "Farm eggs- Brown.",
    rating: 5,
    price: "$5.49",
    oldPrice: "$8.99",
  },
  {
    id: 3,
    img: "/24_1.jpg",
    name: "FRESH FRUITS",
    description: "Cherry.",
    rating: 5,
    price: "$10.49",
    oldPrice: "$18.99",
  },
  {
    id: 4,
    img: "/25_1.jpg",
    name: "FRESH FRUITS",
    description: "Leechi.",
    rating: 5,
    price: "$10.49",
    oldPrice: "$18.99",
  },
  {
    id: 5,
    img: "/30_1.jpg",
    name: "FOOD",
    description: "Banana Chips Snacks.",
    rating: 5,
    price: "$14.49",
    oldPrice: "$19.99",
  },
  {
    id: 6,
    img: "/13_1.jpg",
    name: "TUBER ROOT",
    description: "Onion- Hybrid.",
    rating: 5,
    price: "$8.49",
    oldPrice: "$10.99",
  },
  {
    id: 7,
    img: "/17_1 (1).jpg",
    name: "TUBER ROOT",
    description: "Ginger-Organic.",
    rating: 5,
    price: "$5.49",
    oldPrice: "$8.99",
  },
  {
    id: 8,
    img: "/12_1.jpg",
    name: "TUBER ROOT",
    description: "Potato-Hybrid.",
    rating: 5,
    price: "$12.49",
    oldPrice: "$18.99",
  },
];

const BootstrapCarousel = () => {
  // Divide products into groups of 4 for Bootstrap carousel slides
  const chunkSize = 4;
  const productChunks = [];
  for (let i = 0; i < productOne.length; i += chunkSize) {
    productChunks.push(productOne.slice(i, i + chunkSize));
  }

  return (
    
    <div className="container my-4">
        <div className="container my-5">
          <LiveDateTime/>
        </div>
      <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {productChunks.map((chunk, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row">
                {chunk.map((product) => (
                  <div key={product.id} className="col-md-3 col-sm-6 mb-4">
                    <div className="card position-relative shadow-sm border-1">
                      {/* Sale Badge */}
                      <span className="position-absolute top-0 start-0 bg-danger text-white px-3 py-1 rounded-end">
                        Sale
                      </span>

                      {/* Product Image */}
                      <img src={product.img} alt={product.name} className="card-img" />

                      {/* Product Details */}
                      <div className="card-body text-center">
                        <h5 className="fw-bold text-success ">{product.name}</h5>
                        <p className="text-muted">{product.description}</p>

                        {/* Rating */}
                        <div className="mb-2">
                          {Array.from({ length: 5 }, (_, i) => (
                            <i key={i} className={`bi ${i < product.rating ? "bi-star-fill text-warning" : "bi-star text-muted"}`}></i>
                          ))}
                        </div>

                        {/* Price & Old Price */}
                        <div className="d-flex justify-content-center align-items-center gap-2">
                          <span className="text-success fw-bold fs-5">{product.price}</span>
                          <span className="text-muted text-decoration-line-through">{product.oldPrice}</span>
                        </div>

                        {/* Shop Now Button */}
                        <button className="btn btn-dark text-light mt-3">Shop Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon-hidden" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon-hidden" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default BootstrapCarousel;
