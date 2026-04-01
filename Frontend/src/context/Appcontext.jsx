import {createContext,useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from "react-hot-toast"
import {dummyProducts} from "../assets/assets"
import axios from "axios"
axios.defaults.baseURL=import.meta.env.VITE_BACKEND_URL
axios.defaults.withCredentials=true
export const Appcontext=createContext();
export const AppContextProvider=({children})=>{
const navigate=useNavigate();
const [user,setuser]=useState(null);
const [isSeller,setisSeller]=useState();
const [showUserLogin,setUserLogin]=useState(false);
const [productitems,setproductitems]=useState([]);
const [cartitems,setcartitems]=useState({});
const [searchquery,setsearchquery]=useState("");

const fetchproductitems=async()=>{
  setproductitems(dummyProducts);
}
  const fetchseller= async()=>{ 
    try{
const {data}=await axios.get("/api/seller/is-auth")
   if(data.success) setisSeller(true)
    else setisSeller(false)
    }
  catch(err){
     setisSeller(false)
    console.log(err.message)
  }}
  useEffect(()=>{
   fetchseller()
  fetchproductitems();
  })


const addtocart=(id)=>{
  const products=structuredClone(cartitems);
    console.log(products)
  if(products[id]){
    products[id]+=1;
  }
  else{
      products[id]=1;
  }
  setcartitems(products)
  toast.success("added to cart")
}
const updatecart=(quantity,id)=>{
  const products=structuredClone(cartitems);
  products[id]=quantity
  setcartitems(products)
  toast.success("cart updated")
}

const removetocart=(id)=>{
  const products=structuredClone(cartitems);
   if(products[id]){
    products[id]-=1;
    if( products[id]===0){
    delete products[id]
  }
  }
   setcartitems(products)
  toast.success("Removed from cart")
}

const totalcartitems=()=>{
let totalcount=0
  for (const item in cartitems){
   if(cartitems[item]>0)totalcount++
  }
  return totalcount
}

const totalpriceofcart=()=>{
 let totalprice=0
 for(const item in cartitems){
  const prod=productitems.find((prod)=>prod._id===item)
  if(cartitems[item]>0) totalprice+=prod.offerPrice*cartitems[item]
 }
   return totalprice
}
const value={user,setuser,isSeller,setisSeller,navigate,showUserLogin,setUserLogin,fetchproductitems,addtocart,removetocart,searchquery,setsearchquery,productitems,totalcartitems,totalpriceofcart,cartitems,setcartitems,axios}
 return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>
}


