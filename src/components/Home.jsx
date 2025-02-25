import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaTools,
  FaFan,
  FaRegSnowflake,
  FaTv,
  FaStar,
} from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";

const testimonials = [
  {
    name: "Rahul Sharma",
    review: "Excellent AC repair service! Fixed in no time.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    review: "Very professional & affordable. Highly recommend!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    review: "Technicians were on time and did a great job!",
    rating: 4,
  },
];

const services = [
  {
    title: "AC Repair",
    icon: <FaFan className="w-12 h-12 mb-4 text-blue-600" />,
    description: "Expert repair & maintenance for all AC types",
    price: "599",
  },
  {
    title: "Refrigerator",
    icon: <FaRegSnowflake className="w-12 h-12 mb-4 text-blue-600" />,
    description: "Cooling system repair & gas charging",
    price: "799",
  },
  {
    title: "Washing Machine",
    icon: <GiWashingMachine className="w-12 h-12 mb-4 text-blue-600" />,
    description: "Motor repair & leakage solutions",
    price: "899",
  },
  {
    title: "TV & Appliances",
    icon: <FaTv className="w-12 h-12 mb-4 text-blue-600" />,
    description: "Smart TV repair & installation",
    price: "699",
  },
];

export default function Home() {
  return (
    <div className="p-4">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-24 rounded-xl shadow-2xl">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Expert Appliance Repair Services
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            24/7 Emergency Service | Certified Technicians | 90-Day Warranty
          </p>
          <a
            href="/booking"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
          >
            📅 Schedule Same-Day Service
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <img
                src={service.icon}
                alt={service.title}
                className="service-icon"
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <strong>Price: {service.price}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 py-16 rounded-2xl">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose AC Pro Care?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Certified Experts",
                text: "Our technicians are certified and background-checked",
                icon: <FaTools className="w-8 h-8" />,
              },
              {
                title: "Same-Day Service",
                text: "Emergency services available 24/7",
                icon: <FaCheckCircle className="w-8 h-8" />,
              },
              {
                title: "Price Guarantee",
                text: "Upfront pricing with no hidden fees",
                icon: "💸",
              },
              {
                title: "Warranty",
                text: "90-day warranty on all repairs",
                icon: "🛡️",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`p-1 rounded-2xl ${item.color} bg-gradient-to-br from-white via-white to-white`}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Trusted by Thousands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-4">
                "{testimonial.review}"
              </p>
              <span className="block text-blue-600 font-semibold">
                - {testimonial.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="mt-16 bg-red-600 text-white py-8 rounded-xl shadow-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ⚠️ Emergency Repair Needed?
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-lg md:text-xl">
              Call Now for 24/7 Emergency Service:
            </p>
            <a
              href="tel:+911234567890"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 flex items-center gap-2"
            >
              📞 +91 12345 67890
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-16 bg-gray-50 py-16 rounded-2xl">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Get Instant Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">📩 Email Support</h3>
              <a
                href="mailto:support@acprocare.com"
                className="text-blue-600 hover:underline break-words"
              >
                support@acprocare.com
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">📍 Service Areas</h3>
              <p className="text-gray-600">
                Serving Delhi NCR, Mumbai, Bangalore & Hyderabad
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
