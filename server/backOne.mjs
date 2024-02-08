import express from 'express';
import User from './userModel.mjs';
import SkinPro from './SkinModel.mjs';
import EyePro from './EyeModel.mjs';
import InfectPro from './InfectionModel.mjs';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import localStrategy from 'passport-local';
import passport from 'passport';
import expressSession from 'express-session';
import userRouter from './userModel.mjs';
import morgan from 'morgan';
import multer from 'multer';
import jwt from 'jsonwebtoken';
import Order from './OrderModel.mjs';
import checkauth from './checkAuth.mjs';
import mongoose from 'mongoose';

const app=express();
const PORT = 8000;

app.use(cors()); 
app.use(morgan('dev'));
app.use(bodyParser.json());
bodyParser.json({extended:true});

app.use((req,res,next)=>{
   res.setHeader("Acces-Control-Allow-Origin","http://localhost:3000");
   res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-type, Accept"
    );
    res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE');
   next();
})

app.options('*', (req, res) => {
   res.status(200).end();
 });

app.set("view engine","ejs");

 
app.post('/sign', async function(req,res){
   const existingUser = await User.findOne({ email: req.body.email });

   if(existingUser) {
      
      res.status(409).send("User with this email already exists");
      return;
   }
   let create = await User.create({
      email: req.body.email,
      //seller: req.body.seller,
      fullname: req.body.fullname,
      password: req.body.password,
   

   });
   res.send(create);
  
});


app.post('/login', async function(req,res){
   let email=req.body.email;
  // let existingUser = await User.findOne({ email });
   //req.session.userId = existingUser._id;
   
  
   try{
      let existingUser = await User.findOne({email});
     if(!existingUser) {
      return res.status(401).send("Login failed. User not found.");
      
     
   }
   if(req.body.password!==existingUser.password){
      return res.status(401).send("Login failed. Incorrect password.");
      
      
   }
//console.log(res.json({succes:true}));
/*const data={
   user:{
      id: existingUser._id
   }
}*/
const data = {
   user: {
       id: existingUser._id
   }
}
console.log(data)
const token = jwt.sign(
  data, 'ayushikushwaha', {
   expiresIn: "3d",
});
return res.json({
   success: true,
   /*user: {
      seller: existingUser.seller, // Include the seller information
   },*/
   token: token,
});
   }
   catch(error){
      console.error(error);
      return res.status(500).send("Internal Server Error");

   }

   
   
  
});

app.get('/getSkinPro', async(req,res)=>{
  const skin=await SkinPro.find({});
  //console.log(skin)
  res.send({status:"ok",data:skin});
    

})
app.get('/getEyePro', async(req,res)=>{
   const skin=await EyePro.find({});
   //console.log(skin)
   res.send({status:"ok",data:skin});
     
 
 })
 app.get('/getInfectPro', async(req,res)=>{
   const skin=await InfectPro.find({});
   //console.log(skin)
   res.send({status:"ok",data:skin});
     
 
 })
 app.get('/getCartData', async(req,res)=>{
   const skin=await Order.find({});
   //console.log(skin)
   res.send({status:"ok",data:skin});
     
 
 })
 app.post('/getuser', checkauth, async (req, res) => {
   try {
       const userId = req.user.id;
       const user = await User.findById(userId).select("-password") // -password will not pick password from db.
       res.send(user)
   } catch (error) {
       console.error(error.message)
       res.send("Server Error")

   }
})
app.post('/deleteData', async (req, res) => {
   const orderId = req.body.orderid; // Assuming you send the orderId along with proId
   //console.log(req)
    const proId = req.body.proId;
   
   try {
      const order = await Order.findById(orderId);
      console.log(order)
      order.order_data = order.order_data.filter(item => item[0].id !== proId);

      // Save the updated order
      await order.save();

   
       //const user = await User.findById(userId).select("-password") // -password will not pick password from db.
       console.log("Deleted successfully"); 
       res.send({status:"Ok",data:"DELETED"})
   } catch (error) {
       console.error(error.message)
       res.send("Server Error")

   }
})
app.post('/deleteDatabs', async (req, res) => {
   const userEmail = req.body.orderid; // Assuming you send the orderId along with proId
   console.log(req)
   
  // userData = userData.filter(user => user.email !== userEmail);
   try {
      //const order = await Order.findById(orderId);
      //console.log(order)
     // order.order_data = [];
     await Order.deleteMany({ email: userEmail });
      // Save the updated order
     // await order.save();

   
       //const user = await User.findById(userId).select("-password") // -password will not pick password from db.
       console.log("Deleted successfully"); 
       res.send({status:"Ok",data:"DELETED"})
   } catch (error) {
       console.error(error.message)
       res.send("Server Error")

   }
})
/*app.post('/product', async function(req,res){
   
   
    let creatte=await Product.create({
     title:req.body.title,
     description:req.body.title,
     price:req.body.title,
     user:req.body.title,
     image:{
      url: 'kkhjgjgkh' ,
     
     }
    })
 res.send(creatte)*/
/* let user=await User.findOne({_id:"659530beda392ab35cd3354e"});
 user.product.push(creatte._id);
 await user.save(); 
 res.send("done");*/
app.post('/orderData',async(req,res)=>{
   let data=req.body.order_data;
   //console.log(req.body.email+"gyhghg")
  // await data.splice(0,0,{Order_})
  let emailId=await Order.findOne({'email':req.body.email})
  console.log(emailId+"khkh")
if(emailId==null){
   try{
      await Order.create({
         email:req.body.email,
         order_data:[data]
      }).then(()=>{
         res.json({success:true})

      })

   }catch(error){
      console.log(error.message)
      res.send("Server error",error.message);
   }
  }else{
   try{
      await Order.findOneAndUpdate({email:req.body.email},
         {
            $push:{order_data:data}
         }).then(()=>{
            res.json({success:true})
         })

   }catch(error){
      res.send("Server error",error.message);
   }
  }
})



 



 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
