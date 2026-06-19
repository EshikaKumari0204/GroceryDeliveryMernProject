import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="w-full bg-green-50 rounded-2xl px-8 sm:px-14 lg:px-20 py-16 sm:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Left: Text Content */}
      <div className="flex flex-col items-start max-w-lg">
        <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase mb-3">
          Fresh • Fast • Affordable
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
          From Farm To Your <span className="text-green-600">Door.</span>
          <br /> Daily Groceries,{" "}
          <span className="text-amber-600">Made Easy</span>
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-sm">
          Get fresh vegetables, fruits, and daily essentials delivered to your
          doorstep in under 30 minutes.
        </p>

        <div className="flex items-center gap-4">
          <Link
            to="/products"
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 transition rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg"
          >
            Shop Now →
          </Link>
          <Link
            to="/products"
            className="px-6 py-3 border border-green-600 text-green-700 hover:bg-green-100 transition rounded-full text-sm font-semibold"
          >
            Explore Deals
          </Link>
        </div>
      </div>

      {/* Right: Stats */}
      <div className="grid grid-cols-2 gap-4 shrink-0">
        {[
          { value: "10K+", label: "Happy Customers" },
          { value: "30 Min", label: "Delivery Time" },
          { value: "500+", label: "Fresh Products" },
          { value: "100%", label: "Quality Assured" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl px-6 py-5 text-center shadow-sm border border-green-100"
          >
            <p className="text-2xl font-bold text-green-600">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainBanner;
