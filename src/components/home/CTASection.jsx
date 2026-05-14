import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function CTASection() {
  return (
    <section className="relative py-32 px-[5vw] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a057e9b333ab1fe42032232/3bd757c22_generated_49b57670.png"
          alt="Aerial view of BeMore developments"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/70" />
      </div>
      
      <AnimatedSection className="relative z-10 max-w-2xl">
        <h2 className="font-display text-4xl sm:text-6xl font-light text-alabaster leading-tight mb-6">
          Your Legacy<br />
          <span className="text-gold">Starts Here</span>
        </h2>
        <p className="text-lg text-alabaster/60 leading-relaxed mb-10">
          Whether you're an investor seeking premium returns or an aspiring developer building your portfolio, MUMA is your partner in creating generational wealth through property.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/investments"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
          >
            Explore Investments
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-alabaster/20 text-alabaster text-[13px] tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}