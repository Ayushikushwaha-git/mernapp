// user.js
import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/MERNAPP");

const orderSchema = new mongoose.Schema({

  email:{
    type:String,
    
  },
  
 order_data:{
    type:Array,
 }
 
 

});





  const Order = mongoose.model('Order', orderSchema);
  
  export default Order;