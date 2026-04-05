import {useContext,useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import { Appcontext } from '../context/Appcontext';
import { assets, dummyProducts } from '../assets/assets';
import Product from './Product';
const ProductDetail = () => {
  const params=useParams();
  const id=params._id;
  const categ=params.category;
  const [relatedproducts,setrelatedproducts]=useState([])
  const {addtocart,navigate,productitems}=useContext(Appcontext)
   console.log(productitems)

  let product=productitems.filter((prod)=>prod._id===id)
     product=product[0]
      console.log(`http://localhost:4000${product.image[0]}`)
    const [thumbnail, setThumbnail] = useState(`http://localhost:4000${product.image[0]}`);
      useEffect(()=>{
const relatedstuff=productitems.filter((prod)=>prod.category===categ)
  setrelatedproducts(relatedstuff)
  },[id])
   useEffect(()=>{
    if(product && product.image && product.image.length>0)
  setThumbnail(`http://localhost:4000${product.image[0]}`)
  },[product])
  return (
    product && (
        <div className="flex flex-col gap-15 items-center">
        <div className="mt-8 max-w-6xl w-full px-6 flex flex-col items-center justify-center">
            <p>
                <Link to={"/"}>Home</Link> /
                <Link to={"/products"}> Products</Link> /
                <Link to={`/products/${product.category}`}></Link> 
                <span className="text-amber-600"> {product.name}</span>
            </p>
            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {product.image.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={`http://localhost:4000${image}`} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={thumbnail} alt="Selected product" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{product.name}</h1>
                    <div className="flex items-center gap-0.5 mt-1">
                        {Array(5).fill('').map((_, i) => (
                           i<4 ? (
                               <img src={assets.star_icon}></img>
                            ) : (
                                <img src={assets.star_dull_icon} alt="" />
                            )
                        ))}
                        <p className="text-base ml-2">(4)</p>
                    </div>
                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: ₹{product.price}</p>
                        <p className="text-2xl font-medium">MRP: ₹{product.offerPrice}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>
                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" onClick={() => {addtocart(product._id)}} >
                            Add to Cart
                        </button>
                        <button className="w-full py-3.5 cursor-pointer font-medium bg-amber-600 text-white hover:bg-amber-800 transition"  onClick={()=>{addtocart(product._id),navigate("/cart")}} >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center  gap-5  px-6" > 
{relatedproducts.map((product)=><Product product={product}></Product>)}
        </div>
        <button className="border border-amber-600 w-25 h-10 cursor-pointer hover:bg-amber-800 bg-amber-600 rounded-md text-white" onClick={()=>navigate("/products")}>See More</button>
        </div>
    )
  )
}

export default ProductDetail
