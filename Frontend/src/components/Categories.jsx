import {categories} from "../assets/assets"
import { Appcontext } from "../context/Appcontext"
import {useContext} from "react"
const Categories=()=>{
  const {navigate}=useContext(Appcontext);
  return (
    <div className="mt-4 flex flex-col items-start px-4  justify-center mb-4  ">
    <h1 className="text-2xl my-8 ">Categories</h1>
      <div className="flex flex-wrap gap-2 md:gap-9  items-center justify-center sm:justify-start flex-wrap  mt-4 mx-auto"> 
    {categories.map((category,index)=>(<div key={index} style={{ backgroundColor: `${category.bgColor}`}} className=" w-30 h-30 rounded-md flex flex-col justify-center items-center gap-1 hover:scale-105 transition cursor-pointer  " onClick={()=>navigate(`products/${category.path.toLowerCase()}`)}>
   <img src={category.image} alt={category.text} className="w-20 h-20" />
   <p className="text-sm text-center">{category.text}</p>
    </div>))}
    </div>
    </div> 
  )
}
export default Categories;