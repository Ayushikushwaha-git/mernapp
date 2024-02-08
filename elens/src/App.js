//import logo from './e';
import "./App.css";
import Home from "./Components/Home";
import React, { useState,useEffect } from "react";
import Login from "./Components/Login";
import Sign from "./Components/Sign";
import Skin from './Components/Skin';
import Eye from './Components/Eyecare';
import Childinfection from './Components/Childinfection';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import HomeForConsumer from "./Components/HomeForConsumer";

import Cart from "./Components/Cart";
import { CartProvider } from "./Components/ContextReducer";


function App() {
  return (
    <>
    <CartProvider>
      <Router>
          <Routes> 
            <Route exact path="/" element={<Home />}/>
         <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          
          <Route path="/consumerInterface" element={<HomeForConsumer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/infectionmedicine" element={<Childinfection />} />
          <Route path="/skinmedicine" element={<Skin />} />
          <Route path="/eyemedicine" element={<Eye/>} />
        </Routes> 
      </Router>
      </CartProvider>
    </>
  );
}

export default App;
