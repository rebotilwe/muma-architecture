import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, DollarSign, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { investments } from '@/lib/projectsData';

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

// Badge Component
const Badge = ({ children, className = "" }) => (
  <span className={`px-3 py-1 text-[10px] tracking-wider uppercase rounded-full ${className}`}>
    {children}
  </span>
);

// Gold Line Component
const GoldLine = ({ className = "" }) => (
  <div className={`w-full h-px bg-yellow-600/10 ${className}`} />
);

export default function Investments() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/6a057e9b333ab1fe42032232/16b76aa39_generated_12807682.png"
            alt="BeMore Properties premium investment property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        <div className="relative z-10 px-[5vw] pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>Invest With BeMore Properties</SectionLabel>
            <h1 className="font-display text-5xl sm:text-7xl font-light text-white">
              Investment<br /><span className="text-yellow-600">Opportunities</span>
            </h1>
            <p className="mt-4 text-lg text-white/60 max-w-xl">
              Strategic property investment opportunities with premium returns, backed by 16+ years of development expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key metrics */}
      <section className="py-12 px-[5vw] border-b border-yellow-600/10 bg-gray-900/30">
        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { value: 'R300M+', label: 'Assets Under Management' },
            { value: '16%', label: 'Average IRR' },
            { value: '95%+', label: 'Occupancy Rate' },
          ].map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <p className="font-display text-3xl sm:text-4xl font-light text-yellow-600">{s.value}</p>
              <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/40 mt-1">{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Investment Cards */}
      <section className="py-24 px-[5vw]">
        <AnimatedSection className="mb-16">
          <SectionLabel>Active Opportunities</SectionLabel>
          <h2 className="font-display text-4xl font-light text-white">
            Current Investment Offerings
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {investments.map((inv, i) => (
            <AnimatedSection key={inv.id} delay={i * 0.1}>
              <GlassCard className="overflow-hidden group">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={inv.image}
                    alt={inv.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className={inv.status === 'Open' 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-yellow-600/20 text-yellow-600'
                    }>
                      {inv.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="font-display text-4xl font-light text-yellow-600">{inv.expectedReturn}</p>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/60">Expected Return</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-yellow-600/60 mb-1">{inv.category}</p>
                  <h3 className="font-display text-2xl font-light text-white mb-2">{inv.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">{inv.description}</p>

                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-yellow-600/50" />
                      <div>
                        <p className="text-[9px] tracking-wider uppercase text-white/40">Min. Investment</p>
                        <p className="text-sm text-white">{inv.minInvestment}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-yellow-600/50" />
                      <div>
                        <p className="text-[9px] tracking-wider uppercase text-white/40">Return</p>
                        <p className="text-sm text-white">{inv.expectedReturn}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-600/50" />
                      <div>
                        <p className="text-[9px] tracking-wider uppercase text-white/40">Term</p>
                        <p className="text-sm text-white">{inv.term}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="mt-4 flex items-center justify-between w-full p-3 bg-yellow-600/10 hover:bg-yellow-600/20 text-yellow-600 transition-colors group/btn rounded-lg"
                  >
                    <span className="text-[12px] tracking-[0.1em] uppercase">Book Consultation</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <GoldLine className="mx-[5vw]" />

      {/* Why Invest */}
      <section className="py-24 px-[5vw]">
        <AnimatedSection>
          <SectionLabel>Why BeMore Properties</SectionLabel>
          <h2 className="font-display text-4xl font-light text-white mb-12">The Investment Advantage</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Proven Track Record', desc: 'R300M+ in successfully developed assets with consistent returns across market cycles.' },
            { title: 'Strategic Locations', desc: 'Developments in high-demand areas near universities, transport hubs, and urban centres.' },
            { title: 'Expert Management', desc: '16+ years of built environment experience with a team of 35+ industry professionals.' },
            { title: 'Diversified Portfolio', desc: 'Access to residential, student accommodation, and mixed-use developments for balanced risk.' },
            { title: 'Institutional Partners', desc: 'Backed by the National Empowerment Fund and Gauteng Partnership Fund.' },
            { title: 'Transparent Reporting', desc: 'Regular investor updates, clear milestones, and full project transparency throughout.' },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <GlassCard className="p-6 h-full hover:border-yellow-600/30 transition-all duration-300">
                <h3 className="font-display text-lg text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}