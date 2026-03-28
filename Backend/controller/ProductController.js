const ProductModel = require("../models/ProductModel");

const addproduct=async(req,res)=>{
  const productdata=JSON.parse(req.body.productdata)
  const images=req.files
  let imageurl=await Promise.all(images.map(async(item)=>{
    let result=await cloudinary.uploader(item.path.{resource_type:'image'});
    return result.secure_url;
  }))
  await ProductModel.create({...productdata,image})
  return res.json({success:true,message:"item added"})
}
const productlist=async(req,res)=>{
  try{const products=await ProductModel.find({})
  return res.json({success:true,products})}
  catch(err){
    return res.json({success:false,message:err.message})
  }
  
}
const productbyid=async(req,res)=>{
  try{const {id}=req.id;
  const product=await ProductModel.findById(id)
   return res.json({success:true,product})}
  catch(err){
    return res.json({success:false,message:err.message})
  }
  
}
const changeinstock=async(req,res)=>{
  const {id,inStock}=req.body;
  const product=await ProductModel.findByIdandUpdate(id,{inStock})
  return res.json({success:true,message:"stock updated"})}
  catch(err){
    return res.json({success:false,message:err.message})
  
  
}
module.exports={changeinstock,productbyid,productlist,addproduct}