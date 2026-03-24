import {useLocation} from "react-router-dom"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Toaster} from "react-hot-toast"
import {useContext} from "react"
import {Routes,Route} from "react-router-dom"
import Login from "./components/Login";
import { Appcontext } from "./context/Appcontext";
import Products from "./pages/Products";
import Product from "./components/Product";
import AllCategory from "./components/AllCategory";
import ProductDetail from "./components/ProductDetail";
import LoginSeller from "./components/Seller/Login";
import Cart from "./pages/Cart";
import AddAddress from "./pages/AddAddress";
import Order from "./pages/Order";
import Layout from "./pages/Seller/Layout";
import AddProduct from "./components/Seller/AddProduct";
import AllOrders from "./components/Seller/AllOrders";
import SellerallProd from "./components/Seller/SellerallProd";
const App=()=>{
  const {showUserLogin,isSeller,}=useContext(Appcontext)
  const isSellerPath=useLocation().pathname.includes("seller")
  return ( <>
    {!isSellerPath?<Navbar/>:""} 
    {showUserLogin?<Login></Login>:null}
    <Toaster></Toaster>
    <Routes>
      <Route path="/" element={<Home isSellerPath={isSellerPath}/>}></Route>
      <Route path="/products" element={<Products isSellerPath={isSellerPath}/>}></Route>
       <Route path="/products/:category" element={<AllCategory isSellerPath={isSellerPath}/>}></Route>
       <Route path="/products/:category/:_id" element={<ProductDetail isSellerPath={isSellerPath} />}></Route>
       <Route path="/cart" element={<Cart isSellerPath={isSellerPath} />}></Route>
       <Route path="/address" element={<AddAddress isSellerPath={isSellerPath} />}></Route>
        <Route path="/orders" element={<Order isSellerPath={isSellerPath} />}></Route>
         <Route path="/seller" element={isSeller?<Layout/>:<LoginSeller/>}>
         <Route   path="addprod" element={isSeller?<AddProduct/>:null}></Route>
           <Route path="chat" element={isSeller?<AllOrders/>:null}></Route>
             <Route path="overview" element={isSeller?<SellerallProd/>:null}></Route>
         </Route>
    </Routes>

  {!isSellerPath?<Footer/>:""} 
    </>
  )
}
export default App;

