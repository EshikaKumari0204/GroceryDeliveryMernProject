
import AddressModel from "../models/AddressModel.js";
import OrderModel from "../models/OrderModel.js";
import ProductModel from "../models/ProductModel.js";
 export const placeorderbyCOD=async(req,res)=>{
  try{
 const {userid,items,address}=req.body;
  if( items.length==0 || !address) return res.json({success:false,message:"empty fields"})
  const amount=items.reduce(async(acc,item)=>{
   const prod=await ProductModel.findOne({_id:item.product})
   return await (acc)+item.quantity*prod.offerPrice
  },0)
  amount+=Math.floor(amount*0.02)
  const neworder=OrderModel.create({
    userid,items,address,amount, paymentType:"COD"
  })
  return res.json({success:true,message:"added order successfully"})
  }
  catch(err){
 return res.json({success:false,message:err.message})
  }
 }
 export const getorderbyid=async(req,res)=>{
  try {
    const {userid}=req.id
    const orders=OrderModel.find({userid,$or:[{paymentType:"COD",isPaid:True}]}).populate("items.product address ").sort({createdAt:-1})
    return res.json({success:true,orders})
  } catch (err) {
    return res.json({success:false,message:err.message})
  }
 }
 export const getallorders=async(req,res)=>{
  try {
    const orders=OrderModel.find({$or:[{paymentType:"COD",isPaid:True}]}).populate("items.product address ").sort({createdAt:-1})
    return res.json({success:true,orders})
  } catch (err) {
    return res.json({success:false,message:err.message})
  }
 }
