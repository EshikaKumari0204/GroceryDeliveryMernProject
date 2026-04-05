import {useState,useContext} from "react"
import { CiShoppingCart } from "react-icons/ci";
import { Appcontext } from "../context/Appcontext";
import { assets } from "../assets/assets";
const Product = ({product}) => {
    const {addtocart,removetocart,navigate,cartitems,setcartitems}=useContext(Appcontext)
    return (
        <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full " onClick={()=>navigate(`/products/${product.category}/${product._id}`)} >
            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img className="group-hover:scale-105 transition max-w-26 md:max-w-36" src={`http://localhost:4000${product.image}`} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                           i<4 ? (
                               <img src={assets.star_icon}></img>
                            ) : (
                                <img src={assets.star_dull_icon} alt="" />
                            )
                        ))}
                    <p>(4)</p>
                </div>
                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-amber-500">
                        ₹{product.offerprice} <span className="text-gray-500/60 md:text-sm text-xs line-through">₹{product.price}</span>
                    </p>
                    <div className="text-amber-600" onClick={(e)=>{e.stopPropagation()}}>
                        {!cartitems[product._id]? (
                            <button className="flex items-center justify-center gap-1 bg-amber-500/25 border border-amber-300 md:w-20 w-16 h-8.5 rounded text-amber-600 font-medium" onClick={() =>addtocart(product._id)} >
                               <CiShoppingCart size={20}/>
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-8.5 bg-amber-500/25 rounded select-none">
                                <button onClick={() => {removetocart(product._id)}} className="cursor-pointer text-md px-2 h-full" >
                                    -
                                </button>
                                 <span className="w-5 text-center">{ cartitems[product._id]}</span>
                                <button onClick={() => {addtocart(product._id)}} className="cursor-pointer text-md px-2 h-full"   >
                                    +
                                </button>
                            </div>)}</div></div></div></div>
    );
};
export default Product;