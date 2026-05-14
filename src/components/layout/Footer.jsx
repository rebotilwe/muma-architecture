import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ExternalLink } from 'lucide-react';
import logo from '../../assets/images/logo.png'; // Adjust path to your logo

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Investments', path: '/investments' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-gold/10 overflow-hidden">
      {/* Giant Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[20vw] font-light text-white/[0.02] leading-none">
          MUMRA
        </span>
      </div>

      <div className="relative px-[5vw] pt-20 pb-8">
        {/* Gold line */}
        <div className="w-16 h-px bg-gold mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 - Brand with Logo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* Logo Image */}
              <img 
                src={logo} 
                alt="MUMRA Logo" 
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <h3 className="font-display text-2xl font-light tracking-wider text-alabaster leading-tight">
                  MUMRA
                </h3>
                <span className="text-[9px] tracking-[0.2em] uppercase text-gold/60 font-body leading-tight">
                  Architecture & Investments
                </span>
              </div>
            </div>
            <p className="text-sm text-alabaster/60 leading-relaxed max-w-xs">
              Architecture, Construction & Property Investments. Building the African legacy through visionary development and strategic investment.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6">Navigation</h4>
            <div className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-alabaster/60 hover:text-gold transition-colors flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-alabaster/60 group-hover:text-alabaster transition-colors">125 Madiba Road, Pretoria CBD, South Africa</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm text-alabaster/60 group-hover:text-alabaster transition-colors">+27 (012) 546 0966</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm text-alabaster/60 group-hover:text-alabaster transition-colors">info@muma.co.za</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm text-alabaster/60 group-hover:text-alabaster transition-colors">Mon – Fri: 08:00 – 17:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-xs text-alabaster/40">
              © {new Date().getFullYear()} MUMRA Architecture Construction & Property Investments. All rights reserved.
            </p>
            <p className="text-xs text-alabaster/40">
              A subsidiary of the Be More Group
            </p>
          </div>
          
          {/* Developer Credit */}
          <a
            href="https://kasi-code.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs text-alabaster/40 hover:text-gold transition-colors duration-300"
          >
            <span>Developed by KasiCode</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}