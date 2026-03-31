const mongoose=require("mongoose")
const ProductSchema=new mongoose.Schema({
  name:{type:String,required:true},
  category:{type:Array,required:true},
  offerPrice:{type:Number,required:true},
  price:{type:Number,required:true},
  description:{type:Array,required:true},
  image:{type:Array,required:true},
  inStock:{type: Boolean,default:true},

},{timestamps:True})
module.exports=mongoose.models.prod||mongoose.model("product",ProductSchema)