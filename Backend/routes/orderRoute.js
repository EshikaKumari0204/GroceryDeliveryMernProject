import express from "express"
import  isLoggedIn  from"../middlewares/userauth.js"
import  isLoggedInSeller  from"../middlewares/sellerauth.js"
import  { placeorderbyCOD, getorderbyid, getallorders } from"../controller/OrderController.js"
const orderRouter=express.Router();
orderRouter.post("/add",isLoggedIn,placeorderbyCOD)
orderRouter.get("/get",isLoggedIn,getorderbyid)
orderRouter.get("/getseller", isLoggedInSeller,getallorders)
export default orderRouter