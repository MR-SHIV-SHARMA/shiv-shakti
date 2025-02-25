import { useState } from "react";

export default function Booking() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
  });

  // Service options
  const services = [
    "AC Repair",
    "AC Installation",
    "AC Maintenance",
    "Fridge Repair",
    "Washing Machine Repair",
    "Geyser Service",
  ];

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking request submitted! Our team will contact you soon.");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Booking Header */}
      <h1 className="text-3xl font-bold text-center">Book a Service</h1>
      <p className="text-center text-gray-600 mt-2">
        Schedule an appointment for your appliance repair or maintenance.
      </p>

      {/* Booking Form */}
      <form
        className="bg-white p-6 mt-6 rounded-lg shadow-lg space-y-4"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address (Optional)"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Service Selection */}
        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a Service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>

        {/* Date Picker */}
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Time Picker */}
        <input
          type="time"
          name="time"
          required
          value={formData.time}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg w-full font-semibold hover:bg-blue-700 transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
