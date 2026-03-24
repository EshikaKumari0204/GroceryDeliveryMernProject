import {useState} from 'react'
import {assets} from "../assets/assets"
const InputComp=(name,type,placeholder,handleChange,address)=>{
return(<input className=" text-gray-300 border-gray-300 border h-13 w-full rounded-sm  outline-gray-500 placeholder-opacity-200 placeholder-gray-300 px-3 py-1" name={name} type={type} placeholder={placeholder}  onChange={handleChange}   ></input>)
}
const AddAddress = () => {
  const [address,setAddress]=useState({
    firstname:"", lastname:"", email:"",street:"",city:"",zipcode:"",state:"",country:"",phone:""
})
 const handleChange=(e)=>{
   const {name,value}=e.target;
   setAddress(prev=>({...prev,[name]:value}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div class="flex items-center justify-between gap-2  px-6 md:px-16 lg:px-24 w-full mt-5" >
       <div class="flex flex-col gap-5">
     <h1 className="text-3xl">Add Shipping <span className="text-amber-600">Address</span></h1>
     <div>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div class="flex gap-3">
          <InputComp name="firstname" type="text" placeholder="First Name" handleChange={handleChange}  address={address}/>
          <InputComp name="lastname" type="text" placeholder="Last Name"  handleChange={handleChange}   address={address}/>
        </div>
        <InputComp/>
        <InputComp/>
         <div class="flex gap-3">
          <InputComp/>
          <InputComp/>
        </div>
         <div class="flex gap-3">
          <InputComp/>
          <InputComp/>
        </div>
          <InputComp/>
          <input type="submit" value="SAVE ADDRESS" className="px-3 py-2 bg-amber-600 text-white "/>
        
      </form>
     </div>
    
    </div>
    <div class="flex justify-start items-center py-4 ">
      <img src={assets.add_address_iamge} alt="" class="h-80 w-90"/>
    </div>
    </div>
   
  )
}

export default AddAddress
