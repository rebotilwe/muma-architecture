import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import GoldLine from '@/components/ui/GoldLine';

// Import your downloaded images
import Winchester1 from '../assets/images/Wincherster4.jpg';
import Celestial1 from '../assets/images/Celestial1.jpg';
import Thuto1 from '../assets/images/Thuto1.jpeg';
import Kaelo1 from '../assets/images/kaelo1.jpg';
import Hub1 from '../assets/images/village1.jpg';

const milestones = [
  { year: '2008', title: 'Foundation', description: 'MUMA established as an architecture and construction firm in Pretoria, South Africa.' },
  { year: '2015', title: 'Portfolio Growth', description: 'Property portfolio reaches R100 million through strategic residential and commercial developments.' },
  { year: '2020', title: 'Student Housing', description: 'Entry into purpose-built student accommodation sector, addressing critical housing demand near universities.' },
  { year: '2022', title: 'Eastway Acquisition', description: 'Acquired Eastway Apartments and converted to a 540-bed student accommodation, reaching R300M in assets.' },
  { year: '2024', title: 'Billion-Rand Vision', description: 'Pipeline projects exceed R1 billion. Expansion into mixed-use developments and investment partnerships.' },
];

const values = [
  { icon: Target, title: 'Vision', description: 'To be the leading African property development group, creating generational wealth through visionary development.' },
  { icon: Eye, title: 'Mission', description: 'Facilitating economic participation of property entrepreneurs across the African continent through turnkey solutions.' },
  { icon: Shield, title: 'Values', description: 'Excellence, integrity, customer-centricity, and a relentless commitment to quality in every project we undertake.' },
];

export default function About() {
  return (
    <div>
      {/* Hero - Using Celestial image */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Celestial1}
            alt="MUMA architecture and construction excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/30" />
        </div>
        <div className="relative z-10 px-[5vw] pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>About MUMA</SectionLabel>
            <h1 className="font-display text-5xl sm:text-7xl font-light text-alabaster">
              Our <span className="text-gold">Story</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro - Using Winchester image */}
      <section className="py-24 px-[5vw]">
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-alabaster leading-tight mb-6">
              A Leading Property Development Consulting Firm
            </h2>
            <div className="space-y-4 text-alabaster/60 leading-relaxed">
              <p>
                MUMA Architecture Construction & Property Investments is a subsidiary of the Be More Group of companies. 
                With over 16 years in the built environment, we have developed a value proposition built with the customer in mind.
              </p>
              <p>
                Our results and experience working with clients is evident in the projects we have taken to site. 
                From training aspiring developers to having projects started and fully delivered on time, 
                we are the definitive partner for property entrepreneurs across Africa.
              </p>
              <p>
                We have grown our property portfolio to over R300 million and are pressing toward the R1 billion mark, 
                with a pipeline of transformative residential, student accommodation, and mixed-use developments.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <img
                src={Winchester1}
                alt="Winchester Heights - Premium student accommodation development"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GoldLine className="mx-[5vw]" />

      {/* Values */}
      <section className="py-24 px-[5vw]">
        <AnimatedSection>
          <SectionLabel>Our Foundation</SectionLabel>
          <h2 className="font-display text-4xl font-light text-alabaster mb-12">Vision, Mission & Values</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <GlassCard className="p-8 h-full">
                <item.icon className="w-8 h-8 text-gold mb-6" />
                <h3 className="font-display text-2xl font-light text-alabaster mb-3">{item.title}</h3>
                <p className="text-sm text-alabaster/60 leading-relaxed">{item.description}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <GoldLine className="mx-[5vw]" />

      {/* Timeline */}
      <section className="py-24 px-[5vw]">
        <AnimatedSection>
          <SectionLabel>Our Journey</SectionLabel>
          <h2 className="font-display text-4xl font-light text-alabaster mb-16">Key Milestones</h2>
        </AnimatedSection>
        <div className="space-y-0">
          {milestones.map((m, i) => (
            <AnimatedSection key={m.year} delay={i * 0.1}>
              <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] gap-6 sm:gap-10 py-8 border-b border-white/5">
                <span className="font-display text-3xl sm:text-4xl font-light text-gold">{m.year}</span>
                <div>
                  <h3 className="font-display text-xl text-alabaster mb-2">{m.title}</h3>
                  <p className="text-sm text-alabaster/60 leading-relaxed">{m.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA with background image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Kaelo1}
            alt="Kaelo Student Rez development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/95 via-obsidian/80 to-obsidian/70" />
        </div>
        <div className="relative z-10 px-[5vw] text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-light text-alabaster mb-4">
              Ready to Build Your Legacy?
            </h2>
            <p className="text-alabaster/60 mb-8">
              Partner with MUMA and join a network of visionary investors and developers shaping the African landscape.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-gold/80 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}