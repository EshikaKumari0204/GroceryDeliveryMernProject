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
    return res.json({success:false,message:"invalid or expired token"})
  }
}

module.exports={isLoggedInSeller}