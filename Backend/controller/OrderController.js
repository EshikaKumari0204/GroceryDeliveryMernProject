
import AddressModel from "../models/AddressModel.js";
import OrderModel from "../models/OrderModel.js";
import ProductModel from "../models/ProductModel.js";
import stripe from "stripe"
 export const placeorderbyCOD=async(req,res)=>{
  try{
 const {userId,items,address}=req.body;
 console.log(req.body)
  if( items.length==0 || !address) return res.json({success:false,message:"empty fields"})
  let amount=await items.reduce(async(acc,item)=>{
   const prod=await ProductModel.findById(item.product)
   return (await acc)+item.quantity*prod.offerPrice
  },0)
  amount=Math.floor(amount*1.02)
  const neworder=await OrderModel.create({
    userId,items,address,amount, paymentType:"COD"
  })
  console.log(neworder,"neworder")
  return res.json({success:true,message:"added order successfully"})
  }
  catch(err){
    console.log(err.message)
 return res.json({success:false,message:err.message})
  }
 }
  export const placeorderbyStripe=async(req,res)=>{
  try{
 const {userId,items,address}=req.body;
 const {origin}=req.headers
 console.log(req.body)
  if( items.length==0 || !address) return res.json({success:false,message:"empty fields"})
    let productData=[];
  let amount=await items.reduce(async(acc,item)=>{
   const prod=await ProductModel.findById(item.product)
   productData.push({name:prod.name,price:prod.offerPrice,quantity:item.quantity})
   return (await acc)+item.quantity*prod.offerPrice
  },0)
  amount=Math.floor(amount*1.02)
  const neworder=await OrderModel.create({
    userId,items,address,amount, paymentType:"Online"
  })
  console.log(neworder,"neworder")
  
  return res.json({success:true,message:"added order successfully"})
  }
  catch(err){
    console.log(err.message)
 return res.json({success:false,message:err.message})
  }
 }
 export const getorderbyid=async(req,res)=>{
  try {
    const userId=req.userId
    console.log(userId)
    const orders=await OrderModel.find({userId,$or:[{paymentType:"COD"},{isPaid:false}]}).populate("items.product address").sort({createdAt:-1})
    console.log(orders)
    return res.json({success:true,orders})
  } catch (err) {
      console.log(err.message)
    return res.json({success:false,message:err.message})
  }
 }
 export const getallorders=async(req,res)=>{
  try {
    const orders=await OrderModel.find({$or:[{paymentType:"COD"},{isPaid:false}]}).populate("items.product address").sort({createdAt:-1})
    return res.json({success:true,orders})
  } catch (err) {
    console.log(err.message)
    return res.json({success:false,message:err.message})
  }
 }
