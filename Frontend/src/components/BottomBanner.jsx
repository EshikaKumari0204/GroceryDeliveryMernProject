import { features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="mt-24 px-6 md:px-16 lg:px-24">
      <h1 className="text-2xl md:text-3xl text-center md:text-left font-semibold text-primary  mb-10">
        Our Main Features
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-green-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-green-100 rounded-full p-4 mb-4">
              <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
            </div>
            <h5 className="font-semibold text-base text-gray-900  mb-1">{feature.title}</h5>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomBanner;