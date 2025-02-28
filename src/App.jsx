import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReviewCard from "./components/ReviewCard";
import Contact from "./components/Contact";
import ServiceCard from "./components/ServiceCard";
import Booking from "./components/Booking";
import ServiceDetail from "./components/serviceDetails";
import ServiceTypeDetail from "./components/ServiceTypeDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServiceCard />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/reviews" element={<ReviewCard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route
          path="/service/:serviceId/:serviceType"
          element={<ServiceTypeDetail />}
        />
      </Routes>

      {/* Phone Icon - Left Side */}
      <div className="fixed bottom-5 left-5 z-50">
        <a
          href="tel:+916375477987"
          className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          <FaPhoneAlt size={26} />
        </a>
      </div>

      {/* WhatsApp Icon - Right Side */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href="https://wa.link/hk9jgm"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp size={26} />
        </a>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
