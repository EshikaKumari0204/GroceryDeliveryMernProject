import express from "express"
import  isLoggedIn  from"../middlewares/userauth.js"
import  isLoggedInSeller  from"../middlewares/sellerauth.js"
import  { placeorderbyCOD, getorderbyid, getallorders, placeorderbyStripe } from"../controller/OrderController.js"
const orderRouter=express.Router();
orderRouter.post("/cod",isLoggedIn,placeorderbyCOD)
orderRouter.get("/getbyid",isLoggedIn,getorderbyid)
orderRouter.get("/getseller", isLoggedInSeller,getallorders)
orderRouter.post("/stripe", isLoggedInSeller,placeorderbyStripe)
export default orderRouter