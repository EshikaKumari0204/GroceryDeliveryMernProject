const jwt=require("jsonwebtoken")
const isLoggedIn=async(req,res,next)=>{
  try{
 const token=req.cookies.token;
 if(!token){
  return res.json({success:false,message:"No token found"})
 }
 console.log(token)
 const decode= jwt.verify(token,process.env.JWT_SECRET)

 const id=decode.id;
 req.id=id;
next();
  }
  catch(err){
    console.log("error",err.message)
    return res.json({success:false,message:"invalid or expired token"})
  }
}
const isLoggedInSeller=async(req,res)=>{
  try{
 const {SellerToken}=req.cookies;
  if(!SellerToken) return res.json({sucess:false,message:"token not found"} )
  const decode=jwt.verify(SellerToken,process.env.secret)
  const email=decode.email;
  if(email!=process.env.SELLER_EMAIL) return res.json({sucess:false,message:"invalid Seller credentials"} )
  next();
  }
   catch(err){
    console.log("error",err.message)
    return res.json({success:false,message:"invalid or expired token"})
  }
}
module.exports={isLoggedIn,isLoggedInSeller}