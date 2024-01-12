import React from 'react';
import ProductsComponent from './ProductsComponent';
export default function Pro(props) {
     
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
   /* if(Array.isArray(Item) ){
      console.log("true");
    }else{
      console.log("okkk")
    }
   console.log(Item)*/
  return (
   
    <div>
       <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.Item.length===0? "No Todos to display":  
            props.Item.map((takeone)=>{
               // console.log(productItem.sno);
                return (<ProductsComponent takeone={takeone} key={takeone.sno} onDelete={props.onDelete} />   
                )
            })
              } 
            {/* {Item ? (
                    <div>
                        <strong>sno:</strong> {Item.sno}
                        <br />
                        <strong>title:</strong> {Item.title}
                    </div>
                ) : (
                    "No Todos to display"
                )} */}
            {/* { {Items.length==0? "No Todos to display":  
           ( Items.map((product)=>{
                console.log(product.sno);
                return (<Items product={product} key={product.sno}/>   
                )
            }))
              }   } */}
        </div>
    </div>
  );
}
