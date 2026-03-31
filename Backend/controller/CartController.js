const Usermodel = require("../models/Usermodel")
const updatecart=async(req,res)=>{
  try{
  const {userid,cartitems}=req.body
  const user=Usermodel.find(userid,{cartitems})
  return res.json({success:true,message:"cart updated successfully"})
  }
  catch(err){
     return res.json({success:false,message:err.message})
  }
}
module.exports={updatecart}