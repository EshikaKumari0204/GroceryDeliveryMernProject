const express=require("express");
const { isLoggedIn } = require("../middlewares/userauth");
const { isLoggedInSeller } = require("../middlewares/sellerauth");
const { placeorderbyCOD, getorderbyid, getallorders } = require("../controller/OrderController");
const orderRouter=express.Router();
orderRouter.post("/add",isLoggedIn,placeorderbyCOD)
orderRouter.get("/get",isLoggedIn,getorderbyid)
orderRouter.get("/getseller", isLoggedInSeller,getallorders)
module.exports={orderRouter}