import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Shield, Building2, TrendingUp, Diamond } from 'lucide-react';
import { motion } from 'framer-motion';

import Winchester1 from '../assets/images/Wincherster4.jpg';
import Celestial1 from '../assets/images/Celestial1.jpg';
import Thuto1 from '../assets/images/Thuto1.jpeg';
import Kaelo1 from '../assets/images/kaelo1.jpg';
import Hub1 from '../assets/images/village1.jpg';

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

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="w-8 h-px bg-yellow-600" />
    <span className="text-[11px] tracking-[0.3em] uppercase text-yellow-600 font-body">
      {children}
    </span>
  </div>
);

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/5 backdrop-blur-sm border border-yellow-600/10 rounded-lg ${className}`}>
    {children}
  </div>
);

const GoldLine = ({ className = "" }) => (
  <div className={`w-full h-px bg-yellow-600/10 ${className}`} />
);

// Timeline updated to match documented company history
const milestones = [
  { year: '2006', title: 'Foundation', description: 'BeMore\u2019s journey begins as Muma Construction, laying the technical foundation in architecture and engineering.' },
  { year: '2011', title: 'Muma Investments', description: 'Formalized growth with the establishment of Muma Investments, expanding into property development.' },
  { year: '2015', title: 'Pormat Property Group', description: 'Founded Pormat Property Group, a fully registered real estate company handling property management for the group\u2019s portfolio.' },
  { year: '2018', title: 'Muma Consulting', description: 'Established Muma Consulting to house architecture and development consulting services.' },
  { year: '2023', title: 'BeMore Properties', description: 'Rebranded as BeMore Properties, now holding over R500 million in assets and a development pipeline exceeding R1 billion.' },
];

const values = [
  { 
    icon: Eye, 
    title: 'Vision', 
    description: 'Inspiring people to be more!!' 
  },
  { 
    icon: Target, 
    title: 'Mission', 
    description: 'By creating value, Proclaiming new standards, Innovative, Competitive, and Attractive Public Company' 
  },
  { 
    icon: Diamond, 
    title: 'Objective', 
    description: 'Create an enabling platform where people can express themselves and enterprise portfolios in line with the BeMore ethos, with a R100bn diverse portfolio by 2035.' 
  },
  { 
    icon: Shield, 
    title: 'Values', 
    description: 'Integrity, Innovation, Collaboration, Excellence, Sustainability, Empowerment' 
  },
];

const stats = [
  { value: 'R500M+', label: 'Assets Under Management', icon: TrendingUp },
  { value: '18+', label: 'Years Experience', icon: Building2 },
];

export default function About() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Celestial1}
            alt="BeMore Properties architecture and construction excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        <div className="relative z-10 px-[5vw] pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>About BeMore Properties</SectionLabel>
            <h1 className="font-display text-5xl sm:text-7xl font-light text-white">
              Our <span className="text-yellow-600">Story</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-[5vw]">
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-white leading-tight mb-6">
              Project Management, Architecture &<br />
              <span className="text-yellow-600">Development Consulting</span>
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                BeMore Properties is a leading project management, architecture, and development consulting firm.
                With over 18 years in the built environment, we have developed a value proposition built with the customer in mind.
              </p>
              <p>
                Our results and experience working with clients is evident in the projects we have taken to site.
                From training aspiring developers to having projects started and fully delivered on time,
                we are the definitive partner for property entrepreneurs across South Africa.
              </p>
              <p>
                We have grown our property portfolio to over R500 million, with a development pipeline exceeding R1 billion
                across transformative residential, student accommodation, and mixed-use developments.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <img
                src={Winchester1}
                alt="Winchester Hills - Premium residential development"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GoldLine className="mx-[5vw]" />

      {/* Video */}
      <section className="py-24 px-[5vw]">
        <AnimatedSection>
          <SectionLabel>See Our Story</SectionLabel>
          <h2 className="font-display text-4xl font-light text-white mb-12">BeMore Properties in Motion</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden border border-yellow-600/10">
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=xfibrl4d&public_id=Video_Project_spkosk"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              title="BeMore Properties Video"
            />
          </div>
        </AnimatedSection>
      </section>

      <GoldLine className="mx-[5vw]" />

      {/* Stats */}
      <section className="py-16 px-[5vw]">
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <GlassCard className="p-8 text-center">
                <stat.icon className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
                <p className="font-display text-4xl font-light text-yellow-600 mb-2">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <GoldLine className="mx-[5vw]" />

      {/* Values */}
      <section className="py-24 px-[5vw]">
        <AnimatedSection>
          <SectionLabel>Our Foundation</SectionLabel>
          <h2 className="font-display text-4xl font-light text-white mb-12">Vision, Mission, Objective & Values</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <GlassCard className="p-8 h-full">
                <item.icon className="w-8 h-8 text-yellow-600 mb-6" />
                <h3 className="font-display text-2xl font-light text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
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
          <h2 className="font-display text-4xl font-light text-white mb-16">Key Milestones</h2>
        </AnimatedSection>
        <div className="space-y-0">
          {milestones.map((m, i) => (
            <AnimatedSection key={m.year} delay={i * 0.1}>
              <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] gap-6 sm:gap-10 py-8 border-b border-white/5">
                <span className="font-display text-3xl sm:text-4xl font-light text-yellow-600">{m.year}</span>
                <div>
                  <h3 className="font-display text-xl text-white mb-2">{m.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{m.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <GoldLine className="mx-[5vw]" />

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Kaelo1}
            alt="Kaelo Student Rez development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/70" />
        </div>
        <div className="relative z-10 px-[5vw] text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-light text-white mb-4">
              Ready to Build Your Legacy?
            </h2>
            <p className="text-white/60 mb-8">
              Partner with BeMore Properties and join a network of visionary developers shaping the South African landscape.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-600 text-black text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-yellow-500 transition-colors"
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