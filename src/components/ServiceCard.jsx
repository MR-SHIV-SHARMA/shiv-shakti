import { FaSnowflake, FaWrench, FaFan } from "react-icons/fa";

// Dummy Service Data
const services = [
  {
    title: "AC Repair",
    description: "Quick and efficient AC repair services.",
    price: 50,
    icon: <FaWrench />,
  },
  {
    title: "AC Installation",
    description: "Professional AC installation at your home or office.",
    price: 100,
    icon: <FaSnowflake />,
  },
  {
    title: "AC Maintenance",
    description: "Regular maintenance to ensure top performance.",
    price: 80,
    icon: <FaFan />,
  },
  {
    title: "Fridge Repair",
    description: "Fast fridge repair for all brands and models.",
    price: 60,
    icon: <FaWrench />,
  },
  {
    title: "Washing Machine Repair",
    description:
      "Fixing issues with fully automatic & semi-automatic machines.",
    price: 70,
    icon: <FaWrench />,
  },
  {
    title: "Geyser Service",
    description: "Water heater installation and repair services.",
    price: 90,
    icon: <FaFan />,
  },
];

// Service Card Component
function ServiceCard({ title, description, price, icon }) {
  return (
    <div className="border p-6 rounded-xl shadow-lg bg-white text-center hover:shadow-xl transition">
      {/* Service Icon */}
      <div className="flex justify-center">
        <div className="bg-blue-100 p-3 rounded-full text-blue-500 text-2xl">
          {icon}
        </div>
      </div>

      {/* Service Title & Description */}
      <h2 className="text-xl font-semibold mt-3">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>

      {/* Price */}
      <p className="text-green-600 font-bold text-lg mt-2">Price: ${price}</p>

      {/* Book Now Button */}
      <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
        Book Now
      </button>
    </div>
  );
}

// Services Section
export default function Services() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center">Our Services</h1>
      <p className="text-center text-gray-600 mt-2">
        We provide top-quality AC and home appliance repair services.
      </p>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
