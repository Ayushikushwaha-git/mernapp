import React,{useState} from 'react';
import SellerNavbar from './SellerNavbar';
import Addedpayment from './Addedpayment';
export default function Premium() {
  const[addedpay,setaddedpay]=useState(false);
  let myStyle = {
    marginTop:"60px",
    textAlign: "center",
   
};
const openpay = () => {
  setaddedpay(true);
 

};
  return (
    
    <div>
        <SellerNavbar/>
        {addedpay && <Addedpayment />}
    <h1 style={myStyle}>Premium</h1>
    <h6 style={myStyle}>Get started with a LeetCode Subscription that works for you.</h6>
    <div className='onebox'>
      <h1>Monthly</h1>
      
      <h5>Down from $39/month.</h5>
<h6>Our monthly plan grants access to all premium features, the best plan for short-term subscribers.</h6>
<h1>
$35
/mo
</h1>
<button className="btn btn-primary btn-success" type="button">Subscribe</button>
    </div>
    <div className='parallerbox'>
    <h1>Yearly</h1>
     
      <h5>Down from $10.60/month.</h5>
      <h6>Our most popular plan previously sold for $299 and is now only $10.60/month.</h6>
<h1>
$10.60/month.
</h1>
<button className="btn btn-primary btn-success" type="button" onClick={openpay}>Subscribe</button>
    </div>
    </div>
  );
}
