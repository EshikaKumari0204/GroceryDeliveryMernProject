import ProductModel from "../models/ProductModel.js"
 export const addproduct=async(req,res)=>{
  try{
  const productdata=JSON.parse(req.body.productdata)
  const images=req.files
 const imagepaths=images.map(item=>"/"+item.path.replace(/\\/g,"/"))
  const item=await ProductModel.create({...productdata,image:imagepaths})
  return res.json({success:true,message:"Product added"})
  }
  catch(err){
    console.log(err)
     return res.json({success:false,message:"Server error"})
  }
}
 export const productlist=async(req,res)=>{
  try{const products=await ProductModel.find({})
  return res.json({success:true,products})}
 catch(err){
    console.log(err)
     return res.json({success:false,message:"Server error"})
  }
}
 export const productbyid=async(req,res)=>{
  try{
  const {id}=req.body;
  const product=await ProductModel.findById(id)
  return res.json({success:true,product})}
 catch(err){
    console.log(err)
     return res.json({success:false,message:"Server error"})
  }
}
 export const changeinstock=async(req,res)=>{
  try{
     const {id,instock}=req.body;
  const product=await ProductModel.findOneAndUpdate({_id:id},{instock})
  return res.json({success:true,message:"stock updated"})}
  catch(err){
    console.log(err.message)
    return res.json({success:false,message:"Server Error"})
}
}
