import {useState,useContext} from "react"
import { Appcontext } from '../../context/Appcontext'
import { assets, categories } from "../../assets/assets";
import toast from "react-hot-toast"
const AddProduct= () => {
  //files,name,description,category,price,offerprice
  const {axios}=useContext(Appcontext)
  const [files,setfiles]=useState([])
  const [name,setname]=useState([])
  const [description,setdescription]=useState([])
  const [category,setcategory]=useState([])
  const [price,setprice]=useState([])
   const [offerprice,setofferprice]=useState([])
   const submitHandler=async(e)=>{
    try {
          e.preventDefault();
const prodData={name,description:description.split("\n"),category,price,offerprice}
const formData=new FormData();
formData.append('productdata',JSON.stringify(prodData))
for(let i=0;i<files.length;i++){
    formData.append('images',files[i])
}
const {data}=await axios.post("/api/product/add",formData)
if(data.success) {
    toast.success(data.message);
setname("")
setofferprice("")
setdescription("")
setprice("")
setfiles([])}
else{
      toast.error(data.message)
}


    } catch (error) {
        toast.error(error.message)
        
    }
  
   }
    return (
        <div className="py-10 flex flex-col justify-between bg-white">
            <form className="md:p-10 p-4 space-y-5 max-w-lg" onSubmit={(e)=>submitHandler(e)}>
                <div>
                    <p className="text-base font-medium">Product Image</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        {Array(4).fill('').map((_, index) => (
                            <label key={index} htmlFor={`image${index}`}>
                                <input  accept="image/*" type="file" id={`image${index}`} hidden />
                                <img className="max-w-24 cursor-pointer" src={assets.upload_area}alt="uploadArea" width={100} height={120} />
                            </label>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-name">Product Name</label>
                    <input id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" value={name} onChange={(e)=>setname(e.target.value)} required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
                    <textarea id="product-description" rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here" value={description} onChange={(e)=>setdescription(e.target.value)}></textarea>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-base font-medium" htmlFor="category">Category</label>
                    <select id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
                        <option value="">Select Category</option>
                        {categories.map((item, index) => (
                            <option key={index} value={item.path}>{item.path}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
                        <input id="product-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"  value={price} onChange={(e)=>setprice(e.target.value)} required />
                    </div>
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
                        <input id="offer-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" value={offerprice} onChange={(e)=>setofferprice(e.target.value)} required />
                    </div>
                </div>
                <button className="px-8 py-2.5 bg-amber-500 text-white font-medium rounded">ADD</button>
            </form>
        </div>
    );
};
export default AddProduct;