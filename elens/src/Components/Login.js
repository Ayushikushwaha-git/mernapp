import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./inside.css";
import SellerInterface from './HomeForSeller';
import ConsumerInterface from './HomeForConsumer';
import {Link} from "react-router-dom";

export default function Login() {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  let navigate =useNavigate();
  const [role, setRole] = useState(false);
 
  //const [loggedIn, setLoggedIn] = useState(false);
  
  async function handleSubmit(e){
   e.preventDefault();
   try{
  
    const response= await fetch("http://localhost:8000/login",{
      method:'POST',
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Content-type":"application/json"
      },
      body:JSON.stringify({email:email,password:password}),
      
    });
    const json=await response.json();
   
    console.log(json)
    if(!json.success){
      alert("Enter valid credentials")
    }
    if(json.success){
      if (json.user && json.user.seller !== undefined) {
     if(json.user && json.user.seller){
      navigate('/sellerInterface');
     }else{
      navigate('/consumerInterface')
     }}
      
    }
   /* 
   console.log("json.role")
    setRole(json.role);
    setLoggedIn(true);
    if (response.ok) {
      const data = await response.json();

      // Assuming the server response includes the user's role
      if (data.success) {
       
      } else {
        // Handle unsuccessful login
        alert('Login failed. Please check your credentials.')
      }
    }*/
    
    
   
       
       
     }
    catch (err) {
      console.log(err);
    } 
    
  }
 
  
  return (
    
    <>
      <div className="container-login">
        <div className="inline1">
        <h4 >Hello!</h4>  
        <h4>It's good to</h4> 
        <h4>see you again</h4> 
        <h6 className="lastLine">Don't have an acount?<Link to="/sign">signup?</Link></h6> 
        </div>
      
        <div className="col1">
          <div className="loginContain">
            <form onSubmit={handleSubmit}>
            <div className="upperbox">
            <h2>OneHandToAnother</h2>
             
        <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Email
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Emailid and username"
                  aria-label="Emailid"
                 value={email}
                 onChange={e=>{setemail(e.target.value)}}
                />
              </div>
             

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Password
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  value={password}
                  onChange={e=>{setpassword(e.target.value)}}
                />
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-success">
                  Signin 
                </button>
              </div>
              
            </div>
            </form>
            <h6 className="forget">Forget the Password?</h6>
          </div>
        </div>
      </div>
    </>
  );
}
