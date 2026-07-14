import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ExternalLink } from 'lucide-react';
// import logo from '../../assets/images/logo.png'; // Uncomment when you have BeMore logo

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

// Group company links
const groupLinks = [
  { label: 'PORMAT', url: 'https://pormat.co.za/' },
  { label: 'MUMA Consulting', url: 'https://www.muma.co.za/' },
  { label: 'MUMA Investment', url: 'https://legacy-projects.netlify.app/' },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-yellow-600/10 overflow-hidden">
      {/* Giant Watermark - Updated to BeMore */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[20vw] font-light text-white/[0.02] leading-none">
          BeMore
        </span>
      </div>

      <div className="relative px-[5vw] pt-20 pb-8">
        {/* Gold line */}
        <div className="w-16 h-px bg-yellow-600 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* Logo Image - Commented out until you have BeMore logo */}
              {/* <img 
                src={logo} 
                alt="BeMore Properties Logo" 
                className="h-12 w-auto object-contain"
              /> */}
              <div className="flex flex-col">
                <h3 className="font-display text-2xl font-bold tracking-tight text-white leading-tight">
                  Be<span className="text-yellow-600">More</span>
                </h3>
                <span className="text-[9px] tracking-[0.2em] uppercase text-yellow-600/60 font-body leading-tight">
                  Properties
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Architecture, Construction & Development Consulting. Building South Africa's legacy through visionary property development.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-yellow-600 mb-6">Navigation</h4>
            <div className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-white/60 hover:text-yellow-600 transition-colors flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Group Companies */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-yellow-600 mb-6">Group Companies</h4>
            <div className="space-y-3">
              {groupLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-yellow-600 transition-colors flex items-center gap-1 group"
                >
                  {item.label}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-yellow-600 mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-yellow-600 mt-0.5 shrink-0" />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">125 Madiba Road, Pretoria CBD, South Africa</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-yellow-600 shrink-0" />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">+27 (012) 546 0966</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-yellow-600 shrink-0" />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">info@bemoreproperties.co.za</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Clock className="w-4 h-4 text-yellow-600 shrink-0" />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">Mon – Fri: 08:00 – 17:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} BeMore Properties. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              A subsidiary of the Be More Group
            </p>
          </div>
          
          {/* Developer Credit */}
          <a
            href="https://kasi-code.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs text-white/40 hover:text-yellow-600 transition-colors duration-300"
          >
            <span>Developed by KasiCode</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}