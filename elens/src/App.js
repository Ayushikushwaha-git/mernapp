//import logo from './e';
import "./App.css";
import Home from "./Components/Home";

//import Drag from "./Components/Drag";
// import Second from "./Components/Second";
//import logo from './ecart.jpg';
import React, { useState,useEffect } from "react";
import Login from "./Components/Login";
import Sign from "./Components/Sign";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import Main from "./Components/Main";
import HomeForConsumer from "./Components/HomeForConsumer";
import HomeForSeller from "./Components/HomeForSeller";
import ViewOrders from "./Components/ViewOrders";
import Premium from "./Components/Premium";
import Cart2 from "./Components/Cart2";

function App() {
  return (
    <>
      <Router>
          <Routes> 
            <Route exact path="/" element={<Home />}/>
         <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/sellerInterface" element={<HomeForSeller />} />
          <Route path="/vieworders" element={<ViewOrders />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/consumerInterface" element={<HomeForConsumer />} />
          <Route path="/cart" element={<Cart2 />} />
        </Routes> 
      </Router>
    </>
  );
}

export default App;
