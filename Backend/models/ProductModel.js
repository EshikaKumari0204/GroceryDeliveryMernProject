import  mongoose from "mongoose"
const ProductSchema=new mongoose.Schema({
  name:{type:String,required:true},
  category:{type:Array,required:true},
  offerprice:{type:Number,required:true},
  price:{type:Number,required:true},
  description:{type:Array,required:true},
  image:{type:Array,required:true},
  instock:{type: Boolean,default:true},

},{timeStamps:true})
 const ProductModel= mongoose.models.prod||mongoose.model("product",ProductSchema)
 export default ProductModel