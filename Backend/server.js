require("dotenv").config();
const express=require("express");
const cookieparser=require("cookie-parser")
const cors=require("cors");
const dbconnection = require("./configs/db");
const useRouter = require("./routes/userRoute");
const sellerRouter = require("./routes/sellerRoute");
const app=express();
const originAllowed = ["http://localhost:5173"];
app.use(cors({
  origin: originAllowed,
  credentials: true
}));
dbconnection()
app.use(cookieparser());
app.use(express.json())
app.get("/",(req,res)=>{
  console.log("hello");
  res.send("server is senfind response")
})
app.use("/api/user",useRouter)
app.use("/api/seller",sellerRouter)
const port=process.env.PORT||4000
app.listen(port,()=>{
  console.log(`server is listening at port ${port}`)
})
