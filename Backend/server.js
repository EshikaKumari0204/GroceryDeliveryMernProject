import "dotenv/config"
import express from "express"
import cookieparser from "cookie-parser"
import  cors from  "cors"
import dbconnection from "./configs/db.js";
import useRouter from "./routes/userRoute.js";
import sellerRouter from"./routes/sellerRoute.js"
import  ProductRouter  from"./routes/productRoute.js"
import {connectcloudinary} from"./configs/cloudinary.js"
import  cartRouter  from"./routes/cartRoute.js"
import  addressRouter  from"./routes/addressRoute.js"
import  orderRouter from"./routes/orderRoute.js"
const  app=express();
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
 


