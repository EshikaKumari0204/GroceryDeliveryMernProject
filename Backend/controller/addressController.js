import AddressModel from "../models/AddressModel.js"
export const addaddress=async(req,res)=>{
  try{
 const {userid,address}=req.bodyl
 const newaddress=await AddressModel.create({...address,userid})
 return res.json({success:true,message:"address added successfully"})
  }
  catch(err){
     return res.json({success:false,message:err.message})
  
  }
 
}
export const getaddress=async(req,res)=>{
  try {
   const {userid} =req.body;
   const addresses=await AddressModel.find({userid})
   return res.json({success:true,addresses})
  } catch (error) {
     return res.json({success:false,message:err.message})
  }
}
