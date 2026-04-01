import  mongoose from "mongoose"
import Usermodel from "./Usermodel.js"
import ProductModel  from "./ProductModel.js"
import AddressModel from "./AddressModel.js"
const OrderSchema=new mongoose.Schema({
  userid:{type:String,required:true,ref:Usermodel},
  items:[{
  product:{type:String,required:true,ref:ProductModel},
  quantity:{type:Number,required:true}
  }],
  amount:{type:String,required:true},
  address:{type:String,required:true,ref:AddressModel},
  status:{type:String,default:"Order Placed"},
  paymentType:{type:String,required:true},
  isPaid:{type:Boolean,required:true,default:false}
})
 const orderModel =mongoose.models.order||mongoose.model("order",OrderSchema)
 export default orderModel