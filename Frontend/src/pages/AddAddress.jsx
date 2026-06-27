import { useState, useContext ,useEffect} from 'react'
import toast from "react-hot-toast"
import { Appcontext } from '../context/Appcontext'

const InputComp = ({ name, type, placeholder, handleChange, address }) => {
  return (
    <input
      className="text-gray-800 border border-gray-200 bg-gray-50 h-12 w-full rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all duration-200"
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={address[name]}
    />
  );
};

const AddAddress = () => {
  
  const { axios, navigate, user } = useContext(Appcontext)
  const [address, setAddress] = useState({
    firstName: "", lastName: "", email: "", street: "", city: "",
    zipcode: "", state: "", country: "", phone: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    try {
      
      e.preventDefault();
      const { data } = await axios.post("/api/address/add", {  address })
      if (data.success) {
        toast.success(data.message)
        navigate("/cart")
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    if(!user) navigate("/cart")
  })

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-amber-600 uppercase tracking-widest mb-1">Checkout</p>
          <h1 className="text-3xl font-bold text-gray-900">
            Shipping <span className="text-amber-600">Address</span>
          </h1>
          <p className="text-gray-500 mt-1 text-sm">Enter the address where you'd like your order delivered.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">First Name</label>
                <InputComp name="firstName" type="text" placeholder="John" handleChange={handleChange} address={address} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Last Name</label>
                <InputComp name="lastName" type="text" placeholder="Doe" handleChange={handleChange} address={address} />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label>
              <InputComp name="email" type="email" placeholder="john@example.com" handleChange={handleChange} address={address} />
            </div>

            {/* Street */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Street Address</label>
              <InputComp name="street" type="text" placeholder="123 Main Street" handleChange={handleChange} address={address} />
            </div>

            {/* City + Zipcode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">City</label>
                <InputComp name="city" type="text" placeholder="Mumbai" handleChange={handleChange} address={address} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Zip Code</label>
                <InputComp name="zipcode" type="number" placeholder="400001" handleChange={handleChange} address={address} />
              </div>
            </div>

            {/* State + Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">State</label>
                <InputComp name="state" type="text" placeholder="Maharashtra" handleChange={handleChange} address={address} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Country</label>
                <InputComp name="country" type="text" placeholder="India" handleChange={handleChange} address={address} />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone</label>
              <InputComp name="phone" type="text" placeholder="+91 98765 43210" handleChange={handleChange} address={address} />
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 mt-2" />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white font-semibold text-sm uppercase tracking-widest rounded-lg py-3.5 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Save Address
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default AddAddress
  // useEffect(()=>{
  //   if(!user){
  //     navigate("/cart")
  //   }
  // },[])
