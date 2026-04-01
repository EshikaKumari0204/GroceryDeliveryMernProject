import express from "express"
import { addaddress, getaddress } from"../controller/addressController.js"
const addressRouter=express.Router();
addressRouter.post("/add",addaddress)
addressRouter.get("/get",getaddress)
export default addressRouter