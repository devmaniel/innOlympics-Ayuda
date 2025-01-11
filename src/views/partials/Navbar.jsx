import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Logo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link
              to="/announcement_page"
              className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >
              Announcement
            </Link>
            <Link
              to="/history"
              className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >
              History
            </Link>
            <Link
              to="/about"
              className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              to="/profile"
              className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >
              Profile
            </Link>

            <Link
              to="/logout"
              className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >
              Logout
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="outline-none mobile-menu-button"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/announcement"
              className="block px-3 py-2 text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-100"
            >
              Announcement
            </Link>
            <Link
              to="/history"
              className="block px-3 py-2 text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-100"
            >
              History
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              to="/profile"
              className="block px-3 py-2 text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-100"
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
