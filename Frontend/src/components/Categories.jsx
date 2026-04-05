import {categories} from "../assets/assets"
import { Appcontext } from "../context/Appcontext"
import {useContext} from "react"
const Categories=()=>{
  const {navigate}=useContext(Appcontext);
  return (
    <div className="mt-4 flex flex-col items-start justify-center mb-4 px-6 md:px-16 lg:px-24">
    <h1 className="text-2xl ">Categories</h1>
      <div className="flex flex-wrap gap-2 md:gap-9  items-center justify-between  mt-4"> 
    {categories.map((category,index)=>(<div key={index} style={{ backgroundColor: `${category.bgColor}`}} className=" w-30 h-30 rounded-md flex flex-col justify-center items-center gap-1 hover:scale-105 transition cursor-pointer  " onClick={()=>navigate(`products/${category.path.toLowerCase()}`)}>
   <img src={category.image} alt="" className="w-20 h-20" />
   <p className="text-sm text-center">{category.text}</p>
    </div>))}
    </div>
    </div> 
  )
}
export default Categories;