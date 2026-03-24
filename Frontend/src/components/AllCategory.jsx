import {useContext} from "react"
import {useParams} from "react-router-dom"
import { Appcontext } from "../context/Appcontext";
import Product from "./Product";
const AllCategory = () => {
  //get the category from url
  const params=useParams();
  const {productitems}=useContext(Appcontext)
  
  return (
    <div className="flex-col mt-4  px-6 md:px-16 lg:px-24 ">
      <h1 className="text-3xl mb-6 mt-4 px-20 uppercase">{params.category}</h1>
      <div className="flex items-center justify-center gap-5">
        {productitems.filter((product)=>product.inStock && product.category.toLowerCase()==params.category).map((product)=>(<Product product={product}></Product>))}
      </div>
    </div>
  )
}
export default AllCategory 
