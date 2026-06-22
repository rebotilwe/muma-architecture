import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Investments', path: '/investments' },
  { label: 'Contact', path: '/contact' },
];

// External links for dropdown
const groupLinks = [
  { label: 'PORMAT', url: 'https://pormat.co.za/', description: 'Construction & Development' },
  { label: 'MUMA Consulting', url: 'https://www.muma.co.za/', description: 'Professional Services' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-yellow-600/10' : 'bg-transparent'
      }`}>
        <div className="mx-auto px-[5vw] flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="flex flex-col leading-tight">
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Be<span className="text-yellow-600">More</span>
              </span>
              <span className="text-[8px] tracking-[0.25em] uppercase text-yellow-600/60 font-body">
                Properties
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Reorganized Order */}
          <div className="hidden lg:flex items-center gap-6">
            {/* 1. Main Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[12px] tracking-[0.15em] uppercase font-body transition-colors duration-300 whitespace-nowrap ${
                  location.pathname === link.path
                    ? 'text-yellow-600'
                    : 'text-white/70 hover:text-yellow-600'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* 2. Legacy Project Link */}
            <a
              href="https://www.muma.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] tracking-[0.15em] uppercase font-body text-white/70 hover:text-yellow-600 transition-colors duration-300 whitespace-nowrap"
            >
              Legacy Project
            </a>

            {/* 3. Group Companies Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownOpen(!dropdownOpen);
                }}
                className={`text-[12px] tracking-[0.15em] uppercase font-body transition-colors duration-300 flex items-center gap-1 whitespace-nowrap ${
                  dropdownOpen ? 'text-yellow-600' : 'text-white/70 hover:text-yellow-600'
                }`}
              >
                Group Companies
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-black/95 backdrop-blur-xl rounded-lg shadow-2xl border border-yellow-600/10 overflow-hidden"
                  >
                    {groupLinks.map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 hover:bg-yellow-600/10 transition-all duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div className="font-semibold text-white hover:text-yellow-600 transition-colors text-sm">
                          {item.label}
                        </div>
                        <div className="text-xs text-gray-400">{item.description}</div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Book Consultation - Primary CTA (ALWAYS LAST) */}
            <Link
              to="/contact"
              className="ml-2 px-6 py-2.5 bg-yellow-600 text-black text-[11px] tracking-[0.15em] uppercase font-semibold hover:bg-yellow-500 transition-all duration-300 whitespace-nowrap rounded-lg shadow-lg shadow-yellow-600/20"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 px-6">
              {/* Logo in mobile menu */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 text-center"
              >
                <div className="flex flex-col">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    Be<span className="text-yellow-600">More</span>
                  </span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-yellow-600/60 mt-1">
                    Properties
                  </span>
                </div>
              </motion.div>

              {/* Mobile Nav Links - Reorganized */}
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className={`font-display text-3xl font-light tracking-wider transition-colors ${
                      location.pathname === link.path ? 'text-yellow-600' : 'text-white hover:text-yellow-600'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Legacy Project - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="https://www.muma.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-3xl font-light tracking-wider text-white hover:text-yellow-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Legacy Project
                </a>
              </motion.div>

              {/* Group Companies - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-col items-center gap-4 mt-2"
              >
                <p className="text-xs tracking-[0.2em] uppercase text-yellow-600/70">Group Companies</p>
                {groupLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-600 transition-colors text-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>

              {/* Book Consultation - Mobile (Primary CTA at bottom) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/contact"
                  className="mt-4 px-10 py-4 bg-yellow-600 text-black text-sm tracking-[0.2em] uppercase font-semibold hover:bg-yellow-500 transition-all duration-300 rounded-lg shadow-lg shadow-yellow-600/30"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}