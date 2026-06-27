import Usermodel from "../models/Usermodel.js"
export const updatecart=async(req,res)=>{
  try{
  const {cartitems}=req.body
 const userId=req.userId;
  const user=await Usermodel.findByIdAndUpdate(userId,{cartitems})
  return res.json({success:true,message:"cart updated successfully"})
  }
  catch(err){
    console.log(err.message)
     return res.json({success:false,message:err.message})
  }
 }
