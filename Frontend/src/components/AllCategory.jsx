import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
import Product from "./Product";

const AllCategory = () => {
  const params = useParams();
  const { productitems } = useContext(Appcontext);

  const filtered = productitems.filter(
    (product) =>
      product.inStock &&
      product.category.toLowerCase() === params.category
  );

  return (
    <div className="min-h-screen px-4 px-6 md:px-16 xl:px-24 py-8">
      {/* Header */}
      <div className="mb-6">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Category</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase">
          {params.category}
        </h1>
        <div className="w-12 h-1 bg-amber-500 rounded-full mt-2" />
      </div>

      {/* Horizontal Scroll Row */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <p className="text-lg font-medium">No products found</p>
          <p className="text-sm mt-1">Check back later for new arrivals.</p>
        </div>
      ) : (
        <div className="flex  gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {filtered.map((product) => (
            <div key={product._id} className="min-w-[200px] sm:min-w-[220px] shrink-0">
              <Product product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCategory;
