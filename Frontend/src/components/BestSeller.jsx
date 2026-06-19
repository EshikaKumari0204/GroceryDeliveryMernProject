import { dummyProducts } from "../assets/assets";
import {useContext} from "react"
import Product from "../components/Product";
import { Appcontext } from "../context/Appcontext";
const BestSeller=()=>{
//  const {productitems}=useContext(Appcontext)
const productitems=dummyProducts
  return (
    <div className="flex flex-col gap-2 items-start justify-center mt-6 px-4">
      <h1 className="text-2xl my-8">Best Sellers</h1>
    <div className="flex gap-5 flex-wrap items-center justify-center md:justify-start  mx-auto">{productitems.filter((product)=>product.inStock).slice(0,5).map((product,index)=>(<Product key={index} product={product} >
      </Product>))}</div>
    </div>)}
export default BestSeller;