import React from 'react';
//import './inside.css';
//import logo from '../ecart.jpg';
import Second from "./Second";
import Header from "./Home";
export default function Main() {
  return (
   
    <div>
       
        {/* <h1 className='mid'>Let's eye on the value
        </h1>
      <p className='mid-para'>The AI-powered developer platform to build, scale, and deliver secure software.</p> */}
       <div className="card1 position-absolute top-50 start-50 translate-middle" data-aos="zoom-out-up"
     //data-aos-anchor-placement="bottom-bottom"
       
      //   data-aos-offset="100"
      //   data-aos-delay="100"
      //  data-aos-duration="3000"
        // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        // data-aos-anchor-placement="center-top" 
        >
  
   <div className="card-body" >
    <h1 className="card-title font-weight-bold">Stay Stylish, Shop Smart: </h1>
    <p className="card-text font-italic">Welcome to [Your Website Name], your ultimate destination for savvy shopping in the world of fashion. We believe that great style shouldn't come at a high cost. Our mission is simple: to help you stay on-trend and within budget.</p>
    <div className='lowBtn'>
    <a href="#" value="login" className="btn btn-outline-dark">Login</a>
    <h6>Already have an acount?      <a href="#">Signup</a></h6>
  </div>
  </div>
</div> 
<div className="secondHalf hover-section">
          <Second />

        </div>
        <div className="box">
          <p>@copyright</p>
        </div>
    </div>
  );
}
