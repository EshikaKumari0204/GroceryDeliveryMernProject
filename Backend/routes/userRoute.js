const express=require("express");
const { register, login ,isauth, logout} = require("../controller/userController");
const { isLoggedIn } = require("../middlewares/userauth");
const userRouter=express.Router();
userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.get("/is-auth",isLoggedIn,isauth)
userRouter.get("/logout",logout)

module.exports=userRouter