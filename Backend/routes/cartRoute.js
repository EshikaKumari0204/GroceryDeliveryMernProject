import express from "express"
import { updatecart }  from"../controller/CartController.js"
import  isLoggedIn  from"../middlewares/userauth.js"
const cartRouter=express.Router();
cartRouter.post("/updatecart",isLoggedIn,updatecart)
export default cartRouter