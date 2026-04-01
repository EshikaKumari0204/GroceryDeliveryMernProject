import {v2 as cloudinary} from "cloudinary"
const connectcloudinary=async()=>{
  cloudinary.config({
    cloudname:process.env.CLOUDINARY_CLOUDNAME,
    api_key:process.env.CLOUDINARY_APIKEY,
    api_secret:process.env.CLOUDINARY_APISECRET
  })
}
export default connectcloudinary;