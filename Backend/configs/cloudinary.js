import {v2 as cloudinary} from "cloudinary"
export const connectCloudinary=()=>{
  cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUDNAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
    
  })
}
console.log("clodinary configured")

 export default cloudinary
