import {useState,useContext} from 'react'
import {assets} from "../assets/assets"
import toast from "react-hot-toast"
import { Appcontext } from '../context/Appcontext'
const InputComp=(name,type,placeholder,handleChange,address,value)=>{
return(<input className=" text-gray-300 border-gray-300 border h-13 w-full rounded-sm  outline-gray-500 placeholder-opacity-200 placeholder-gray-300 px-3 py-1" name={name} type={type} placeholder={placeholder}  onChange={handleChange}  value={value}  address={address} ></input>)
}
const AddAddress = () => {
  const {axios,navigate,user} =useContext(Appcontext)
  const [address,setAddress]=useState({
    firstname:"", lastname:"", email:"",street:"",city:"",zipcode:"",state:"",country:"",phone:""
})
 const handleChange=(e)=>{
   const {name,value}=e.target;
   setAddress(prev=>({...prev,[name]:value}))
  }
  const handleSubmit=async(e)=>{
    try {
      const id=user.id
       e.preventDefault();
       const {data}=await axios.post("/api/address/add",{id,address})
       if(data.success){
        navigate("/cart")
       }
       else{
        toast.error(data.message)
      
       }
      
    } catch (error) {
      toast.error(error.message)
      
    }
   
  }
  return (
    <div class="flex items-center justify-between gap-2  px-6 md:px-16 lg:px-24 w-full mt-5" >
       <div class="flex flex-col gap-5">
     <h1 className="text-3xl">Add Shipping <span className="text-amber-600">Address</span></h1>
     <div>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div class="flex gap-3">
          <InputComp name="firstname" type="text" placeholder="First Name" handleChange={handleChange} address={address} value={address.firstname} />
          <InputComp name="lastname" type="text" placeholder="Last Name"  handleChange={handleChange}   address={address} value={address.lastname} />
        </div>
        <InputComp name="email" type="email" placeholder="email" handleChange={handleChange}  address={address} value={address.email} />
        <InputComp name="street" type="text" placeholder="street" handleChange={handleChange}  address={address} value={address.street} />
         <div class="flex gap-3">
          <InputComp name="city" type="text" placeholder="city" handleChange={handleChange}  address={address} value={address.city} />
          <InputComp name="zipcode" type="text" placeholder="zipcode" handleChange={handleChange}  address={address} value={address.zipcode} />
        </div>
         <div class="flex gap-3">
          <InputComp name="state" type="text" placeholder="state" handleChange={handleChange}  address={address} value={address.state} />
          <InputComp name="country" type="text" placeholder="country" handleChange={handleChange}  address={address} value={address.country} />
        </div>
          <InputComp name="phone" type="text" placeholder="phone" handleChange={handleChange}  address={address} value={address.phone} />
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
