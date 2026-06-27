import { useState, useEffect,useContext } from 'react'
import { dummyOrders } from '../assets/assets'
import { Appcontext } from '../context/Appcontext'
import {toast} from "react-hot-toast"
const Order = () => {
  const [orders, setOrders] = useState([])
  const {axios,user}=useContext(Appcontext)
  const getOwnOrders=async()=>{
    try {
    const {data}=await axios.get("/api/order/getbyid")
    console.log(data)
    if(data.success){
      setOrders(data.orders)
       console.log(orders)
    }
   
    else {
      toast.error("Server Error")
    }
     } catch (error) {
       toast.error(error.message)
    }
  }
  useEffect(() => {
    if(user)
   getOwnOrders()
  }, [])
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 md:px-16 lg:px-24 py-8">
       <div className="mb-6">
       
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase">
          My Orders
        </h1>
        <div className="w-12 h-1 bg-amber-500 rounded-full mt-2" />
      </div>

      <div className="flex flex-col gap-5 w-full">
        {orders.map((order) => (
          <div key={order._id} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

            {/* Order Header - stacks on mobile */}
            <div className="flex flex-col gap-2 px-4 sm:px-6 py-3 bg-gray-50 border-b border-gray-200">
              <p className="text-xs text-gray-400 font-mono truncate">
                Order ID: {order._id}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-gray-100 px-2 py-1 rounded-md text-gray-600">
                  Payment: <span className="text-gray-800 font-medium">{order.paymentType}</span>
                </span>
                <span className="bg-amber-50 text-amber-700 font-semibold px-2 py-1 rounded-md">
                  Total: ₹{order.amount}
                </span>
              </div>
            </div>

            {/* Order Items */}
            <div className="divide-y divide-gray-100">
              {order.items.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 px-4 sm:px-6 py-4">

                  {/* Top row: image + name + amount */}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.image[0]}
                      alt={item.product.name}
                      className="h-16 w-16 object-cover rounded-lg flex-shrink-0 border border-gray-100"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-medium text-sm truncate">{item.product.name}</p>
                      <p className="text-gray-400 text-xs mt-0.5">Category: {item.product.category}</p>
                    </div>
                    {/* Amount on the right */}
                    <p className="text-amber-500 font-bold text-sm flex-shrink-0">
                      ₹{item.product.offerPrice * item.quantity}
                    </p>
                  </div>

                  {/* Bottom row: qty + status + date as pills */}
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                      Qty: <span className="font-semibold text-gray-800">{item.quantity || "1"}</span>
                    </span>
                    <span className="flex items-center gap-1 bg-amber-50 text-amber-600 px-2 py-1 rounded-md font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 inline-block"></span>
                      {order.status}
                    </span>
                    <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md">
                      {new Date(order.createdAt).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
export default Order


