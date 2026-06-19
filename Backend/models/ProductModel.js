import  mongoose from "mongoose"
const ProductSchema=new mongoose.Schema({
  name:{type:String,required:true},
  category:{type:String,required:true},
  offerPrice:{type:Number,required:true},
  price:{type:Number,required:true},
  description:{type:Array,required:true},
  image:{type:Array,required:true},
  inStock:{type: Boolean,default:true},
},{timestamps:true})
 const ProductModel= mongoose.models.product||mongoose.model("product",ProductSchema)
 export default ProductModel