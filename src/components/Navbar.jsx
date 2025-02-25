import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current page route
  const pathname = location.pathname; // Extract string path

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const menuItems = ["Home", "Services", "Book", "Reviews", "Contact"];

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">AC Repair Pro</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {menuItems.map((item) => {
            const itemPath =
              item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = pathname === itemPath;

            return (
              <li key={item}>
                <Link
                  to={itemPath}
                  className={`px-3 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-white text-blue-600 shadow-md"
                      : "hover:text-gray-200"
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden flex flex-col items-center bg-blue-600 py-4 space-y-3 shadow-lg rounded-b-lg"
          >
            {menuItems.map((item) => {
              const itemPath =
                item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = pathname === itemPath;

              return (
                <li key={item} className="w-full text-center">
                  <Link
                    to={itemPath}
                    className={`block px-6 py-3 rounded-lg text-lg transition ${
                      isActive
                        ? "bg-white text-blue-600 shadow-md"
                        : "hover:text-gray-300"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
