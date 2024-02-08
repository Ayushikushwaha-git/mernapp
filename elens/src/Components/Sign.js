import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./inside.css";
import { Link } from "react-router-dom";

export default function Sign() {
  let navigate=useNavigate();
  const [popup, setpopup] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [fullname, setfullname] = useState("");

  const [seller, setSeller] = useState(false);
  const [consumer, setConsumer] = useState(false);
  
  async function handleSubmit(e) {
   
  
    e.preventDefault();
   
    try {
      const response = await fetch("http://localhost:8000/sign", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          fullname: fullname,
          //seller:seller,
        }),
      });
      //console.log(seller);
      const json = await response.text();
      navigate('/consumerInterface')
      console.log(json);
      //SellerOrConsumer();
      
     
    } catch (err) {
      console.log(err);
    }
  }
 /* const closePopup = (event) => {
    setpopup(false);
    if (event.target.className === "firstimg") {
      setSeller(true);
    } else {
      setConsumer(true);
    }
  };
  const navigate = useNavigate();
  const SellerOrConsumer = () => {
    if (seller) {
      alert("Seller signup");

      navigate("/sellerInterface");
    } else if (consumer) {
      alert("Consumer signup");

      navigate("/consumerInterface");
    } else {
      alert("Default signup");
    }{popup && <Second closePopup={closePopup} />}
  };*/
  return (
    <>
      
      <div className="container-login">
        <div className="col2">
          <div className="loginContain">
            <form onSubmit={handleSubmit}>
              <div className="upperbox">
                <h2>OneHandToAnother</h2>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Full Name
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Full Name"
                    aria-label="fullname"
                    value={fullname}
                    onChange={(e) => {
                      setfullname(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Email
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Emailid"
                    aria-label="Email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Password
                  </span>
                  <input
                    type="Password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Confirm Password
                  </span>
                  <input
                    type="Password"
                    className="form-control"
                    placeholder="Confirm Password"
                    aria-label="Confirm Password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                </div>

                <div className="d-grid gap-2">
                  <button
                    className="btn btn-sign btn-success"
                    
                  >
                    Signup
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="inline2">
          <h4>Welcome</h4>
          <h4>to OneHandToAnother</h4>

          <h6 className="lastLine">
            Already have an acount?<Link to="/login">signin</Link>
          </h6>
        </div>
      </div>
    </>
  );
}
