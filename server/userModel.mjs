// user.js
import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/MERNAPP");

const userSchema = new mongoose.Schema({

  email:{
    type:String,
    required:true,
    unique:true,
  },
  fullname:{
    type:String,
    required:true,
   
  },

  password: {
    type: String,
    required:true,
    unique:true,
  },
 product:{
  type: Array,
 }
 
 

});





  const User = mongoose.model('User', userSchema);
  
  export default User;