import ProductModel from "../models/ProductModel.js"
import {cloudinary} from "../configs/cloudinary.js"
 export const addproduct=async(req,res)=>{
  try{
  const productdata=JSON.parse(req.body.productdata)
  const images=req.files
  console.log(req.files,"images by backend")
  console.log(cloudinary)
  console.log("HERE IS UPLOADER",cloudinary.uploader)
  console.log("Testing config",cloudinary.config().cloud_name)
  let imageurl=await Promise.all(images.map(async(item)=>{
    let result=await cloudinary.uploader.upload(item.path,{resource_type:'auto'});
    return result.secure_url;
  }))
  console.log(imageurl,"images uploaded")
  const item=await ProductModel.create({...productdata,image:imageurl})
  console.log(item)
  return res.json({success:true,message:"item added"})
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
    return res.json({success:false,message:err.message})
  }
}
 export const productbyid=async(req,res)=>{
  try{
    const {id}=req.id;
  const product=await ProductModel.findById(id)
   return res.json({success:true,product})}
  catch(err){
    return res.json({success:false,message:err.message})
  }
  
}
 export const changeinstock=async(req,res)=>{
  try{
     const {id,inStock}=req.body;
  const product=await ProductModel.findByIdandUpdate(id,{inStock})
  return res.json({success:true,message:"stock updated"})}
  catch(err){
    return res.json({success:false,message:err.message})
}
}
