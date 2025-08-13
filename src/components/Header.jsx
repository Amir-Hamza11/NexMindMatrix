import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Menu icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-xl text-nm-700 flex items-center gap-3"
        >
          <img src="/images/logo.png" alt="logo" className="h-10 w-10" />
          NexMindMatrix
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/services" className="hover:underline">
            Services
          </Link>
          <Link to="/responsibilities" className="hover:underline">
            Responsibilities
          </Link>
          <Link to="/careers" className="hover:underline">
            Careers
          </Link>
          <Link
            to="/contact"
            className="px-3 py-2 border rounded hover:bg-gray-100"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-3 px-4 py-3">
            <Link to="/services" className="hover:underline" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/responsibilities" className="hover:underline" onClick={() => setIsOpen(false)}>
              Responsibilities
            </Link>
            <Link to="/careers" className="hover:underline" onClick={() => setIsOpen(false)}>
              Careers
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 border rounded hover:bg-gray-100 text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
