import ProductModel from "../models/ProductModel.js"
 export const addproduct=async(req,res)=>{
  try{
  const productdata=JSON.parse(req.body.productdata)
  const images=req.files
 const imagepaths=images.map(item=>"/"+item.path.replace(/\\/g,"/"))
 
  const item=await ProductModel.create({...productdata,image:imagepaths})
 

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
     const {id,instock}=req.body;
  const product=await ProductModel.findOneAndUpdate({_id:id},{instock})
  return res.json({success:true,message:"stock updated"})}
  catch(err){
    return res.json({success:false,message:err.message})
}
}
