import Usermodel from "../models/Usermodel.js"
export const updatecart=async(req,res)=>{
  try{
  const {userid,cartitems}=req.body
  const user=await Usermodel.findOneAndUpdate({_id:userid},{$set:{cartitems}},{new:true})
  return res.json({success:true,message:"cart updated successfully"})
  }
  catch(err){
     return res.json({success:false,message:err.message})
  }
}
