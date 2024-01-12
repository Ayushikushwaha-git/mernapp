import express from 'express';
import User from './userModel.mjs';
import Product from './productModel.mjs';
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
import checkauth from './checkAuth.mjs';
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
      seller: req.body.seller,
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
const token = jwt.sign({
   email: existingUser.email,
   userId: existingUser._id,
   
}, 'ayushikushwaha', {
   expiresIn: "3d",
});
return res.json({
   success: true,
   user: {
      seller: existingUser.seller, // Include the seller information
   },
   token: token,
});
   }
   catch(error){
      console.error(error);
      return res.status(500).send("Internal Server Error");

   }

   
   
  
});

/*app.post('/product', async function(req,res){
   console.log(req.file);
   
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


const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, 'uploads/')
   },
   filename: function (req, file, cb) {
     const uniqueSuffix = Date.now();
     cb(null,  uniqueSuffix+file.originalname);
   }
 })
 
 const upload = multer({ storage: storage ,limits: { fileSize: 1024 * 1024 * 5 },})
app.post('/upload-image',checkauth,upload.single("image"),async(req,res)=>{
   const imageUrl =req.file.filename;
   const userId = req.User._id;
   console.log(userId);
  try{
   //const userEmail = req.body.email;
   
  
  
  
  //console.log(userId)
   
  
   let create = await Product.create({
      title: req.body.title,
      desc: req.body.desc,
      price: req.body.price,
      image: imageUrl,
    user:userId,
    

   });
   //user.product.push(create._id);
   // await user.save();
   
   //console.log(create._id);
   //console.log(create);
  res.send(create);
  
  }
 catch(e){
res.json({status:e})
 }
  // res.send("Uploaded")
})
app.get('/work', async (req, res) => {
   /*const user_id = req.user._id
 console.log(user_id)
   const Products = await Product.find({user_id});
 
   res.status(200).json(Products)
*/
console.log(req)
 })



 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
