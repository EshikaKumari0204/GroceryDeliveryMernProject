import {v2 as cloudinary} from "cloudinary"
const connectcloudinary=async()=>{
  cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUDNAME,
    api_key:process.env.CLOUDINARY_APIKEY,
    api_secret:process.env.CLOUDINARY_APISECRET
  })
}
console.log("clodinary configured")
export {connectcloudinary,cloudinary}
