import AddressModel from "../models/AddressModel.js"
export const addaddress=async(req,res)=>{
  try{
 const {id,address}=req.body
 console.log(req.body)
 const newaddress=await AddressModel.create({...address,userid:id})
 console.log(newaddress,"naya address")
 return res.json({success:true,message:"address added successfully"})
  }
  catch(err){
     return res.json({success:false,message:err.message})
  
  }
 
}
export const getaddress=async(req,res)=>{
  try {
   const {userid} =req.user;
   
   console.log(req.body,"ye bheja ")
   const addresses=await AddressModel.find({userid})
   console.log(addresses,"ye mila")
   return res.json({success:true,addresses})
  } catch (error) {
     return res.json({success:false,message:error.message})
  }
}
