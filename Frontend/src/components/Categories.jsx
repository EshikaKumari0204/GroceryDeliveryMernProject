import {categories} from "../assets/assets"
import { Appcontext } from "../context/Appcontext"
import {useContext} from "react"
const Categories=()=>{
  const {navigate}=useContext(Appcontext);
  return (
    <div className=" flex flex-col items-center md:items-start   justify-center mb-4  mt-10 px-6 md:px-16 lg:px-24 ">
    <h1 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-10">Categories</h1>
      <div className="flex gap-5 flex-wrap items-center justify-center md:justify-start "> 
    {categories.map((category,index)=>(<div key={index} style={{ backgroundColor: `${category.bgColor}`}} className=" w-40 h-40 rounded-md flex flex-col justify-center items-center gap-1 hover:scale-105 transition cursor-pointer  " onClick={()=>navigate(`products/${category.path.toLowerCase()}`)}>
   <img src={category.image} alt={category.text} className="w-20 h-20" />
   <p className="text-sm text-center">{category.text}</p>
    </div>))}
    </div>
    </div> 
  )
}
export default Categories;