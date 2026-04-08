import {useState,useContext, useEffect} from 'react'
import { Appcontext } from '../context/Appcontext';
import { assets } from '../assets/assets';
import {NavLink} from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import {toast} from "react-hot-toast"
const Navbar=()=>{
 const [open, setOpen] = useState(false);
 const {user,setuser,navigate,setUserLogin,searchquery,setsearchquery,totalcartitems,axios}=useContext(Appcontext);
 const logout=async()=>{
    const {data}=await axios("/api/user/logout")
    if(data.success){
    setuser(null);
    navigate("/");
    toast.success("logout successful")
    }
    else {
        toast.error("logout unsuccessful")
    }
 }
 useEffect(()=>{
if(searchquery.length>0)
navigate("/products")
 },[searchquery])
 return  (<nav className="flex items-center justify-between gap-8 px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
            <NavLink to="/" onClick={()=>setOpen(false)}>
               <img src={assets.logo} alt="company logo" />
            </NavLink>
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">All products</NavLink>
                <NavLink to="/contact">Contact</NavLink>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input onChange={(e)=>{setsearchquery(e.target.value)}} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" value={searchquery} />
                    <img src={assets.search_icon} alt="searchicon" />
                </div>
                <div className="relative cursor-pointer"  onClick={()=>navigate("/cart")}>
                  <TiShoppingCart size={24} className="text-amber-600"/>
                    <button className="absolute -top-2 -right-3 text-xs text-amber-600 border-2 rounded-full   w-4.5 h-4.5 rounded-full">{totalcartitems()}</button>
                </div>
               {!user?<button className="cursor-pointer px-8 py-2 bg-amber-600 hover:bg-amber-800 transition text-white rounded-full" onClick={()=>{setUserLogin(true)}}>
                    Login
                </button>: <div className="relative group">
                    <img className="h-8 w-8" src={assets.profile_icon} alt="profileicon"></img>
                    <ul className="hidden group-hover:block z-10 absolute top-8 right-0 bg-white shadow-md py-2 w-40 flex-col items-start gap-2 px-5 text-sm">
                        <li className="hover:bg-gray-200 p-2 rounded" onClick={()=>navigate("/orders")}>My orders</li>
                        <li className="hover:bg-gray-200 p-2 rounded" onClick={logout}>Logout</li>
                    </ul>
                    </div>}
            </div>
            <div className="flex gap-8"><div className="relative cursor-pointer sm:hidden" onClick={()=>navigate("/cart")}>
                  <TiShoppingCart size={24} className="text-amber-600"/>
                    <button className="absolute -top-2 -right-3 text-xs text-amber-600 border-2 rounded-full   w-4.5 h-4.5 rounded-full">{totalcartitems()}</button>
                </div> <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
               <img src={assets.menu_icon} alt="menuicon" />
            </button></div>
           
            <div className={`${open ? 'flex' : 'hidden'} absolute top-15 z-10 left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <NavLink to="/" onClick={() => setOpen(false)}  className="block">Home</NavLink>
                <NavLink to="/products" onClick={() => setOpen(false)} className="block">All Products</NavLink>
                {user && <NavLink to="/orders" onClick={() => setOpen(false)} className="block">My Orders</NavLink>}
                <NavLink to="/contact" onClick={() => setOpen(false)} className="block">Contact</NavLink>
                {user ? <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-amber-600 hover:bg-amber-800 transition text-white rounded-full text-sm">
                    Logout
                </button>: <button onClick={()=>{setOpen(false);setUserLogin(true)}} className="cursor-pointer px-6 py-2 mt-2 bg-amber-600 hover:bg-amber-800 transition text-white rounded-full text-sm">
                    Login
                </button>}
            </div>
        </nav>)
}
export default Navbar;
