

//get the orders by userid
//get the userid from req body , and find all orders with that id with cod and status paid .return res with the orders you got 
//3.get all orders from user  -

const AddressModel = require("../models/AddressModel");
const OrderModel = require("../models/OrderModel");
const ProductModel = require("../models/ProductModel");

 //make three routes for cod,user,seller for three apis
 const placeorderbyCOD=async(req,res)=>{
  try{
 const {userid,items,address}=req.body;
  const {items.length==0 || !address} return res.json({success:false,message:"empty fields"})
  const amount=items.reduce(async(acc,item)=>{
   const prod=await ProductModel.find({item.product})
   return await (acc)+item.quantity*prod.offerPrice

  },0)
  //adding tax
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
 const getorderbyid=async(req,res)=>{
  try {
    const {userid}=req.id
    const orders=OrderModel.find({userid,$or:[{paymentType:"COD",isPaid:True}]}).populate("items.product address ").sort({createdAt:-1})
    return res.json({success:true,orders})
  } catch (err) {
    return res.json({success:false,message:err.message})
  }
 }
 const getallorders=async(req,res)=>{
  try {
    
    const orders=OrderModel.find({$or:[{paymentType:"COD",isPaid:True}]}).populate("items.product address ").sort({createdAt:-1})
    return res.json({success:true,orders})
  } catch (err) {
    return res.json({success:false,message:err.message})
  }
 }
 module.exports={placeorderbyCOD,getorderbyid,getallorders}