const { SellerLogout, sellerLogin,isauth } = require("../controller/sellerController")
const express=require("express");
const { isLoggedInSeller } = require("../middlewares/Auth");
const sellerRouter=express.Router();
sellerRouter.get("/logout",SellerLogout)
  sellerRouter.post("/login",sellerLogin)
sellerRouter.get("/is-auth",isLoggedInSeller,isauth)
module.exports =sellerRouter