import React ,{useState} from 'react';
import logo1 from './work-removebg-preview.png';
import logo2 from './sales-removebg-preview.png';
export default function Popup({closePopup}) {
  
  return (
    
    <div className='pop'>
      <h3>Click on image either one:</h3>
      <button onClick={closePopup}><img className='firstimg' src={logo2}></img></button>
      <h4>OR</h4>
      <button  onClick={closePopup}><img className='secondimg' src={logo1}></img></button>
      <h5 className='seller'>Seller</h5>
      <h5 className='consumer'>Consumer</h5>
    </div>
  );
}
