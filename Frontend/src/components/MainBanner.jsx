import { assets } from '../assets/assets';
import {Link} from "react-router-dom"
const MainBanner=()=>{
  return (
    <div className="relative ">
      <img className="hidden w-full md:block" src={assets.main_banner_bg}></img>
      <img className="md:hidden w-full " src={assets.main_banner_bg_sm}></img>
      <div className="absolute inset-0  flex flex-col justify-end lg:justify-end  items-center pb-5  lg:pb-17 lg:pl-5 md:p-8 sm:items-center sm:justify-end md:items-start md:text-left ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center  md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15  ">From Farm To Your Door. Daily Groceries, Made Easy</h1>
        <div className="flex items-center mt-6 font-medium">
         <Link to="/products" class="group flex items-center gap-2 px-7 md:px-9 py-3 bg-amber-600 hover:bg-amber-800 transition rounded text-white cursor-pointer">Shop Now
          <img className="md:hidden transition group-focus:translate-x-1"src={assets.white_arrow_icon} alt="arrow" />
         </Link>  
          <Link to="/explore" className="hidden group md:flex gap-2 items-center px-9 py-3 cursor-pointer  ">
           <button className="text-black">Explore deals</button>
        <img className=" transition group-focus:translate-x-1"src={assets.black_arrow_icon} alt="arrow" />
       </Link>  
        </div>
      </div>
  </div>
  )
}
export default MainBanner;
