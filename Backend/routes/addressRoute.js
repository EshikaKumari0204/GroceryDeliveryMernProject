import express from "express"
import isLoggedIn from "../middlewares/userauth.js";
import { addaddress, getaddress } from"../controller/addressController.js"
const addressRouter=express.Router();
addressRouter.post("/add",isLoggedIn,addaddress)
addressRouter.get("/get",isLoggedIn,getaddress)
export default addressRouter