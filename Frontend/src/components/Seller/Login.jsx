import {useContext,useState,  useEffect} from 'react'
import { Appcontext } from '../../context/Appcontext'
import {toast} from "react-hot-toast"
const Login = () => {
  const {isSeller,setisSeller,navigate,axios}=useContext(Appcontext)
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const handleSubmit=async(e)=>{
 try{
    e.preventDefault();
  const {data}=await axios.post("/api/seller/login",{email,password})
    if(data.success) {setisSeller(true);
      navigate("/seller");
    }
    else toast.error(data.message)
    }
    catch(err){
 toast.error(err.message)
    }
  }

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 flex flex-col gap-4 items-center justify-center z-30 bg-/50">
      <form onSubmit={handleSubmit}class="flex-col gap-5 items-start border border-gray-300 px-5 py-10  rounded-md outline-gray-400">
        <h1 class="text-3xl text-center mb-4">Seller <span className="text-amber-600">Login</span></h1>
        <div class="flex-col gap-4">
          <p className="mb-2 mt-2">Email</p>
          <input type="email" name="email" placeholder="email" className="border-gray-400 border px-3 py-2 rounded-sm outline-none w-70" value={email } onChange={(e)=>setemail(e.target.value)} />
        </div>
        <div class="flex-col gap-4">
          <p className="mb-2 mt-2">Password</p>
          <input type="password" name="password" placeholder="password" className="border-gray-400 border px-3 py-2 rounded-sm outline-none w-70" value={password} onChange={(e)=>setpassword(e.target.value)} />
        </div>
        <button className="bg-amber-600 px-4 rounded py-2 text-white mt-4 w-70 cursor-pointer text-xl">LogIn</button>
      </form>
    </div>
  )
}
export default Login
