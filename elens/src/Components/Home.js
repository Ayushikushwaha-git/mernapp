import React from "react";
import logo from "./11-removebg-preview.png";
//import "App.css";
import './inside.css';
import Main from "./Main.js";
import Login from './Login.js';
import Second from "./Second";
import Third from "./Third";
//import Contacts from './Contacts.js';
import {Link} from "react-router-dom";
//import Second from "./Second.js";

//import logo from "./logocart.png";

export default function Header() {
 
  return (
   
    <>
         
      <div className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
      
        <h4 >OneHandToAnother</h4>
        <form className="d-flex" role="search">
            <Link to="/login" className="btn btn-outline-success">Signin</Link>
            <Link to="/sign" className="btn btn-right btn-outline-success">Signup</Link>
          </form>
        </div>
      </div>
     <div className="midPart">
      <div className="oneSide">
      <h1>"Seize opportunities effortlessly,
      </h1>
      <h1>            buy and sell with just one click."
      </h1>
      <h3>
      where convenience meets opportunity.
      </h3>
      <form className="d-flex" role="search">
            <Link to="/login" className="btn btn-outline-success">Signin</Link>
            <Link to="/sign" className="btn btn-right btn-outline-success">Signup</Link>
          </form>
      {/* <button className="btn btn-outline-success" type="submit"><Link href="/login">Signin</Link></button> */}
        {/* <button className="btn btn-right btn-outline-success" type="submit">Signup</button> */}
      </div>
      <img className="img" src={logo}></img>
     
     </div>
     <Second/>
     <Third/>
        <div className="card-footer text-center text-muted">
   @copyright
  </div>
    </>
    
  );
}
