import { assets } from '../assets/assets';
import {Link} from "react-router-dom"
const MainBanner=()=>{
  return (
    <div className="relative ">
      <img className="hidden w-full md:block" src={assets.main_banner_bg}></img>
      <img className="md:hidden w-full " src={assets.main_banner_bg_sm}></img>
      <div className="absolute inset-0  flex flex-col justify-end lg:justify-end  items-center pb-5  lg:pb-17 lg:pl-5 md:p-8 sm:items-center sm:justify-end md:items-start md:text-left ">
        <h1 className="lg:text-5xl  text-center  p-3  md:p-2 md:text-4xl sm:text-3xl sm:w-100  text-2xl text-black ">From Farm To Your Door. Daily Groceries, Made Easy</h1>
        <div className="flex p-3 gap-2">
         <Link to="/products"><button className="bg-amber-600 p-2 rounded-md mr-2 hover:bg-amber-800">Shop Now</button></Link>  
          <Link to="/explore" className="hidden md:flex gap-2 items-center hover:bg-yellow-50 rounded-md p-2 ">
           <button className="text-black">Explore deals</button>
        <img className="w-4 transform"src={assets.black_arrow_icon} alt="arrow" />
       </Link>  
        </div>
      </div>
  </div>
  )
}
export default MainBanner;
