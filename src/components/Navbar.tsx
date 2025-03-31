
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PROFILE", path: "/profile" },
    { name: "HOBBIES", path: "/hobbies" },
    { name: "SKILLS", path: "/skills" },
    { name: "CONTACT", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-kitty-pink/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-kitty-pink rounded-full flex items-center justify-center kawaii-shadow">
                <span className="text-pink-800 font-bold">UL</span>
              </div>
              <span className="text-lg font-comic font-bold text-pink-800">Uriel&apos;s World</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-pink-800 hover:text-pink-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "bg-kitty-pink text-pink-800 kawaii-shadow"
                    : "text-gray-600 hover:bg-kitty-pink/50 hover:text-pink-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="bg-white/95 backdrop-blur-sm border-t border-kitty-pink/30 p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-full text-center text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "bg-kitty-pink text-pink-800 kawaii-shadow"
                    : "text-gray-600 hover:bg-kitty-pink/50 hover:text-pink-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
