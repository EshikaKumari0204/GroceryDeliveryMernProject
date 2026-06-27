import { assets, dummyOrders } from "../../assets/assets";
import { useState, useEffect,useContext } from "react"
import { Appcontext } from "../../context/Appcontext";
import {toast} from "react-hot-toast"
import Loading from "../Loading";
const AllOrders = () => {
  const [orders, setorders] = useState([])
  const {axios}=useContext(Appcontext)
  const [loading,setloading]=useState(false)
  const fetchorders=async()=>{
    try {
      setloading(true)
      const {data}=await axios.get("/api/order/getseller")
        setloading(false)
      if(data.success){
        setorders(data.orders)
      }
      else{
        toast.error(data.message)
      }
    
    } catch (error) {
        setloading(false)
       toast.error(error.message)
    }

  }
  useEffect(() => {
    fetchorders(dummyOrders)
  }, [])
  if(loading) return <Loading/>

  return (
    <div className="md:p-10 p-4 space-y-4 w-full min-w-0">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase">Orders</h1>
        <div className="w-12 h-1 bg-amber-500 rounded-full mt-2" />
      </div>

      {orders.map((order, index) => (
        <div key={index} className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr_1fr_1fr] lg:items-center gap-4 p-4 sm:p-5 rounded-md border border-gray-300 text-gray-800">

          {/* Items */}
          <div className="flex gap-4 items-start">
            <img className="w-10 h-10 sm:w-12 sm:h-12 object-cover opacity-60 flex-shrink-0" src={assets.box_icon} alt="boxIcon" />
            <div>
              {order.items.map((item, i) => (
                <p key={i} className="font-medium">
                  {item.product.name}
                  <span className={`text-indigo-500 ${item.quantity < 2 && "hidden"}`}> x {item.quantity}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="text-sm">
            <p className="font-medium mb-1">{order.address.firstName} {order.address.lastName}</p>
            <p className="text-gray-600">{order.address.street}, {order.address.city}, {order.address.state}, {order.address.zipcode}, {order.address.country} {order.address.phone}</p>
          </div>

          {/* Amount */}
          <p className="font-medium text-base text-black/70">${order.amount}</p>

          {/* Payment info */}
          <div className="flex flex-col text-sm">
            <p>Method: {order.paymentType}</p>
            <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
            <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
          </div>

        </div>
      ))}
    </div>
  )
}

export default AllOrders

