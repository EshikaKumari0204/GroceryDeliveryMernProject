import {useContext,useState,useEffect} from "react"
import { Appcontext } from '../context/Appcontext'
import Product from "../components/Product"
const Products = () => {
  const {productitems,searchquery}=useContext(Appcontext)
  const [filterproducts,setfilterproducts]=useState([]);
  useEffect(()=>{
    if(searchquery.length>0){
    setfilterproducts(productitems.filter((product)=>product.name.toLowerCase().includes(searchquery.toLowerCase())))
    }
    else{
    setfilterproducts(productitems)
    }
  },[productitems,searchquery])
  return (
    <div className="w-full mx-4 flex-col items-center justify-center my-4">
      <h1 className='text-3xl mb-6 mt-4 px-20 uppercase'>All Products</h1>
       <div className="flex flex-wrap gap-2 items-center justify-center w-full">
      {  filterproducts.filter((product)=>product.instock).map((product)=>(<Product product={product}  ></Product>))}
    </div></div>
  )
}
export default Products

