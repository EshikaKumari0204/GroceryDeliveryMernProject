import UserModel from "../models/Usermodel.js"
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
    const user=await UserModel.findOne({email})
 
    if(user){
      return res.json({success:false,message:"User already exists"})
    }
   
     const salt=await bcrypt.genSalt(10);
     const hashedpass=await bcrypt.hash(password,salt);
     const newuser=await UserModel.create({name,email,password:hashedpass})
     const token=jwt.sign({id:newuser._id},process.env.JWT_SECRET,{expiresIn:"7d"}
     )
     res.cookie('token',token,{
      httpOnly:true,
      secure: process.env.ENVIRONMENT === "production",
      sameSite:process.env.ENVIRONMENT=="production"?'none':'strict',
      maxAge:7*24*60*60*1000
     })
      return res.json({success:true,user:{email:newuser.email,name:newuser.name}})
    }
  }
  
  catch(err){
 console.log(err.message)
 return res.status(500).json({success:false,message:err.message})
  }
}
 export const login=async(req,res)=>{
  try{
 const {email,password}=req.body;

   if(!email ||!password){
    return res.json({success:false,message:"Empty fields"})
  }
  const user=await UserModel.findOne({email})
  if(!user) return res.json({success:false,message:"invalid credentials"})
    
    const passcorrect=await bcrypt.compare(password,user.password)
    if(passcorrect){
       const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"} )
     res.cookie('token',token,{
      httpOnly:true,
      secure: process.env.ENVIRONMENT === "production",
      sameSite:process.env.ENVIRONMENT=="production"?'none':'strict',
      maxAge:24*7*60*60*1000})
      return res.json({success:true,user:{email:user.email,name:user.name}}) }
      return res.json({success:false,message:"invalid credentials"})
    
  }
  catch(err){
   console.log(err.message)
   return res.json({success:false,message:err.message})}
}
 export const isauth=async(req,res)=>{
  try {
    const userId=req.userId;
    const user=await UserModel.findById(userId).select("-password")
     return res.json({success:true,user})
  } catch (error) {
      console.log("error",error.message)
    return res.json({success:false,message:error.message})
  }
}

 export const logout=async(req,res)=>{
  try{
 res.clearCookie('token',{
      httpOnly:true,
      secure: process.env.ENVIRONMENT === "production",
      sameSite:process.env.ENVIRONMENT=="production"?'none':'strict',
     })
     return res.json({success:true,message:"logout successful"})
  }
  catch(err){
  console.log("error",err.message)
    return res.json({success:false,message:"Server error"})

  }
}
 export const updatecart=async(req,res)=>{
 try{ const {id,cartitems}=req.body;
  const user=await UserModel.findByIdAndUpdate(id,{cartitems})
    return res.json({success:true,message:"Cart updated"})
}
   catch(err){
    console.log(err.message);
    return res.json({success:false,message:"Server error"})
  }
}
