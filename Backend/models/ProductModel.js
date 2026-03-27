const mongoose=require("mongoose")
const ProductSchema=new mongoose.Schema({
  name:{Type:String,required:true},
  category:{Type:String,required:true},
  offerPrice:{Type:Number,required:true},
  price:{Type:Number,required:true},
  description:{Type:String,required:true},
  image:{Type:String,required:true},
  inStock:{Type:String,required:true},

})