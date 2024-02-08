// user.js
import mongoose from 'mongoose';


mongoose.connect("mongodb://127.0.0.1:27017/MERNAPP", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

const infectSchema = new mongoose.Schema({

name:{
    type:String,
    
  },
  img:{
    type:String,
   
   
  },

  description: {
    type: String,
    
  },
 
 
 

});





const InfectPro = mongoose.model('ChildInfection', infectSchema,'ChildInfection');

  
  export default InfectPro;