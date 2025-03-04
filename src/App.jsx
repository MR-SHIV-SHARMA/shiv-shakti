import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import ServiceDetail from "./components/serviceDetails";
import ServiceTypeDetail from "./components/ServiceTypeDetail";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          {/* General SEO */}
          <html lang="en" />
          <title>AC Repair & Services in Jaipur | 24/7 Expert Support</title>
          <meta
            name="description"
            content="Get professional & affordable AC repair services in Jaipur. Certified experts, same-day service, and 24/7 support available. Call now!"
          />
          <meta
            name="keywords"
            content="AC repair Jaipur, AC service Jaipur, AC maintenance, air conditioner repair"
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://yourwebsite.com/" />

          {/* Open Graph for Social Media */}
          <meta
            property="og:title"
            content="Best AC Repair & Services in Jaipur"
          />
          <meta
            property="og:description"
            content="Need quick AC repair? Get expert services in Jaipur with same-day support."
          />
          <meta property="og:url" content="https://yourwebsite.com/" />
          <meta
            property="og:image"
            content="https://yourwebsite.com/og-image.jpg"
          />
          <meta property="og:type" content="website" />

          {/* Twitter SEO */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Best AC Repair & Services in Jaipur"
          />
          <meta
            name="twitter:description"
            content="Get expert AC repair services with same-day support. Contact now!"
          />
          <meta
            name="twitter:image"
            content="https://yourwebsite.com/og-image.jpg"
          />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
        </Helmet>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServiceCard />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route
            path="/service/:serviceId/:serviceType"
            element={<ServiceTypeDetail />}
          />
          <Route path="*" element={<Navigate to="/" />} />{" "}
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
    </HelmetProvider>
  );
}

export default App;
