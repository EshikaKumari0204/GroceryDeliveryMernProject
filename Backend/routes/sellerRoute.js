import { SellerLogout, sellerLogin,isauth } from"../controller/sellerController.js"
import express from "express"
import  isLoggedInSeller  from"../middlewares/sellerauth.js"
const sellerRouter=express.Router();
sellerRouter.get("/logout",SellerLogout)
sellerRouter.post("/login",sellerLogin)
sellerRouter.get("/is-auth",isLoggedInSeller,isauth)
export default sellerRouter