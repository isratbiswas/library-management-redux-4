
// import { Link, } from 'react-router';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "AllBook", path: "/allBooks" },
    { name: "Add Book", path: "/addBook" },
    { name: "Borrow Summary", path: "/borrowBook" },
  ];
    return (
    <div className="">
      <nav className=" bg-[#f7f2f2]   mb-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 mt-2 mb-2">
          {/* Logo */}
          <div>
        <h1 className="text-3xl font-extrabold text-[#415E72]  leading-[3.1rem]">
  BookNest
        </h1>
       </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex text-md font-bold space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2 py-1 transition-colors ${
                    isActive
                      ? "text-[#FFA4A4] border-b-2 border-[#FFA4A4]"
                      : "text-gray-700 hover:text-[#FFA4A4]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2 transition-colors ${
                  isActive
                    ? "text-green-600 bg-gray-100 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
              onClick={() => setIsOpen(false)} // close menu after click
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
    </div>
    );
};

export default Navbar;