const express=require("express");
const { addproduct, productlist, productbyid, changeinstock } = require("../controller/ProductController");
const { upload } = require("../configs/multer");
const { isLoggedInSeller } = require("../middlewares/Auth");
const { updatecart } = require("../controller/userController");
const ProductRouter=express.Router();
ProductRouter.post("/add",upload([images]),isLoggedInSeller,addproduct)
ProductRouter.get("/allprod",productlist)
ProductRouter.get("/prodbyid",productbyid)
ProductRouter.post("/stock",changeinstock)
ProductRouter.post("/updatecart",updatecart)
module.exports={ProductRouter}
