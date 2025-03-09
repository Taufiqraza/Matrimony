import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#66451c] px-4 text-sm text-center md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-3 md:gap-5">
            <NavLink
              to="/about"
              className="text-[#e7d5b4] hover:bg-[#e7d5b4] hover:text-[#66451c] px-3 py-1 rounded-md transition"
            >
              ABOUT
            </NavLink>
            <NavLink
              to="#"
              className="text-[#e7d5b4] hover:bg-[#e7d5b4] hover:text-[#66451c] px-3 py-1 rounded-md transition"
            >
              FAQ
            </NavLink>
            <NavLink
              to="#"
              className="text-[#e7d5b4] hover:bg-[#e7d5b4] hover:text-[#66451c] px-3 py-1 rounded-md transition"
            >
              CONTACT
            </NavLink>
          </nav>

          {/* Contact and Social Icons */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs md:text-sm">
            <a
              href="mailto:www.sangam@gmail.com"
              className="flex items-center gap-2 text-[#e7d5b4] hover:bg-[#e7d5b4] hover:text-[#66451c] px-3 py-1 rounded-md transition"
            >
              <FaEnvelope />
              <span>www.sangam@gmail.com</span>
            </a>
            <a
              href="tel:+123456789"
              className="flex items-center gap-2 text-[#e7d5b4] hover:bg-[#e7d5b4] hover:text-[#66451c] px-3 py-1 rounded-md transition"
            >
              <FaPhone />
              <span>+123456789</span>
            </a>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:bg-[#e7d5b4] p-2 rounded-full text-[#e7d5b4] hover:text-[#66451c] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:bg-[#e7d5b4] p-2 rounded-full text-[#e7d5b4] hover:text-[#66451c] transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                className="hover:bg-[#e7d5b4] p-2 rounded-full text-[#e7d5b4] hover:text-[#66451c] transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white flex justify-between items-center px-4 md:px-6 py-2 shadow-md">
        {/* Logo */}
        <div className="bg-[#66451c] rounded px-3 py-2">
          <Link to="/">
            <img
              src="/src/assets/logo/sangam.svg"
              alt="Sangam Logo"
              width="80px"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {/* Language Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[#66451c] font-semibold">
              Language
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-32 bg-[#e7d5b4] text-[#66451c] rounded shadow-md hidden group-hover:flex flex-col text-center text-xs">
              <Link to="#" className="hover:bg-[#f9f7f3] px-3 py-1 transition">
                Hindi
              </Link>
              <Link to="#" className="hover:bg-[#f9f7f3] px-3 py-1 transition">
                Marathi
              </Link>
              <Link to="#" className="hover:bg-[#f9f7f3] px-3 py-1 transition">
                Telugu
              </Link>
            </div>
          </div>

          {/* Other Links */}
          <NavLink
            to="/login"
            className="text-[#66451c] font-semibold hover:text-[#a16a3d] transition"
          >
            Login
          </NavLink>
          <NavLink
            to="#"
            className="text-[#66451c] font-semibold hover:text-[#a16a3d] transition"
          >
            Help
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#66451c]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center py-6 md:hidden transition-all duration-300">
          <div className="bg-white w-10/12 p-5 rounded-md shadow-lg">
            <button
              className="absolute top-4 right-6 text-[#66451c]"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes size={24} />
            </button>
            <NavLink
              to="/login"
              className="block text-[#66451c] font-semibold hover:text-[#a16a3d] transition py-2"
            >
              Login
            </NavLink>
            <NavLink
              to="#"
              className="block text-[#66451c] font-semibold hover:text-[#a16a3d] transition py-2"
            >
              Help
            </NavLink>
            <div className="mt-4">
              <p className="text-[#66451c] font-semibold">Language</p>
              <div className="flex flex-col mt-2">
                <Link to="#" className="text-[#66451c] hover:text-[#a16a3d] transition py-1">
                  Hindi
                </Link>
                <Link to="#" className="text-[#66451c] hover:text-[#a16a3d] transition py-1">
                  Marathi
                </Link>
                <Link to="#" className="text-[#66451c] hover:text-[#a16a3d] transition py-1">
                  Telugu
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
