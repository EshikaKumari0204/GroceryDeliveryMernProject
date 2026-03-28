const Usermodel=require("../models/Usermodel")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
 const register=async(req,res)=>{
  try{
 const {name,email,password}=req.body
  if(!email ||!name||!password){
    return res.json({success:false,message:"Empty fields"})
  }
  else{
    const user=await Usermodel.findOne({email})
    if(user){
      return res.json({success:false,message:"User already exists"})
    }
    else{
     const salt=await bcrypt.genSalt(10);
     const hashedpass=await bcrypt.hash(password,salt);
     console.log("hashedpass",hashedpass)
     const newuser=await Usermodel.create({name,email,password:hashedpass})
     console.log(newuser)
     const token=jwt.sign({id:newuser._id,email:newuser.email},process.env.JWT_SECRET,{expiresIn:"7d"}
     )
     res.cookie('token',token,{
      httpOnly:true,
      secure: process.env.ENVIRONMENT === "production",
      sameSite:process.env.ENVIRONMENT=="production"?'none':'strict',
      maxAge:24*7*60*60*1000
     })
      return res.json({success:true,user:newuser})
    }
  }
  }
  catch(err){
 console.log(err.message)
 return res.status(500).json({success:false,message:"Server error"})
  }
}
const login=async(req,res)=>{
  try{
 const {email,password}=req.body;
  const user=await Usermodel.findOne({email})
  if(!user) return res.json({success:false,message:"user not found"})
    else{
    const passcorrect=await bcrypt.compare(password,user.password)
    if(passcorrect){
       const token=jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:"7d"}
     )
     res.cookie('token',token,{
      httpOnly:true,
      secure: process.env.ENVIRONMENT === "production",
      sameSite:process.env.ENVIRONMENT=="production"?'none':'strict',
      maxAge:24*7*60*60*1000
     })
      return res.json({success:true,user})
    }
    else{
      return res.json({success:false,message:"entered password is incorrect"})
    }}

  }
  catch(err){
    console.log(err.message)
   return res.status(500).json({success:false,message:"Server error"})}
}
const isauth=async(req,res)=>{
  const id=req.id;
  const user=await Usermodel.findById(id).select('-password'); 
  console.log(user.email,user._id)
res.json({success:true,user:{email:user.email,id:user._id}})
}
//clear the cookie by cookiename 
const logout=async(req,res)=>{
  try{
 res.clearCookie('token',{
      httpOnly:true,
      secure: process.env.ENVIRONMENT === "production",
      sameSite:process.env.ENVIRONMENT=="production"?'none':'strict',
     })
     return res.json({success:true,message:"logout successful"})
  }
  catch(err){
    console.log(err.message);
    return res.json({success:false,message:"Server error"})

  }
}
const updatecart=async(req,res)=>{
 try{ const {id,cartitems}=req.body;
  const user=findByIdAndUpdate({id,{cartitems}})}
   catch(err){
    console.log(err.message);
    return res.json({success:false,message:"Server error"})
  }
}
module.exports={register,login,isauth,logout,updatecart}