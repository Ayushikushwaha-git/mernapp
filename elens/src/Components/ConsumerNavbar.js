import React,{useState,useEffect}from 'react';
import {Link} from "react-router-dom";
import Second from './Addedpop.js';
import Pro from './Pro.js';

export default function ConsumerNavbar() {
   /* const[addedpro,setaddedpro]=useState(false);


    const openPopup = () => {
        setaddedpro(true);
       
    
      };
      const closePop = () => {
        setaddedpro(false);
       setItem(true);
    
      };
      let initItem;
 
  if (localStorage.getItem("Item") === null) {
    initItem = [];
  }
  else {
    initItem = JSON.parse(localStorage.getItem("Item"));
  }

      const AddTheItem=(title,desc,price)=>{
        console.log("I am adding this Item", title, desc,price)
        let sno;
        if (Item.length === 0) {
          sno = 0;
        }
        else {
          sno = Item[Item.length - 1].sno + 1;
        }
        console.log(sno)
            const myProduct = {
          sno: sno,
          title: title,
          desc: desc,
          price:price,
      }
      setItem((Item) => [
        ...Item,
        myProduct,
      ]);
    }
      const [Item, setItem] = useState(initItem);
     
     useEffect(() => {
       localStorage.setItem("Item", JSON.stringify(Item));
     }, [Item])
    */
    
  return (
    <div>
       <div className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
        <form className="d-flex" role="search">
            <Link to="/consumerInterface" className="navbar-brand">Home</Link>
            <Link to="/cart" className="navbar-brand">Cart</Link>
           
          </form>
        </div>
      </div>
      {/* {addedpro && <Second AddTheItem={AddTheItem} closePop={closePop} />}

      <button className='btn btn-right btn-one btn-outline-success' onClick={openPopup}>Add Item</button> */}
      
    </div>
  );
}
