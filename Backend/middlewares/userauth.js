const jwt=require("jsonwebtoken")
const isLoggedIn=async(req,res,next)=>{
  try{
 const token=req.cookies.token;
 if(!token){
  return res.json({success:false,message:"No token found"})
 }
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

module.exports={isLoggedIn}