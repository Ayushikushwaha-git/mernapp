import React from 'react';
import ConsumerNavbar  from './ConsumerNavbar';
import logo1 from './child-infection.jpg.png';
import logo2 from './skin care.jpg';
import logo3 from './eye.jpg';
import { Link } from "react-router-dom";
export default function HomeForConsumer() {
  return (
    <div>
      <ConsumerNavbar/>
      <div className="card" >
  <img src={logo1} className="card-img-top imgg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Child Infection</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/infectionmedicine" className="btn btn-success">Visit</Link>
  </div>
</div>
   
    <div className="card" >
    <img src={logo2} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Skin Treatment</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to="/skinmedicine" className="btn btn-success">Visit</Link>
    </div>
  </div>
   
      <div className="card" >
  <img src={logo3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Eye Treatment</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/eyemedicine" className="btn btn-success">Visit</Link>
  </div>
</div>
    </div>
  );
}
