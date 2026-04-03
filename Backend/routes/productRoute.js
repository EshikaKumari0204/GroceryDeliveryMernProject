import express from "express"
import { addproduct, productlist, productbyid, changeinstock } from"../controller/ProductController.js"
import  upload from"../configs/multer.js"
import  isLoggedInSeller from"../middlewares/sellerauth.js"
import { updatecart }from"../controller/userController.js"
const ProductRouter=express.Router();
ProductRouter.post("/add",upload.array("images",4),isLoggedInSeller,addproduct)
ProductRouter.get("/allprod",productlist)
ProductRouter.get("/prodbyid",productbyid)
ProductRouter.post("/stock",isLoggedInSeller,changeinstock)
ProductRouter.post("/updatecart",updatecart)
export default ProductRouter
