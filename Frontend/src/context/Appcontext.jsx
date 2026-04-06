import {createContext,useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from "react-hot-toast"
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
  try {
  const {data}=await axios("/api/product/allprod")
  setproductitems(data.products);


  } catch (error) {
   console.log(error.message)
  }
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
   const fetchuser= async()=>{ 
    
    try{  
const {data}=await axios.get("/api/user/is-auth")
   if(data.success) {setuser(data.user) ; setcartitems(data.user.cartitems || {})}
    else{ setuser(null)}
    }
  catch(err){
     setuser(null)
  console.log(err.message)
  }
}

  useEffect(()=>{
   fetchuser()
  
   fetchseller()
  fetchproductitems();
  },[])



    const cartupdate=async()=>{
    try {
      const curruser=user
     
    
       const {data}=await axios.post("/api/cart/updatecart",{userid:curruser._id,cartitems});
       
       console.log(data)
    if(data.success) {console.log("updated cart")}
      else toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
   
  }
  useEffect(()=>{
    if(user)
    cartupdate()

  },[cartitems])

const addtocart=(id)=>{

  const products=structuredClone(cartitems);

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
  if(cartitems[item]>0) totalprice+=(prod.offerprice*cartitems[item])
 }
   return totalprice
}
const value={user,setuser,isSeller,setisSeller,navigate,showUserLogin,setUserLogin,fetchproductitems,addtocart,removetocart,searchquery,setsearchquery,productitems,totalcartitems,totalpriceofcart,cartitems,setcartitems,axios}
 return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>
}


