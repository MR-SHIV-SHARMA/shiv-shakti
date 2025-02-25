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
    <div className="flex items-center justify-center text-blue-600 mb-6">
      {service.icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
    <p className="text-gray-600 mb-6">{service.description}</p>
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold text-blue-600">₹{service.price}</span>
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="/booking"
        className="bg-blue-100 text-blue-600 px-6 py-2 rounded-lg font-semibold"
      >
        Book Now
      </motion.a>
    </div>
  </motion.div>
);

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-center bg-gradient-to-br from-blue-50 to-indigo-50 py-12 md:py-16 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 -bottom-48 left-1/3 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl xl:text-8xl font-bold mb-8 leading-[1.1]"
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Expert Appliance
            </span>
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Repair Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Fast, reliable, and professional appliance repair services with
            <span className="font-semibold text-blue-600">
              {" "}
              90-day warranty
            </span>
            and{" "}
            <span className="font-semibold text-indigo-600">24/7 support</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row justify-center items-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/booking"
              className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl flex items-center gap-3 transition-all duration-300"
            >
              <FaCheckCircle className="w-7 h-7 text-white/90" />
              Schedule Same-Day Service
            </motion.a>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <a
                href="tel:+911234567890"
                className="relative flex items-center gap-3 text-lg font-semibold text-gray-700 hover:text-indigo-700 px-6 py-3 transition-colors"
              >
                <div className="p-3 bg-indigo-100 rounded-xl">
                  <FaPhoneAlt className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Emergency Call</p>
                  <p className="text-xl font-bold">+91 12345 67890</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-col items-center gap-4 text-gray-600"
          >
            <div className="flex -space-x-4">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="/vite.svg"
                  className="w-12 h-12 rounded-full border-4 border-white"
                  alt={`Customer ${i + 1}`}
                />
              ))}
            </div>
            <p className="flex items-center gap-2">
              <FaStar className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">4.9/5</span>
              (2,500+ Satisfied Customers)
            </p>
          </motion.div>
        </div>

        {/* Animated decorative elements */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" /> */}
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
