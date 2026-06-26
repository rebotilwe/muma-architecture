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
  { label: 'PORMAT', url: 'https://www.pormat.co.za/', description: 'Construction & Development' },
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

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
        <div className="mx-auto px-4 sm:px-6 lg:px-[5vw] flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Responsive sizing */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
                Be<span className="text-yellow-600">More</span>
              </span>
              <span className="text-[7px] sm:text-[8px] tracking-[0.25em] uppercase text-yellow-600/60 font-body">
                Properties
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Visible on large screens */}
          <div className="hidden xl:flex items-center gap-4 xl:gap-6">
            {/* Main Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] xl:text-[12px] tracking-[0.15em] uppercase font-body transition-colors duration-300 whitespace-nowrap ${
                  location.pathname === link.path
                    ? 'text-yellow-600'
                    : 'text-white/70 hover:text-yellow-600'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Legacy Project Link */}
            <a
              href="https://legacy-projects.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] xl:text-[12px] tracking-[0.15em] uppercase font-body text-white/70 hover:text-yellow-600 transition-colors duration-300 whitespace-nowrap"
            >
              Legacy Project
            </a>

            {/* Group Companies Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownOpen(!dropdownOpen);
                }}
                className={`text-[11px] xl:text-[12px] tracking-[0.15em] uppercase font-body transition-colors duration-300 flex items-center gap-1 whitespace-nowrap ${
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

            {/* Book Consultation - Primary CTA */}
            <Link
              to="/contact"
              className="ml-2 px-4 xl:px-6 py-2 xl:py-2.5 bg-yellow-600 text-black text-[10px] xl:text-[11px] tracking-[0.15em] uppercase font-semibold hover:bg-yellow-500 transition-all duration-300 whitespace-nowrap rounded-lg shadow-lg shadow-yellow-600/20"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button - Visible on smaller screens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden text-white p-2 hover:text-yellow-600 transition-colors z-50 relative"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu - Enhanced for all mobile sizes */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex items-center justify-center px-4"
          >
            <div className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-md mx-auto">
              {/* Logo in mobile menu */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-2 sm:mb-4 text-center"
              >
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    Be<span className="text-yellow-600">More</span>
                  </span>
                  <span className="text-[8px] sm:text-[10px] tracking-[0.3em] uppercase text-yellow-600/60 mt-1">
                    Properties
                  </span>
                </div>
              </motion.div>

              {/* Mobile Nav Links - Scrollable if many items */}
              <div className="flex flex-col items-center gap-4 sm:gap-6 overflow-y-auto max-h-[60vh] w-full">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="w-full text-center"
                  >
                    <Link
                      to={link.path}
                      className={`font-display text-2xl sm:text-3xl font-light tracking-wider transition-colors block py-2 ${
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
                  className="w-full text-center"
                >
                  <a
                    href="https://legacy-projects.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl sm:text-3xl font-light tracking-wider text-white hover:text-yellow-600 transition-colors block py-2"
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
                  className="flex flex-col items-center gap-3 sm:gap-4 mt-2 w-full"
                >
                  <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-yellow-600/70">Group Companies</p>
                  {groupLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-600 transition-colors text-base sm:text-lg block py-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              </div>

              {/* Book Consultation - Mobile CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-xs mt-2"
              >
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 sm:px-10 py-3 sm:py-4 bg-yellow-600 text-black text-sm tracking-[0.2em] uppercase font-semibold hover:bg-yellow-500 transition-all duration-300 rounded-lg shadow-lg shadow-yellow-600/30"
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