import React from 'react'
import img1 from '../Assests/news (1).jpg'
import './EmailImg.css'
const EmailImg = () => {
  return (
    <div className='container'>
      <div class="card text-bg-dark">
  <img src={img1} class="card-img" alt="..."/>
  <div class="card-img-overlay text-center">
    <h2 class="card-title fw-bold p-3">Subscribe for join us!!</h2>
    <h4 class="card-text">Get in touch and get in future updates.</h4>
    <div className="input-with-icon">
    <input type='email' className='form-control-lg' placeholder='Email address'/>
    <i class="bi bi-send-arrow-up-fill icon bg-dark"></i>
    </div>
  </div>
</div>
    </div>
  )
}

export default EmailImg
