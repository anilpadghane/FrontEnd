import React from 'react'

import img1 from '../Assests/newsitem.jpg'
import img2 from '../Assests/2 (2).jpg'
import img3 from '../Assests/3 (2).jpg'

import './Blogg.css'
import { NavLink } from 'react-router-dom'

const Blogg = () => {
    const cardData = [
        {
          img: img1,
          date: 'Feb-07-2025, Organic',
          title: 'BEST WAY TO SOLVE BUSINESS DEAL ISSUE',
          text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
          img: img2,
          date: 'Feb-07-2025, Fruits',
          title: '31 CUSTOMER SERVICE STATS KNOW IN 2019',
          text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
          img: img3,
          date: 'Feb-07-2025, Vegetable',
          title: 'MARKETING GUIDE: 5 STEPS TO SUCCESS',
          text: 'Lorem distinctio explicabo nam quidem laborum consequuntur, ab ducimus! Quam a!.',
        },
        
          
      ];
  return (
    <div className='container'>
       <nav className="navbar navbar-expand-lg navbar-light  px-6 m-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left Heading (Name) */}
        <h2 className="navbar-brand Vendor-h2 m-0">Latest <span className='text-success'>News</span></h2>

        {/* Right Navigation */}
        <div className="d-flex">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink  className="nav Vendor-link" to="/blog">BLOG <i className='bi bi-caret-right-fill'></i></NavLink>
            </li>
          </ul>
        </div>
      </div>
      </nav>
    {/* card for news */}
    
    <div className='row p-3'>
        {cardData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card card-blog" style={{ width: "25rem" }}>
              <div className='card-img-container p-3 border-0'>
                <img src={card.img} className=" card-img" alt="News" />
              </div>
              <div className="card-body card-blog-body">
                <p className='text-secondary'>{card.date}</p>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <button className="btn btn-dark">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogg
