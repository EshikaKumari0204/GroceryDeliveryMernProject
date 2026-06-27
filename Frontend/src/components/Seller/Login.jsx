import { useContext, useState,useEffect } from 'react'
import { Appcontext } from '../../context/Appcontext'
import { toast } from "react-hot-toast"
const Login = () => {
  const { setisSeller, navigate, axios ,isSeller} = useContext(Appcontext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  useEffect(()=>{
    if(isSeller) navigate("/seller")

  },[isSeller])
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post("/api/seller/login", { email, password })
      if (data.success) {
        setisSeller(true)
        navigate("/seller")
       
      } else {
        toast.error(data.message)
      }
    } catch (err) {
      toast.error(err.message)
    }
  }
  return  !isSeller && (
    <div className="fixed inset-0 flex items-center justify-center z-30 bg-black/30 px-4">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-full max-w-sm px-6 py-10 sm:px-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-xs font-medium text-amber-600 uppercase tracking-widest mb-1">Admin</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Seller <span className="text-amber-600">Login</span>
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label>
            <input
              type="email" name="email"
              placeholder="seller@example.com"
              className="border border-gray-200 bg-gray-50 rounded-lg h-11 px-4 text-gray-800 placeholder-gray-400 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all duration-200 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Password</label>
            <input
              type="password"
              placeholder="••••••••" name="password"
              className="border border-gray-200 bg-gray-50 rounded-lg h-11 px-4 text-gray-800 placeholder-gray-400 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all duration-200 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="border-t border-gray-100 mt-2" />
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white font-semibold text-sm uppercase tracking-widest rounded-lg py-3 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer" >
            Log In
          </button>
        </form>

      </div>
    </div>
  )
}
export default Login
