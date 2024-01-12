import React from 'react';

export default function Addedpayment() {
  return (
    <div>
     <div className='pop added'>
        <div className='onesidee'>
        <h5>Upload image</h5>
      <input type="file"  id="image"></input>
        </div>
     
      <div>
      <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Title of Product</label>
    <input type="text" Name="form-control" id="title" aria-describedby="emailHelp" placeholder="Title of Product "/>
    
  </div>
  
  
  <button type="submit"  className="btn btn-primary btn-sub">Submit</button>
</form>
        </div>
    
    </div>
    </div>
  );
}
