const express=require("express");
const { addaddress, getaddress } = require("../controller/addressController");
const addressRouter=express.Router();
addressRouter.post("/add",addaddress)
addressRouter.get("/get",getaddress)
module.exports={addressRouter}