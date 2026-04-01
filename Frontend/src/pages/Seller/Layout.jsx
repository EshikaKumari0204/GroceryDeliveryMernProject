import {useContext} from 'react'
import {assets} from "../../assets/assets"
import {Appcontext} from "../../context/Appcontext"
import {NavLink,Outlet} from "react-router-dom"
import toast from "react-hot-toast"
const Layout = () => {
  const {navigate,setisSeller,axios}=useContext(Appcontext)
  const logout=async()=>{
    try{  const {data}=await  axios("/api/seller/logout")
    if(data.success) setisSeller(false)
    else toast.error(data.message)}
catch(err){
    toast.error(err.message)
}
  }
  const dashboardicon=(<img className="h-10 w-10"src={assets.add_icon}></img>)
   const overviewicon=(<img src={assets.product_list_icon}></img>)
    const chaticon=(<img src={assets.order_icon}></img>)
    const sidebarLinks = [
        { name: "Dashboard", path: "/seller/addprod", icon: dashboardicon },
        { name: "Overview", path: "/seller/overview", icon: overviewicon },
        { name: "Chat", path: "/seller/chat", icon: chaticon },
    ];
  return (
        <div class="flex flex-col ">
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                <a href="https://prebuiltui.com">
                    <img className="h-9" src={assets.logo} alt="dummyLogoColored"  />
                </a>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button className='border rounded-full text-sm px-4 py-1' onClick={logout}>Logout</button>
                </div>
            </div>
          <div className="flex">  <div className="md:w-64 w-16 border-r h-80vh text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                {sidebarLinks.map((item, index) => (
                    <NavLink to={item.path} key={index}
                        className={`flex items-center py-3 px-4 gap-3 
                            ${index === 0 ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-amber-500 text-amber-500"
                                : "hover:bg-gray-100/90 border-white text-gray-700"
                            }`
                        }
                    >
                        {item.icon}
                        <p className="md:block hidden text-center">{item.name}</p>
                    </NavLink>
                ))}
            </div>
            <Outlet/></div>
        </div>
    );
}

export default Layout

