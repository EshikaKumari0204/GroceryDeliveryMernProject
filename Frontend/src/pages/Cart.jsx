import {useState,useEffect,useContext} from 'react'
import { assets } from '../assets/assets'
import { Appcontext } from '../context/Appcontext'
const Cart = () => {
    const [address, setAddress] = useState({"street":"Bajrang Chowk","city":"Bgs","state":"Bihar","country":"India"})
    const [showAddress, setShowAddress] = useState(false)
    const [selectedAddress, setselectedAddress] = useState(false)
    const {navigate,productitems,cartitems,setcartitems,totalcartitems,totalpriceofcart,removetocart}=useContext(Appcontext)
    const [cartarr,setcartarr]=useState([])
    const [paymentoption,setpaymentoption]=useState(null)
    const getcartitems=()=>{
         const temparr=[]
      for(const item in cartitems){
        const product=productitems.find((prod)=>prod._id==item)
        product.quantity=cartitems[item]
        temparr.push(product)
      }
      setcartarr(temparr)
    }
    useEffect(()=>{
        if(productitems.length>0 && cartitems) getcartitems()
    },[cartitems])
    return (
        <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-amber-600">{totalcartitems()} Items</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {cartarr.map((product, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                        <div className="flex items-center md:gap-6 gap-3">
                            <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
                                <img className="max-w-full h-full object-cover" src={`http://localhost:4000${product.image}`} alt={product.name} />
                            </div>
                            <div>
                                <p className="hidden md:block font-semibold">{product.name}</p>
                                <div className="font-normal text-gray-500/70">
                                    
                                    <div className='flex items-center'>
                                        <p>Qty:</p>
                                        <select className='outline-none' value={product.quantity}>
                                            {Array(product.quantity).fill('').map((_, index) => (
                                                <option key={index} >{index + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center">₹{product.offerPrice * product.quantity}</p>
                        <button className="cursor-pointer mx-auto">
                            <img src={assets. remove_icon} alt="removeprod" onClick={()=>removetocart(product._id)} />
                        </button>
                    </div>)
                )}

                <button className="group cursor-pointer flex items-center mt-8 gap-2 text-primary font-medium" onClick={()=>navigate("/products")}>
                    <img src={assets.arrow_right_icon_colored} alt="" />
                    Continue Shopping
                </button>

            </div>

            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-gray-500"> {`${address.street},${address.city},${address.state},${address.country}`}</p>
                        <button onClick={() => setShowAddress(!showAddress)} className="text-amber-600 hover:underline cursor-pointer">
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                                <p onClick={() => setShowAddress(false)} className="text-gray-500 p-2 hover:bg-gray-100">
                                    {`${address.street},${address.city},${address.state},${address.country}`}
                                </p>
                                <p onClick={() => {setShowAddress(false);navigate("/address")}} className="text-amber-600 text-center cursor-pointer p-2 hover:bg-indigo-500/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>₹{totalpriceofcart()}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-amber-600">Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>₹{(totalpriceofcart()*2)/100}</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>₹{totalpriceofcart()+(totalpriceofcart()*2)/100}</span>
                    </p>
                </div>

                <button className="w-full py-3 mt-6 cursor-pointer bg-amber-500 text-white font-medium hover:bg-amber-800 transition">
                    Place Order
                </button>
            </div>
        </div>
    )
}

export default Cart

