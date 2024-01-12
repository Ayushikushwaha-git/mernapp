import SellerNavbar  from './SellerNavbar';
import Addedpop from './Addedpop.js';
import Pro from './Pro.js';

//import Products from './Products.js';

import React, { useState, useEffect } from 'react';
export default function HomeForSeller() {
  
  const[addedpro,setaddedpro]=useState(false);
  //const [Item, setProducts] = useState([]);

    const openPopup = () => {
        setaddedpro(true);
       
    
      };
      const closePop = () => {
        setaddedpro(false);
       //setItem(true);
    
      };
      let initItem;
 
  if (localStorage.getItem("Item") === null) {
    initItem = [];
  }
  else {
    initItem = JSON.parse(localStorage.getItem("Item"));
  }
  
  const onDelete = (one) => {
  setItem((prevItem) => {
  
    const updatedItem = prevItem.filter((e) => e !== one);
    localStorage.setItem("Item", JSON.stringify(updatedItem));
    return updatedItem;
  });
};


      const AddTheProducts=(title,desc,price,image)=>{
        //console.log("I am adding this products", title, desc,price)
        let sno;
        if (Item.length === 0) {
          sno = 0;
        }
        else {
          sno = Item[Item.length - 1].sno + 1;
        }
       // console.log(sno)
            const myProduct = {
             
          sno: sno,
          image:image,
          title: title,
          desc: desc,
          price:price,
      }
      setItem((Item) => [
        ...Item,
        myProduct
      ]);
     
    }
   const [Item, setItem] = useState(initItem);
     
     useEffect(() => {
      //console.log("Updated Item:", Item);
       localStorage.setItem("Item", JSON.stringify(Item));
     }, [Item])
     if(Array.isArray(Item) ){
      console.log("true");
    }else{
      console.log("okkk")
    } 
    
   
  return (
    <>
    <div>
      <SellerNavbar/>
      {addedpro && <Addedpop AddTheProducts={AddTheProducts} closePop={closePop} />}

<button className='btn btn-right btn-one btn-outline-success' onClick={openPopup}>Add Products</button>
       <Pro Item={Item} onDelete={onDelete}/>
      {/* <AddItem addItem={addItem} /> */}
   {/* <Pro Item={Item} onDelete={onDelete}/> */}

    </div>
    </>
   
  );
}
