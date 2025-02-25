import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReviewCard from "./components/ReviewCard";
import Contact from "./components/Contact";
import ServiceCard from "./components/ServiceCard";
import Booking from "./components/Booking";

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
