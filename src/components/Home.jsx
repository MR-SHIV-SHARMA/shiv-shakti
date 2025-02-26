import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaTools,
  FaFan,
  FaRegSnowflake,
  FaTv,
  FaStar,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
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
    icon: <GiWashingMachine className="w-12 h-12 mb-4 text-black" />,
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

// Reusable animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// Reusable components
const SectionHeader = ({ title, subtitle }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={fadeIn}
    className="text-center mb-16"
  >
    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
      {title}
    </h2>
    {subtitle && <p className="text-xl text-gray-600 mt-4">{subtitle}</p>}
  </motion.div>
);

const ServiceCard = ({ service, index }) => (
  <motion.div
    variants={fadeIn}
    whileHover={{ scale: 1.05 }}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="flex items-center justify-center text-black mb-6">
      {service.icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
    <div className="flex justify-between items-center"></div>
  </motion.div>
);

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-black text-yellow-500 w-full h-auto pt-8">
        {/* Top Section - Logo and Business Name */}
        <div className="sm:absolute flex justify-between sm:justify-start sm:w-1/2 items-center sm:items-start px-4 bg-black">
          <div className="w-1/2 sm:w-auto flex justify-center border-yellow-500 p-4 mr-4 rounded-lg border-4">
            <img
              src="/vite.svg"
              alt="Shiv Shakti Home Appliance Services"
              className="w-24 sm:w-32 h-24 sm:h-32"
            />
          </div>
          <div className="w-1/2 sm:w-auto text-left">
            <h1 className="text-2xl font-bold">
              Shiv Shakti Home Appliance Service's
            </h1>
            <p className="text-lg font-semibold mt-2 hidden sm:block ">
              Con. No. 6375477987
            </p>
          </div>
        </div>
        <p className="text-lg font-semibold mt-2 px-4 sm:hidden">
          Con. No. 6375477987
        </p>

        {/* Middle Section - Appliance Images in Right-Aligned Pyramid Shape */}
        <div className="flex justify-end items-end sm:w-[75%] right-0 mt-6 bg-yellow-500 p-6 pb-16 sm:pb-32 rounded-tl-full overflow-hidden relative ml-auto">
          <div
            className="grid gap-4 mt-10"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(3, auto)",
              justifyItems: "end", // Align all items to the right
              alignItems: "end",
              gridTemplateAreas: `
        ". . img1"
        ". img2 img3"
        "img4 img5 img6"
      `,
            }}
          >
            <img
              src="/vite.svg"
              alt="Appliance 1"
              className="w-24 h-24 rounded-lg"
              style={{ gridArea: "img1" }}
            />
            <img
              src="/vite.svg"
              alt="Appliance 2"
              className="w-24 h-24 rounded-lg"
              style={{ gridArea: "img2" }}
            />
            <img
              src="/vite.svg"
              alt="Appliance 3"
              className="w-24 h-24 rounded-lg"
              style={{ gridArea: "img3" }}
            />
            <img
              src="/vite.svg"
              alt="Appliance 4"
              className="w-24 h-24 rounded-lg"
              style={{ gridArea: "img4" }}
            />
            <img
              src="/vite.svg"
              alt="Appliance 5"
              className="w-24 h-24 rounded-lg"
              style={{ gridArea: "img5" }}
            />
            <img
              src="/vite.svg"
              alt="Appliance 6"
              className="w-24 h-24 rounded-lg"
              style={{ gridArea: "img6" }}
            />
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full mt-1"></div>

        {/* Bottom Section - Services */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center pt-6 pb-6 px-4 bg-yellow-500">
          <div className="relative border border-black p-2">
            <span className="absolute top-0 left-12 right-12 h-[6px] bg-black rounded-br-2xl rounded-bl-2xl" />
            <img
              src="/vite.svg"
              alt="Air Conditioner"
              className="w-32 mx-auto mt-4"
            />
            <p className="mt-2 font-semibold">Air Conditioner</p>
          </div>
          <div className="relative border border-black p-2">
            <span className="absolute top-0 left-12 right-12 h-[6px] bg-black rounded-br-2xl rounded-bl-2xl" />
            <img
              src="/vite.svg"
              alt="Washing Machine"
              className="w-32 mx-auto mt-4"
            />
            <p className="mt-2 font-semibold">Washing Machine</p>
          </div>
          <div className="relative border border-black p-2">
            <span className="absolute top-0 left-12 right-12 h-[6px] bg-black rounded-br-2xl rounded-bl-2xl" />
            <img
              src="/vite.svg"
              alt="Refrigerator"
              className="w-32 mx-auto mt-4"
            />
            <p className="mt-2 font-semibold">Refrigerator</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Our Services"
            subtitle="Fast, reliable, and professional appliance repair services"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Why Choose Us?" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Certified Experts",
                text: "Our technicians are certified and background-checked",
                icon: <FaTools className="w-12 h-12 text-blue-600" />,
              },
              {
                title: "Same-Day Service",
                text: "Emergency services available 24/7",
                icon: <FaCheckCircle className="w-12 h-12 text-blue-600" />,
              },
              {
                title: "Price Guarantee",
                text: "Upfront pricing with no hidden fees",
                icon: <FaStar className="w-12 h-12 text-blue-600" />,
              },
              {
                title: "Warranty",
                text: "90-day warranty on all repairs",
                icon: <FaRegSnowflake className="w-12 h-12 text-blue-600" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="mb-6 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Customer Stories"
            subtitle="What our customers say about us"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-md relative"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white p-4 rounded-xl">
                  <FaStar className="w-8 h-8" />
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    {testimonial.name[0]}
                  </div>
                  <span className="font-semibold text-gray-800">
                    {testimonial.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-red-700 p-8 rounded-2xl"
          >
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 justify-center md:justify-start">
                <FaPhoneAlt className="w-8 h-8" />
                Emergency Repair Needed?
              </h3>
              <p className="text-xl">24/7 Immediate Response Team Available</p>
            </div>
            <a
              href="tel:+911234567890"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-gray-50 min-w-[250px] justify-center"
            >
              <FaPhoneAlt className="w-6 h-6" />
              Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Get In Touch" />
          <motion.div
            variants={fadeIn}
            className="bg-blue-600 text-white p-8 sm:p-12 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
              Contact Information
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
                <div>
                  <p className="font-semibold">24/7 Support</p>
                  <a
                    href="tel:+911234567890"
                    className="text-lg sm:text-2xl font-bold hover:underline"
                  >
                    +91 12345 67890
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
                <div>
                  <p className="font-semibold">Email Address</p>
                  <a
                    href="mailto:support@acprocare.com"
                    className="text-lg sm:text-xl font-medium hover:underline"
                  >
                    support@acprocare.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
                <div>
                  <p className="font-semibold">Service Areas</p>
                  <p className="text-lg sm:text-xl font-medium">
                    Delhi NCR, Mumbai, Bangalore & Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
