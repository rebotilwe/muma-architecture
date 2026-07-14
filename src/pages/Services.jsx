import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Building2, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// Import your downloaded images
import Celestial1 from '../assets/images/Celestial1.jpg';
import Winchester1 from '../assets/images/Wincherster1.jpg';
import Varsity1 from '../assets/images/Varsity1.jpg';
import Thuto1 from '../assets/images/Thuto1.jpeg';
import Kaelo1 from '../assets/images/kaelo1.jpg';

// Animated Section Component
const AnimatedSection = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

// Section Label Component
const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="w-8 h-px bg-yellow-600" />
    <span className="text-[11px] tracking-[0.3em] uppercase text-yellow-600 font-body">
      {children}
    </span>
  </div>
);

// Glass Card Component
const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/5 backdrop-blur-sm border border-yellow-600/10 rounded-lg ${className}`}>
    {children}
  </div>
);

// Updated Services Data - Removed Construction, Investment, Student Accommodation
const services = [
  {
    title: "Property Development",
    description: "End-to-end residential, commercial, and mixed-use property development tailored for modern South African urban environments.",
    icon: "Compass",
  },
  {
    title: "Project Management",
    description: "Professional oversight and execution management from planning and approvals through to final delivery.",
    icon: "ClipboardCheck",
  },
  {
    title: "Architecture & Design",
    description: "Innovative architectural solutions focused on functionality, sustainability, and timeless design aesthetics.",
    icon: "Building2",
  },
  {
    title: "Property Management",
    description: "Comprehensive property management services ensuring optimal performance, maintenance, and value appreciation of your assets.",
    icon: "Building2",
  },
];

const iconMap = {
  Compass, Building2, ClipboardCheck,
};

export default function Services() {
  return (
    <div className="bg-black">
      {/* Hero - Using Celestial image */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Celestial1}
            alt="BeMore Properties architecture and interior spaces"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        <div className="relative z-10 px-[5vw] pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>What We Offer</SectionLabel>
            <h1 className="font-display text-5xl sm:text-7xl font-light text-white">
              Our <span className="text-yellow-600">Services</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-[5vw]">
        <AnimatedSection className="max-w-3xl mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-light text-white mb-4">
            Comprehensive Property Solutions
          </h2>
          <p className="text-white/60 leading-relaxed">
            From architectural concept to completed development, BeMore Properties delivers end-to-end solutions 
            for property developers and entrepreneurs seeking excellence in the South African built environment.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <GlassCard className="p-8 h-full group hover:border-yellow-600/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-yellow-600/10 flex items-center justify-center mb-6 group-hover:bg-yellow-600/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="font-display text-xl font-light text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{service.description}</p>
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/90" />
        </div>
        <div className="relative z-10 px-[5vw]">
          <AnimatedSection>
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="font-display text-4xl font-light text-white mb-16">How We Deliver Excellence</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Consultation', desc: 'Understanding your vision, goals, and project parameters.' },
              { num: '02', title: 'Design & Planning', desc: 'Architectural design, feasibility studies, and regulatory approvals.' },
              { num: '03', title: 'Development', desc: 'Expert project management with strict quality control.' },
              { num: '04', title: 'Delivery', desc: 'On-time handover with ongoing property management support.' },
            ].map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="relative p-6 rounded-lg bg-black/50 backdrop-blur-sm border border-yellow-600/10 hover:border-yellow-600/30 transition-all duration-300">
                  <span className="font-display text-6xl font-light text-yellow-600/20">{step.num}</span>
                  <h3 className="font-display text-xl text-white mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        </div>
        <div className="relative z-10 px-[5vw] text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-light text-white mb-4">
              Let's Build Something Extraordinary
            </h2>
            <p className="text-white/60 mb-8">
              Whether you're starting your first development or expanding your portfolio, 
              our team is ready to make your vision a reality.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-600 text-black text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-yellow-500 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Showcase Gallery - Removed */}
      {/* The projects section has been removed as requested */}
    </div>
  );
}