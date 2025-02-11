import React from 'react'
import imgh4 from '../Assests/shipping.png'
import img2 from '../Assests/return.png'
import img3 from '../Assests/support.png'
import img4 from  '../Assests/ptm.png'
import './ServiceCard.css'

const ServiceCard = () => {
  return (
    <div className='container'>
        <div className="row my-3 ">
            <div className='col-md-3'>
                <div className='card service-card '>
                  
                    <img src={imgh4} alt="" className='img-fluid service-card-img ' />
                
                    <div className="card-body text-center">
                    <h4 className='card-title text-success'>Free Shipping</h4>
                    <p className='card-text'>Free shipping of all of us order or above order $200</p>
                </div>
            </div>
            </div>
        
      
            <div className='col-md-3'>
                <div className='card service-card'>
                    <img src={img2} alt="" className='img-fluid service-card-img' />
                    <div className="card-body text-center">
                    <h4 className='card-title text-success'>30 Days Return</h4>
                    <p className='card-text'>Simply return within 30 days for an exachange </p>
                </div>
            </div>
            </div>
        
            <div className='col-md-3'>
                <div className='card service-card'>
                    <img src={img3} alt="" className='img-fluid service-card-img' />
                    <div className="card-body text-center">
                    <h4 className='card-title text-success'>24*7 Support</h4>
                    <p className='card-text'>You may conatct the support team 24 hour in a day and 7 days in a week</p>
                </div>
            </div>
            </div>
        
     
            <div className='col-md-3'>
                <div className='card service-card'>
                    <img src={img4} alt="" className='img-fluid service-card-img' />
                    <div className="card-body text-center">
                    <h4 className='card-title text-success'>Payment</h4>
                    <p className='card-text'>Here you can pay for your order and get confirm order details </p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard
