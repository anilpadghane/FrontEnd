import React from 'react';
import { NavLink } from 'react-router-dom'

const ProductCard = ({ item }) => (
  <div className="col-md-6 mb-1">
    <div className="card h-90">
      <div className="row g-0 align-items-center">
        {/* img */}
        <div className="col-auto p-2">
          <img
            src={item.img}
            alt={item.name}
            className="img-fluid rounded-start"
            style={{ width: '50px', height: '50px' }}
          />
        </div>
        {/* Name and Percentage Off */}
        <div className="col">
          <div className="card-body">
            <h5 className="card-title mb-0">{item.name} <span className="badge bg-success position-absolute  end-0 me-2 ">{item.off}</span></h5>
            
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MainCard = ({ category, products }) => (
  <div className="col-md-6 p-3">
    <div className=" mb-4 border-0">
      <div className="card-title p-3">
        <h6 className="mb-0">
          {category} <i className="bi bi-stop-circle text-success"></i>
        </h6>
      </div>
      <div className="card-body">
        <div className="row">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const DiscoverItem = () => {
  const fruits = [
    {id:1, img: '/30_1.jpg', name: 'Banana', off: "10%" },
    { id:2,img: '/31_1.jpg', name: 'Mango', off: "15%" },
    {id:3, img: '/29_1.jpg', name: 'Pineapple', off: "20%" },
    {id:4, img: '5 (3).jpg', name: 'Apple', off: "25%" },
    {id:5, img: '22_1.jpg', name: 'Dragon fruit', off: "30%" },
    {id:6, img: '/23_1 (1).jpg', name: 'Blue berry', off: "35%" },
    {id:7, img: '/27_1.jpg', name: 'Gahuva fruit', off: "40%" },
    {id:8, img: '/28_1 (1).jpg', name: 'Aplle fruit', off: "45 %"},
  ];
  const snacksAndSpices = [
    { id: 9, img: '/chips.jpg', name: 'Chips', off: '20%' },
    { id: 10, img: '/nuts.jpg', name: 'Nuts', off: '5%' },
    { id: 11, img: '/bananavhips.jpg', name: 'Banana Chips', off: '10%' },
    { id: 12, img: '/spiceynuts.jpg', name: 'Nuts', off: '15%' },
    { id: 13, img: '/dryfruits.jpg', name: 'Dry fruits', off: '25%' },
    { id: 14, img: '/dates.jpg', name: 'Dates', off: '10%' },
    { id: 15, img: '/almonds.jpg', name: 'Almonds', off: '20%' },
    { id: 16, img: '/grapsnacks.jpg', name: 'Graps Snacks', off: '5%' },
  ];

  return (
    <div className='container'>
       <nav className="navbar navbar-expand-lg navbar-light  px-6 m-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left Heading (Name) */}
        <h5 className="navbar Vendor-h2 m-0">Discover <span className='text-success '>Items</span></h5>
       {/* Right Navigation */}
       <div className="d-flex">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav Vendor-link" to="/vendor">Discover All <i className='bi bi-caret-right-fill'></i></NavLink>
            </li>
         </ul>
      </div>
     </div>
          </nav>
    <div className="container-fluid p-3">
      <div className="row">
        {/* First Main Card */}
        <MainCard category="FRUITS" products={fruits} />
        {/* Second Main Card */}
        <MainCard category="SNACKS AND SPICES" products={snacksAndSpices} />
      </div>
    </div>
  </div>
  );
};

export default DiscoverItem;