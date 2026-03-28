const cloudinary = require('cloudinary').v2;
const connectcloudinary=async()=>{
  cloudinary.config({
    cloudname:process.env.CLOUDINARY_CLOUDNAME,
    api_key:process.env.CLOUDINARY_APIKEY,
    api_secret:process.env.CLOUDINARY_APISECRET

  })
}
module.exports=connectcloudinary;