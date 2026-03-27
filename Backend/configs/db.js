const mongoose=require("mongoose")
const dbconnection=async()=>{
  try{
 const con=await mongoose.connect(`${process.env.MONGODB_URL}`);
 console.log("connected",con.connection.host)
  }
  catch(err){
    console.log(err.message)
  }
 
}
module.exports=dbconnection