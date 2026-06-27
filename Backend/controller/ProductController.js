import ProductModel from "../models/ProductModel.js"
import cloudinary from "../configs/cloudinary.js"

 export const addproduct=async(req,res)=>{
  try{
  const productdata=JSON.parse(req.body.productdata)
  
  const images=req.files
 const imagepaths=await Promise.all(images.map(async(item)=>{let result=await cloudinary.uploader.upload(item.path,{resource_type:"image"}); return result.secure_url}))
  const item=await ProductModel.create({...productdata,image:imagepaths})
  return res.json({success:true,message:"Product Added"})
  }
  catch(err){
    console.log(err)
     return res.json({success:false,message:err.message})
  }
}
 export const productlist=async(req,res)=>{
  try{const products=await ProductModel.find({})
  return res.json({success:true,products})}
 catch(err){
    console.log(err.message)
     return res.json({success:false,message:err.message})
  }
}
 export const productbyid=async(req,res)=>{
  try{
  const {id}=req.body;
  const product=await ProductModel.findById(id)
  return res.json({success:true,product})}
 catch(err){
    console.log(err)
    return res.json({success:false,message:err.message})
  }
}
 export const changeinstock=async(req,res)=>{
  try{
     const {id,inStock}=req.body;
  const product=await ProductModel.findOneAndUpdate({_id:id},{inStock})
  return res.json({success:true,message:"stock updated"})}
  catch(err){
    console.log(err.message)
    return res.json({success:false,message:err.message})
}
}
