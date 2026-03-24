import {useState,useEffect} from 'react'
import { dummyAddress, dummyOrders } from '../assets/assets'
const Order = () => {
  const [orders,setorders]=useState([]);
  useEffect(()=>{
    setorders(dummyOrders)
  })
  return (
    <div className="flex px-6 md:px-16 lg:px-24 mt-5 flex flex-col w-full ">
      <h1 className="text-3xl mb-3">My Orders</h1>
      <div class="flex flex-col gap-4 w-full" >
        {orders.map((prod,index)=>(<div className="flex gap-4 w-full">
        <div class="flex flex-col  text-gray-300 justify-between px-3 py-3 border-gray-300 border rounded-md w-full">
          <div class="flex justify-between  text-sm"><p>Order Id : {prod._id}</p>
          <p>Payment : {prod.paymentType}</p>
          <p>Total Amount : ₹{prod.amount}</p></div>
           <div>{prod.items.map((item,index)=>(<div className='flex gap-4  justify-between items-center'>
       <div class="flex items-center justify-center gap-2"> <img src={item.product.image[0]} alt="" className="h-20 w-20" />
        <div className="flex-col gap-0.5">
          <p className="text-gray-700">{item.product.name}</p>
          <p  class="text-sm">Category:{item.product.category}</p></div>
        </div>
         <div class="text-sm text-amber-400">
          <p>Quantity:{item.quantity}</p>
          <p>Status:{prod.status}</p>
          <p>Date:{new Date(prod.createdAt).toLocaleString()}</p>
        </div>
        <div class="text-sm text-amber-400">
          <p>Amount: ₹{item.product. offerPrice*item.quantity}</p>
        </div>
        </div>))}</div>
        </div>
       
      </div>))}
      </div>
    </div>
  )
}

export default Order


