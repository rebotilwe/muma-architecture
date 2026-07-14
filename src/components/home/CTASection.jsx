import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function CTASection() {
  return (
    <section className="relative py-32 px-[5vw] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a057e9b333ab1fe42032232/3bd757c22_generated_49b57670.png"
          alt="Aerial view of BeMore developments"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
      </div>
      
      <AnimatedSection className="relative z-10 max-w-2xl">
        <h2 className="font-display text-4xl sm:text-6xl font-light text-white leading-tight mb-6">
          Your Legacy<br />
          <span className="text-yellow-600">Starts Here</span>
        </h2>
        <p className="text-lg text-white/60 leading-relaxed mb-10">
          Whether you're a property entrepreneur or an aspiring developer, 
          BeMore Properties is your partner in building a successful future through property development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-600 text-black text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-yellow-500 transition-colors duration-300"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-[13px] tracking-[0.15em] uppercase hover:border-yellow-600 hover:text-yellow-600 transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}