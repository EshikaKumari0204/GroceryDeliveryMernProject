import {assets,features} from "../assets/assets"
const BottomBanner=()=>{
  return (<div className=" mt-10 relative ">
      <img src={assets.bottom_banner_image} alt="bottombanner"  className="hidden md:block w-full h-100" />
    <img src={assets.bottom_banner_image_sm} alt="bottombanner"  className="block md:hidden h-200 w-full"/>
    <div className="flex-col absolute inset-0 pr-5 items-center md:items-end md:justify-center ">
     <div> <h1 className="text-3xl mb-3 text-amber-600 text-center md:text-right m-2">Why we are the Best</h1>
      <div className="flex-col items-center md:items-end   ">
         {features.map((feature,index)=>(<div  key={index}className="flex gap-2  mb-1 items-center justify-center  w-full ">
        <div> <img src={feature.icon} alt="icon" className="w-12 h-12" />
</div>
<div className="flex-col gap-0.5 ">
  <h5 className="font-bold"> {feature.title}</h5>
  <p className="text-gray-400 text-sm">{feature.description}</p>
</div>
      </div>))}
      </div></div>
    </div>
  </div>)
  
}
export default BottomBanner;