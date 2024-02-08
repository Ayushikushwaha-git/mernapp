import React from "react";
import logo from "./11-removebg-preview.png";
import './inside.css';
import Second from "./Second";
import Third from "./Third";
import {Link} from "react-router-dom";


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
      <h1 className="firstHead">"Your health journey starts here,,
      </h1>
      <h1 className="firstHead">         where care meets compassion."
      </h1>
      <h3>
      Building healthier lives, click by click.
      </h3>
      <form className="d-flex" role="search">
            <Link to="/login" className="btn btn-outline-success">Signin</Link>
            <Link to="/sign" className="btn btn-right btn-outline-success">Signup</Link>
          </form>
      {/* <button className="btn btn-outline-success" type="submit"><Link href="/login">Signin</Link></button> */}
        {/* <button className="btn btn-right btn-outline-success" type="submit">Signup</button> */}
      </div>
      <img className="img firstImg img-fluid" src={logo}></img>
     
     </div>
     <Second/>
     <Third/>
        <div className="card-footer text-center text-muted">
   @copyright
  </div>
    </>
    
  );
}
