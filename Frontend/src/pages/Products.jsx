import {useContext,useState,useEffect} from "react"
import { Appcontext } from '../context/Appcontext'
import Product from "../components/Product"
import { dummyProducts } from "../assets/assets"
const Products = () => {
  const {searchquery,productitems}=useContext(Appcontext)
  const [filterProducts,setfilterProducts]=useState([]);
  useEffect(()=>{
     if(searchquery.length>0){
    setfilterProducts(productitems.filter((product)=>product.name.toLowerCase().includes(searchquery.toLowerCase())))
    }
    else{
    setfilterProducts(productitems)
    }
  },[productitems,searchquery])
  console.log(filterProducts)
  return (
    <div className="w-screen mx-4 flex-col items-center   my-4  text-center px-6 md:px-16 xl:px-24 ">
      <h1 className=' mb-6   uppercase  text-lg sm:text-3xl  md:text-left mt-6  '>All Products</h1>
       <div className="flex flex-wrap gap-2  justify-center md:justify-start  ">
      {  filterProducts.filter((product)=>product.inStock).map((product,index)=>(<Product product={product} key={index} ></Product>))}
    </div></div>
  )
}
export default Products;

