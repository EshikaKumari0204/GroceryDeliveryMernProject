const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true},
  cartitems:{type:Object,default:{}}
})
module.exports=mongoose.model("user",userschema)
