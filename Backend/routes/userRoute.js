import express from "express"
import { register, login ,isauth, logout} from"../controller/userController.js"
import  isLoggedIn  from "../middlewares/userauth.js"
const userRouter=express.Router();
userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.get("/is-auth",isLoggedIn,isauth)
userRouter.get("/logout",logout)

export default userRouter