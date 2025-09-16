import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        
        {/* Logo */}
        <Link to="/" className="text-3xl md:text-4xl font-extrabold tracking-wide">
          NITYA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center text-xl font-medium">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/project" className="hover:text-blue-400 transition">Project</Link>
          <Link to="/education" className="hover:text-blue-400 transition">Education</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          {/* ✅ Login Button */}
          <Link 
            to="/login" 
            className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden block" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-6 space-y-4 text-xl font-medium">
          <Link to="/" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/project" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Project</Link>
          <Link to="/education" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="/contact" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>
          {/* Mobile Login Button */}
          <Link 
            to="/login" 
            className="block px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
