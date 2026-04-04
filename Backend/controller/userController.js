import Usermodel from "../models/Usermodel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
  export const register=async(req,res)=>{
  try{
 const {name,email,password}=req.body
//  console.log(req.body,"req.body")
  if(!email ||!name||!password){
    return res.json({success:false,message:"Empty fields"})
  }
  else{
    const user=await Usermodel.findOne({email})
 
    if(user){
      return res.json({success:false,message:"User already exists"})
    }
   
     const salt=await bcrypt.genSalt(10);
     const hashedpass=await bcrypt.hash(password,salt);
     const newuser=await Usermodel.create({name,email,password:hashedpass})
     const token=jwt.sign({id:newuser._id},process.env.JWT_SECRET,{expiresIn:"7d"}
     )
     res.cookie('token',token,{
      httpOnly:true,
      secure: process.env.ENVIRONMENT === "production",
      sameSite:process.env.ENVIRONMENT=="production"?'none':'strict',
      maxAge:24*7*60*60*1000
     })
      return res.json({success:true,user:{email:newuser.email,name:newuser.name}})
    }
  }
  
  catch(err){
 console.log(err.message)
 return res.status(500).json({success:false,message:"Server error"})
  }
}
 export const login=async(req,res)=>{
  try{
 const {email,password}=req.body;
 console.log(req.body)
   if(!email ||!password){
    return res.json({success:false,message:"Empty fields"})
  }
  const user=await Usermodel.findOne({email})
  if(!user) return res.json({success:false,message:"invalid user or password"})
    else{
    const passcorrect=await bcrypt.compare(password,user.password)
    if(passcorrect){
       const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"} )
     res.cookie('token',token,{
      httpOnly:true,
      secure: process.env.ENVIRONMENT === "production",
      sameSite:process.env.ENVIRONMENT=="production"?'none':'strict',
      maxAge:24*7*60*60*1000})
      return res.json({success:true,user:{email:user.email,name:user.name}}) }
      return res.json({success:false,message:"invalid user or password"})
    }
  }
  catch(err){
   
   return res.json({success:false,message:err.message})}
}
 export const isauth=async(req,res)=>{
  const id=req.id;
  const user=await Usermodel.findById(id).select('-password'); 
res.json({success:true,user:{email:user.email,id:user._id}})
}
//clear the cookie by cookiename 
 export const logout=async(req,res)=>{
  try{
    console.log("logout called")
 res.clearCookie('token',{
      httpOnly:true,
      secure: process.env.ENVIRONMENT === "production",
      sameSite:process.env.ENVIRONMENT=="production"?'none':'strict',
     })
     return res.json({success:true,message:"logout successful"})
  }
  catch(err){

    return res.json({success:false,message:"Server error"})

  }
}
 export const updatecart=async(req,res)=>{
 try{ const {id,cartitems}=req.body;
  const user=findByIdAndUpdate({id,cartitems})}
   catch(err){
    console.log(err.message);
    return res.json({success:false,message:"Server error"})
  }
}
