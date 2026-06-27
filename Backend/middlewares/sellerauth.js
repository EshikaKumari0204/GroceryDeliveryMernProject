import jwt from "jsonwebtoken"
const isLoggedInSeller=async(req,res,next)=>{
  try{
 const {SellerToken}=req.cookies;
  if(!SellerToken) return res.json({success:false,message:"token not found"} )
  const decode=jwt.verify(SellerToken,process.env.JWT_SECRET)
  const email=decode.email;
  if(email!==process.env.SELLER_EMAIL) return res.json({success:false,message:"invalid Seller credentials"} )
  next();
  }
   catch(err){
     console.log(err.message)
    return res.json({success:false,message:"Invalid or expired token"})
  }
}
export default isLoggedInSeller