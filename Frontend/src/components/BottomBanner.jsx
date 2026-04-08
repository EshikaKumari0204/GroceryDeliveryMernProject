import {assets,features} from "../assets/assets"
const BottomBanner=()=>{
  return (<div className=" mt-24 relative ">
      <img src={assets.bottom_banner_image} alt="bottombanner"  className="hidden md:block w-full h-100" />
    <img src={assets.bottom_banner_image_sm} alt="bottombanner"  className="block md:hidden h-200 w-full"/>
    <div className="flex flex-col absolute inset-0 pr-5 items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24 ">
     <div> <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-6">Why we are the Best</h1>
         {features.map((feature,index)=>(<div  key={index}className="flex gap-2  mb-1 items-center justify-center  w-full ">
         <img src={feature.icon} alt="icon" className="md:w-11 w-9" />


  <h5 className="font-bold"> {feature.title}</h5>
  <p className="text-gray-400 text-sm">{feature.description}</p>

      </div>))}
      </div></div>
    </div>
)
  
}
export default BottomBanner;