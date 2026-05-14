import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Building2, Hammer, TrendingUp, GraduationCap, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import { services } from '@/lib/projectsData';

// Import your downloaded images
import Celestial1 from '../assets/images/Celestial1.jpg';
import Winchester1 from '../assets/images/Wincherster1.jpg';
import Varsity1 from '../assets/images/varsity1.jpg';
import Thuto1 from '../assets/images/Thuto1.jpeg';
import Kaelo1 from '../assets/images/kaelo1.jpg';

const iconMap = {
  Compass, Building2, Hammer, TrendingUp, GraduationCap, ClipboardCheck,
};

export default function Services() {
  return (
    <div>
      {/* Hero - Using Celestial image */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Celestial1}
            alt="Modern architecture and interior spaces by MUMA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/30" />
        </div>
        <div className="relative z-10 px-[5vw] pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>What We Offer</SectionLabel>
            <h1 className="font-display text-5xl sm:text-7xl font-light text-alabaster">
              Our <span className="text-gold">Services</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-[5vw]">
        <AnimatedSection className="max-w-3xl mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-light text-alabaster mb-4">
            Comprehensive Property Solutions
          </h2>
          <p className="text-alabaster/60 leading-relaxed">
            From architectural concept to completed development, MUMA delivers end-to-end solutions 
            for property developers, investors, and entrepreneurs seeking excellence in the African built environment.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <GlassCard className="p-8 h-full group">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-light text-alabaster mb-3">{service.title}</h3>
                  <p className="text-sm text-alabaster/60 leading-relaxed">{service.description}</p>
                </GlassCard>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Process Section with Background Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Winchester1}
            alt="Winchester Heights development process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/95 via-obsidian/85 to-obsidian/90" />
        </div>
        <div className="relative z-10 px-[5vw]">
          <AnimatedSection>
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="font-display text-4xl font-light text-alabaster mb-16">How We Deliver Excellence</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Consultation', desc: 'Understanding your vision, goals, and investment parameters.' },
              { num: '02', title: 'Design & Planning', desc: 'Architectural design, feasibility studies, and regulatory approvals.' },
              { num: '03', title: 'Development', desc: 'Expert construction management with strict quality control.' },
              { num: '04', title: 'Delivery', desc: 'On-time handover with ongoing portfolio management support.' },
            ].map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="relative p-6 rounded-lg bg-obsidian/50 backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-300">
                  <span className="font-display text-6xl font-light text-gold/20">{step.num}</span>
                  <h3 className="font-display text-xl text-alabaster mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-alabaster/60 leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Kaelo1}
            alt="Kaelo Student Rez - Modern development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/60" />
        </div>
        <div className="relative z-10 px-[5vw] text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-light text-alabaster mb-4">
              Let's Build Something Extraordinary
            </h2>
            <p className="text-alabaster/60 mb-8">
              Whether you're starting your first development or expanding your portfolio, 
              our team is ready to make your vision a reality.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-gold/80 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Optional: Project Showcase Gallery */}
      <section className="py-24 px-[5vw] bg-graphite/30">
        <AnimatedSection>
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="font-display text-4xl font-light text-alabaster mb-12">Recent Developments</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedSection delay={0.1}>
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src={Varsity1} 
                alt="Varsity Living" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-gold text-sm font-display">Varsity Living</p>
                <p className="text-alabaster/60 text-xs">Student Accommodation</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src={Thuto1} 
                alt="Thuto Residence" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-gold text-sm font-display">Thuto Residence</p>
                <p className="text-alabaster/60 text-xs">Student Accommodation</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src={Celestial1} 
                alt="The Celestial" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-gold text-sm font-display">The Celestial</p>
                <p className="text-alabaster/60 text-xs">Mixed Use Development</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src={Kaelo1} 
                alt="Kaelo Student Rez" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-gold text-sm font-display">Kaelo Student Rez</p>
                <p className="text-alabaster/60 text-xs">Student Accommodation</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}