import { useParams } from "react-router-dom";
import { serviceDetails } from "./serviceDetails";

const ServiceTypeDetail = () => {
  const { serviceId, serviceType } = useParams();

  const service = serviceDetails?.[serviceId];

  if (!service) {
    return <h2 className="text-center text-red-500">Service not found</h2>;
  }

  const serviceData = service.price?.[serviceType];

  if (!serviceData) {
    return <h2 className="text-center text-red-500">Service type not found</h2>;
  }

  return (
    <div className="p-6 text-center">
      <div className="flex justify-center">{service.icon}</div>
      <h1 className="text-3xl font-bold mt-4">
        {service.title} -{" "}
        {serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}
      </h1>
      <p className="mt-4 text-lg">{service.description}</p>

      {/* Price Display */}
      <h2 className="text-2xl font-semibold mt-6">
        Price: ₹{serviceData.cost}
      </h2>

      {/* Details List */}
      <ul className="mt-4 text-left text-gray-700 list-disc list-inside max-w-md mx-auto">
        {serviceData.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>

      {/* Book Now Button */}
      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700">
        Book Now
      </button>
    </div>
  );
};

export default ServiceTypeDetail;
