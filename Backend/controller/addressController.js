import AddressModel from "../models/AddressModel.js"
export const addaddress=async(req,res)=>{
  try{
 const {address}=req.body
 const userId=req.userId
 
 const newaddress=await AddressModel.create({...address,userId})

 return res.json({success:true,message:"address added successfully"})
  }
  catch(err){
    console.log(err.message)
     return res.json({success:false,message:err.message})
  
  }
}
export const getaddress=async(req,res)=>{
  try {
   const userId =req.userId;
   
   const addresses=await AddressModel.find({userId})
  
   
   return res.json({success:true,addresses})
  } catch (error) {
      console.log(err.message)
     return res.json({success:false,message:err.message})
  }
}
