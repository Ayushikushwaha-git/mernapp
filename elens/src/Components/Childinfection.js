import React from 'react';
import ConsumerNavbar  from './ConsumerNavbar';
import { useEffect,useState } from 'react';
import { useCart, useDispatchCart } from './ContextReducer';
export default function Infection() {
  const [products,setProducts]=useState([]);
  let data=useCart();
  let dispatch=useDispatchCart();
  useEffect(()=>{
    fetch('http://localhost:8000/getInfectPro')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      //console.log(response.json())
      return response.json();
    })
    .then(data => {
      // Assuming the data you want to set in the state is in 'data'
      //console.log(data)
      setProducts(data.data);
    })
    .catch(error => {
      // Handle errors here, if needed
      console.error('Error fetching data:', error);
    });
  },[])
  const handleSubmit= (work)=>{
    if (localStorage.getItem("userEmail")){
     dispatch({ type: 'UPDATE', id: work._id });
    }
       else{
         dispatch({type:"ADD",id:work._id,name:work.name,price:work.price}) }
       if (localStorage.getItem("userEmail")) {
         fetch('http://localhost:8000/orderData', {
           method: "POST",
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({
             order_data: [...data, { id: work._id, name: work.name, price: work.price }],
             email: localStorage.getItem("userEmail"),
           })
         })
           .then(response => {
             if (!response.ok) {
               throw new Error('Network response was not ok');
             }
             // Handle the response if needed
             console.log('Server response:', response);
           })
           .catch(error => {
             console.error('Error sending data to the server:', error);
           });
       }
     
   }
  return (
    <div>
       <ConsumerNavbar/>
       <div className="container">
         {products.map(product => (
            <div className='row' style={{ backgroundColor: 'white' }} key={product._id}>
             <div className="col colu">
            <td><img className='img-fluid' style={{ width: '200px', height: '200px' }} src={product.img}></img></td>
           </div>
           <div className='col coli'>
           
            <h4>{product.name}</h4>
        <p>{product.description}</p>
        <h3>Price: {product.price}</h3>
        <button type="button" className="btn btn-success" onClick={() => handleSubmit(product)}>Add to Cart</button>
            </div>
              
             </div>
          
          ))}
           </div>
    </div>
  );
}
