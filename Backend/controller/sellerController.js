import jwt from "jsonwebtoken"
 export const sellerLogin=async(req,res)=>{
  try{ const {email,password}=req.body;
  if(!email||!password)return res.json({success:false,message:"email and passoword are must"})
    if(email!=process.env.SELLER_EMAIL && password!=process.env.SELLER_PASSWORD)  return res.json({success:true,message:"invalid credentials"})
    const token=jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"7d"}
         );
         res.cookie('SellerToken',token,{
          httpOnly:true,
          secure: process.env.ENVIRONMENT === "production",
          sameSite:process.env.ENVIRONMENT=="production"?'none':'strict',
          maxAge:24*7*60*60*1000
         })
          return res.json({success:true,message:"logged in"})}
            catch(err){
    console.log(err.message)
   return res.status(500).json({success:false,message:"Server error"})}
}
 export const isauth=async(req,res)=>{
  try{
  return res.json({success:true})
  }

 catch(err){
    console.log(err.message)
   return res.status(500).json({success:false,message:"Server error"})}
}
 export const SellerLogout=async(req,res)=>{
    try{
 res.clearCookie('SellerToken',{
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
