import React, { useState } from 'react';
//import checkAuth from '../../../server/checkAuth.mjs';
export default function Addedpop({onClose,totalprice}) {
 
    
  
    const [add, setAdd] = useState("");
    
   
 
    async function handleSubmit(e) {
     
    
   alert("Payment accepted")
    
    
    setAdd("");
    
    onClose();
    
    }; 
  
  return (
    <div>
      <div className='pop added'>
        <form onSubmit={handleSubmit}>
      
     
      
     
  
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Address</label>
    <input type="text" className="form-control" id="desc" placeholder="Enter Your Address"value={add}
                onChange={(e) => setAdd(e.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Your Price:</label>
    <label htmlFor="exampleInputPassword1">{totalprice}</label>
  </div>
  
  
  <button type="submit"  className="btn btn-primary btn-sub">Pay</button>

        
        </form>
    </div>
   
    </div>
  );
}
