import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext=createContext();
const CartDispatchContext=createContext();
const reducer=(state,action)=>{
switch(action.type){
    case "ADD":
      return [...state, { id: action.id, name: action.name, price: action.price }];
    
    case "REMOVE":
        let newArr=[...state]
        newArr.splice(action.index,1)
        return newArr;
    case "DROP":
        let empArr=[];
        return empArr;
    case 'CLEAR_CART':
      return {...state,cart: []  };
    case 'UPDATE':
        const updatedCart = state.map(item => {
            if (item.id === action.id) {
                return { ...item };
              }
              return item;
            });
        return updatedCart;
    default:
        console.log("this is ok")
        return state;

}
}
export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,[])
    return(
<CartDispatchContext.Provider value={dispatch}>
    <CartStateContext.Provider value={state}>
        {children}
    </CartStateContext.Provider>
</CartDispatchContext.Provider>
    )
}
export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
/*export const useDispatchCart = () => {
    const dispatch = useContext(CartDispatchContext);
    const cart = useContext(CartStateContext);
  
    if (!dispatch) {
      throw new Error("useDispatchCart must be used within a CartProvider");
    }
  
    // Wrap the dispatch function in a promise
    const dispatchAsync = async (action) => {
      await dispatch(action);
      return Promise.resolve(cart); // Return the updated state after dispatch
    };
  
    return dispatchAsync;
  };
//export const useDispatchCart=()=>useContext(CartDispatchContext);*/