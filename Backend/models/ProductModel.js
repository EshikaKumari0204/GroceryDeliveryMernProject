const mongoose=require("mongoose")
const ProductSchema=new mongoose.Schema({
  name:{type:String,required:true},
  category:{type:String,required:true},
  offerPrice:{type:Number,required:true},
  price:{type:Number,required:true},
  description:{type:Array,required:true},
  image:{type:Array,required:true},
  inStock:{type: Boolean,default:true},

})
module.exports=mongoose.model("prod",ProductSchema)