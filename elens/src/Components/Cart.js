import React from "react";
import ConsumerNavbar from "./ConsumerNavbar";
import { useEffect, useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Addedpop from "./Addedpop";

export default function Cart() {
  const [products, setProducts] = useState([]);
 
  let data = useCart();
  let dispatch = useDispatchCart();
  
  useEffect(() => {
   getAllData();
  }, []);
  const getAllData=()=>{
   let userEmail= localStorage.getItem("userEmail")
    fetch("http://localhost:8000/getCartData")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      //onsole.log(response.json())
      return response.json();
    })
    .then((data) => {
      // Assuming the data you want to set in the state is in 'data'
      console.log(data)
      const userCartItems = data.data.filter(item => item.email === userEmail);
      setProducts(userCartItems);
    })
    .catch((error) => {
      // Handle errors here, if needed
      console.error("Error fetching data:", error);
    });
  }
  /* if(data.length==0){
    return(
      <div>
        <ConsumerNavbar/>
        <div className='m-5 w-100 text-center fs-3'>The cart is empty</div>
      </div>
    )
  }*/
  //const handleCheckOut= async()=>{
  //let userEmail=localStorage.getItem("userEmail");
  //let response=await fetch('http://localhost:8000/orderData',{
  // method:"POST",
  //headers:{
  //  'Content-Type':'application/json'
  //},
  //body:JSON.stringify({
  // order_data:data,
  // email:userEmail,
  //})

  //})
  //console.log(response)
  //if(response.status===200){
  // dispatch({type:"DROP"})
  //}
  // }
 let k=0;
    let totalprice = products
  .map((total, data) => 
  total.order_data.map((item, itemIndex) => (
     k=k+item[0].price
     
//console.log(k)
     
    ))
   
    
  )
  const deleteDatabs=(orderId)=>{
    console.log(orderId)
    fetch('http://localhost:8000/deleteDatabs', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderid:orderId,
          
        
        })
        
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Handle the response if needed
          console.log('Server response:', response);
        })
        .then(() => {
          // Update the state after successful deletion
          //getAllData();
          setProducts([]);
           
         
        })
        .catch(error => {
          console.error('Error sending data to the server:', error);
        });
       
  }
  const deleteUser=(orderId,productId)=>{
    fetch('http://localhost:8000/deleteData', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderid:orderId,
          proId:productId,
        
        })
        
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Handle the response if needed
      
          console.log('Server response:', response);
          
        })
        .then(() => {
          // Update the state after successful deletion
          //getAllData();
          console.log(orderId)
        
          
          setProducts(prevProducts => {
            // Map through the existing products and filter out the one with the provided productId
            return prevProducts.map(product => {
              return {
                ...product,
                order_data: product.order_data.filter(item => item[0].id !== productId)
              };
            }).filter(product => product.order_data.length > 0); // Remove products with empty order_data
          });
           
         
        })
        .catch(error => {
          console.error('Error sending data to the server:', error);
        });
       
  }
  const [isPopOpen, setPopOpen] = useState(false);

  const openPop = () => {
    setPopOpen(true);
  };

  const closePop = () => {
    setPopOpen(false);
  };

  return (
    <>
       <ConsumerNavbar />
       {isPopOpen && <Addedpop onClose={closePop} totalprice={k}/>}
      <div className="m-auto mt-5">
        <table className="table">
          <thead>
            <tr>
              <th >#</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
            {products.length > 0 ? (
              products.map((data, dataIndex) =>
                data.order_data.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td>{dataIndex++}</td>
                    <td>{item[0].name}</td>
                    <td>{item[0].price}</td>
                    <td>
                      <FontAwesomeIcon
                        onClick={() => {
                          const orderId = data._id; // Assuming _id is the orderId in your products data
                       
        const productId = item[0].id;
        console.log(orderId)
                                  deleteUser(orderId,productId);
                                 
                          //dispatch({ type: "REMOVE" });
                        }}
                        icon={faTrash}
                      />
                    </td>
                  </tr>
                ))
              )
            ) : (
              <tr>
                <td colSpan="4" className="text-center fs-3">
                  The cart is empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
       
        <div className="ms-5 p-2 fw-bold .fs-2 text mt-5">
          Total Price: {k}
        </div>
        
        <td>
          <button
            type="button"
            className="btn btn-light ms-5 p-2 fw-bold .fs-2 text" onClick={() => {
              const emailId = products.map((data, dataIndex) => data.email);
              console.log(emailId+"jjjj")
              deleteDatabs(emailId)
             
              openPop();
            }}>
            CheckOut
          </button>
        </td>
      </div>
    </>
  );
}

                 
                 