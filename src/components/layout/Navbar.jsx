import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../../assets/images/logo.png'; // Adjust path to your logo

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Investments', path: '/investments' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-obsidian/90 backdrop-blur-xl border-b border-gold/10' : 'bg-transparent'
      }`}>
        <div className="mx-auto px-[5vw] flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo Image */}
            <img 
              src={logo} 
              alt="MUMA Logo" 
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="font-display text-xl font-light tracking-wider text-alabaster leading-tight">
                MUMA
              </span>
              <span className="text-[8px] tracking-[0.2em] uppercase text-gold/70 font-body leading-tight">
                Architecture & Investments
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] tracking-[0.15em] uppercase font-body transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-alabaster/70 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 border border-gold/40 text-gold text-[12px] tracking-[0.15em] uppercase hover:bg-gold hover:text-obsidian transition-all duration-300"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-alabaster p-2"
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
            className="fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-2xl flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {/* Show logo in mobile menu too */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                <img 
                  src={logo} 
                  alt="MUMA Logo" 
                  className="h-16 w-auto object-contain"
                />
              </motion.div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20, skewY: 3 }}
                  animate={{ opacity: 1, y: 0, skewY: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className={`font-display text-4xl font-light tracking-wider transition-colors ${
                      location.pathname === link.path ? 'text-gold' : 'text-alabaster hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/contact"
                  className="mt-4 px-8 py-3 border border-gold text-gold text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-obsidian transition-all duration-300"
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