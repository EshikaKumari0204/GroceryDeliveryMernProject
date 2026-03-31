const express=require("express");
const { updatecart } = require("../controller/CartController");
const { isLoggedIn } = require("../middlewares/userauth");
const cartRouter=express.Router();
cartRouter.post("/updatecart",isLoggedIn,updatecart)
module.exports={cartRouter}