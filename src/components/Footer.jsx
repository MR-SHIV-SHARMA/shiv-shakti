import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">AC Repair Pro</h2>
          <p className="text-gray-400 mt-2">
            Reliable AC & appliance repair services at your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {["Home", "Services", "Book", "Reviews", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold">Get in Touch</h3>
          <p className="text-gray-400 mt-2 flex items-center justify-center md:justify-start">
            <MapPin size={18} className="mr-2" /> 123 Street, City, Country
          </p>
          <p className="flex items-center justify-center md:justify-start">
            <Phone size={18} className="mr-2" />
            <a href="tel:+1234567890" className="text-blue-400 hover:underline">
              +1234567890
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start">
            <Mail size={18} className="mr-2" />
            <a
              href="mailto:info@acservice.com"
              className="text-blue-400 hover:underline"
            >
              info@acservice.com
            </a>
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & Newsletter */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p>&copy; 2025 AC Repair Pro. All Rights Reserved.</p>
        <div className="mt-4 flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 px-5 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}
