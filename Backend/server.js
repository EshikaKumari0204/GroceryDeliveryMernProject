require("dotenv").config();
const express=require("express");
const cookieparser=require("cookie-parser")
const cors=require("cors");
const dbconnection = require("./configs/db");
const useRouter = require("./routes/userRoute");
const sellerRouter = require("./routes/sellerRoute");
const { ProductRouter } = require("./routes/productRoute");
const connectcloudinary = require("./configs/cloudinary");
const { cartRouter } = require("./routes/cartRoute");
const { addressRouter } = require("./routes/addressRoute");
const { orderRouter } = require("./routes/orderRoute");
const app=express();
await dbconnection()
await connectcloudinary()
const originAllowed = ["http://localhost:5173"];
app.use(cors({
  origin: originAllowed,
  credentials: true
}));
app.use(cookieparser());
app.use(express.json())
app.get("/",(req,res)=>{
  console.log("hello");
  res.send("server is senfind response")
})
app.use("/api/user",useRouter)
app.use("/api/seller",sellerRouter)
app.use("/api/product",ProductRouter)
app.use("/api/cart",cartRouter)
app.use("/api/address",addressRouter)
app.use("/api/order",orderRouter)
const port=process.env.PORT||4000

app.listen(port,()=>{
  console.log(`server is listening at port ${port}`)
})
 
 .catch((err)=>console.log(err))

