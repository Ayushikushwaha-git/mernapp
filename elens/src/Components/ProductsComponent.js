import React from 'react';
import logo1 from './untitled-2.gif'
export default function ProductsComponent({takeone,onDelete}) {
  //console.log(takeone.title);
  const log23=takeone.image;
  return (
    <div className='boxPro'>
      <div className='boxinside'>
<div className='leftOne'>
<img className='box-image' src={log23}></img>
</div>
     
      <div className='rightOne'>
      <h3>{takeone.title}</h3> 
      <h6>
        {takeone.desc}
      </h6>
      <h4>
        Price:{takeone.price}
      </h4>
      
    
      </div>
      <button className="btn btnright btn-sm btn-danger"onClick={()=>{onDelete(takeone)}}>Delete</button>
           </div> 
    </div>
  );
}
