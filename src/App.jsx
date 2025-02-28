import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
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
      <Footer />
    </Router>
  );
}

export default App;
