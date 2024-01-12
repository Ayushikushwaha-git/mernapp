// user.js
import mongoose, { Mongoose } from 'mongoose';
mongoose.connect("mongodb://127.0.0.1:27017/MERNAPP");

const productSchema = new mongoose.Schema({
  
  title: {
    type: String,
   required:true,

   
  },
  desc: {
    type: String,
    required:true,
   
  },
  price:{
    type:Number,
    required:true,
  },
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
},
image: {

      type: String,
      required: true

}

});




  const Product = mongoose.model('Product', productSchema);
  
  export default Product;