import {useState,useContext} from "react"
import { Appcontext } from "../context/Appcontext"
import {toast} from "react-hot-toast"
const Login = () => {
      const {setUserLogin,setuser,axios,navigate}=useContext(Appcontext)
    //create state for all the input fields 
    const [state, setState] = useState("login")
    const [name,setname]=useState(null);
    const [email,setemail]=useState(null);
    const [pass,setpass]=useState(null);
    const handleSubmit = async(e) => {
        try{
 e.preventDefault();
        const {data}=await axios.post(`/api/user/${state}`,{name:name,email:email,password:pass})
       
        console.log("data",data)
        if(data.success){
            setuser(data.user);
            navigate("/");
            setUserLogin(false)
             toast.success("logged in successfully")
        }
        else{
             toast.error(data.message)
        }
        }
        catch(err){
            console.log(err.message)
            toast.error(err.message)
        }
    }
    return (
      <div onClick={()=>setUserLogin(false)} className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center z-30 bg-black/75 " >
         <form
            onSubmit={(e)=>handleSubmit(e)} onClick={(e)=>e.stopPropagation()}
            className="sm:w-87.5  text-center bg-white border border-gray-100 rounded-2xl px-8">
            <h1 className="text-black text-3xl mt-10 font-medium">
                {state === "login" ? "Login" : "Sign up"}
            </h1>
            <p className="text-gray-400 text-sm mt-2">Please sign in to continue</p>
            {state !== "login" && (
                <div className="flex items-center mt-6 w-full bg-white border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <circle cx="12" cy="8" r="5" /> <path d="M20 21a8 8 0 0 0-16 0" /> </svg>
                    <input type="text" name="name" placeholder="Name" className="w-full bg-transparent text-black placeholder-gray-400 border-none outline-none " value={name} onChange={(e)=>setname(e.target.value)} required />
                </div>
            )}
            <div className="flex items-center w-full mt-4 bg-white border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /> <rect x="2" y="4" width="20" height="16" rx="2" /> </svg>
                <input type="email" name="email" placeholder="Email id" className="w-full bg-transparent text-black placeholder-gray-400 border-none outline-none " value={email} onChange={(e)=>setemail(e.target.value)} required />
            </div>
            <div className=" flex items-center mt-4 w-full bg-white border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /> <path d="M7 11V7a5 5 0 0 1 10 0v4" /> </svg>
                <input type="password" name="password" placeholder="Password" className="w-full bg-transparent text-black placeholder-gray-400 border-none outline-none" value={pass} onChange={(e)=>setpass(e.target.value)} required />
            </div>
            <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-amber-600 hover:bg-amber-800 transition " >
                {state === "login" ? "Login" : "Sign up"}
            </button>
            <p onClick={() => setState(prev => prev === "login" ? "register" : "login") } className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer" >
                {state === "login" ? "Don't have an account?" : "Already have an account?"}
                <span className="text-amber-400 hover:underline ml-1">click here</span>
            </p>
        </form>
      </div>
    )
}
export default Login;