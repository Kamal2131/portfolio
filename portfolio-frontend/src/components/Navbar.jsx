import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const NavItem = ({ item, onClick }) => (
  <NavLink
    to={item.path}
    onClick={onClick}
    className={({ isActive }) =>
      `font-medium transition-all duration-300 mx-3 ${
        isActive
          ? "text-blue-600 font-bold"
          : "text-gray-600 hover:text-blue-600"
      }`
    }
  >
    {item.name}
  </NavLink>
);

const HireMeButton = ({ className = "" }) => (
  <button
    className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 ${className}`}
  >
    Hire Me
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="flex items-center justify-between py-5 px-4 md:px-8 relative max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex items-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
        <span className="ml-4 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Portfolio
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10 mr-3 lg:mr-8">
        {navItems.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
        <HireMeButton className="ml-4 lg:ml-6" />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 mt-16 animate-slideDown">
          <div className="flex flex-col space-y-6 p-8">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} onClick={closeMenu} />
            ))}
            <div className="mt-6">
              <HireMeButton className="w-full py-3 rounded-lg text-lg" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
