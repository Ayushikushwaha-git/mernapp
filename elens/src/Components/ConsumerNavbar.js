import React,{useState,useEffect}from 'react';
import {Link} from "react-router-dom";



export default function ConsumerNavbar() {
  
  return (
    <div>
       <div className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
        <form className="d-flex" role="search">
            <Link to="/consumerInterface" className="navbar-brand">Home</Link>
            <Link to="/cart" className="navbar-brand">Cart</Link>
           
          </form>
        </div>
      </div>
     
      
    </div>
  );
}
