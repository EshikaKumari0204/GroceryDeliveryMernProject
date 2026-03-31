const mongoose=require("mongoose")
const Usermodel = require("./Usermodel")
const ProductModel = require("./ProductModel")
const AddressModel = require("./AddressModel")
const OrderSchema=new mongoose.Schema({
  userid:{type:String,required:true,ref:Usermodel}
  items:[{
  product:{type:String,required:true,ref:ProductModel}
  }],
  amount:{type:String,required:true},
  address:{type:String,required:true,ref:AddressModel},
  status:{type:String,default:"Order Placed"},
  paymentType:{type:String,required:true},
  isPaid={type:Boolean,required:true,default:false}

})
module.exports=mongoose.models.order||mongoose.model("order",OrderSchema)