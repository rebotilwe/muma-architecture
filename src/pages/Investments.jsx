import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, DollarSign, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/badge';
import GoldLine from '@/components/ui/GoldLine';
import { investments } from '@/lib/projectsData';

export default function Investments() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/6a057e9b333ab1fe42032232/16b76aa39_generated_12807682.png"
            alt="Premium investment property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/30" />
        </div>
        <div className="relative z-10 px-[5vw] pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>Invest With MUMA</SectionLabel>
            <h1 className="font-display text-5xl sm:text-7xl font-light text-alabaster">
              Investment<br /><span className="text-gold">Opportunities</span>
            </h1>
            <p className="mt-4 text-lg text-alabaster/60 max-w-xl">
              Strategic property investment opportunities with premium returns, backed by 16+ years of development expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key metrics */}
      <section className="py-12 px-[5vw] border-b border-gold/10 bg-graphite/30">
        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { value: 'R300M+', label: 'Assets Under Management' },
            { value: '16%', label: 'Average IRR' },
            { value: '95%+', label: 'Occupancy Rate' },
          ].map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <p className="font-display text-3xl sm:text-4xl font-light text-gold">{s.value}</p>
              <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-muted-foreground mt-1">{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Investment Cards */}
      <section className="py-24 px-[5vw]">
        <AnimatedSection className="mb-16">
          <SectionLabel>Active Opportunities</SectionLabel>
          <h2 className="font-display text-4xl font-light text-alabaster">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className={`text-[10px] tracking-wider uppercase border-0 ${
                      inv.status === 'Open' ? 'bg-emerald-muted/80 text-alabaster' : 'bg-gold/20 text-gold'
                    }`}>
                      {inv.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="font-display text-4xl font-light text-gold">{inv.expectedReturn}</p>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-alabaster/60">Expected Return</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">{inv.category}</p>
                  <h3 className="font-display text-2xl font-light text-alabaster mb-2">{inv.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{inv.description}</p>

                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-gold/50" />
                      <div>
                        <p className="text-[9px] tracking-wider uppercase text-muted-foreground">Min. Investment</p>
                        <p className="text-sm text-alabaster">{inv.minInvestment}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-gold/50" />
                      <div>
                        <p className="text-[9px] tracking-wider uppercase text-muted-foreground">Return</p>
                        <p className="text-sm text-alabaster">{inv.expectedReturn}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold/50" />
                      <div>
                        <p className="text-[9px] tracking-wider uppercase text-muted-foreground">Term</p>
                        <p className="text-sm text-alabaster">{inv.term}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="mt-4 flex items-center justify-between w-full p-3 bg-gold/10 hover:bg-gold/20 text-gold transition-colors group/btn"
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
          <SectionLabel>Why MUMA</SectionLabel>
          <h2 className="font-display text-4xl font-light text-alabaster mb-12">The Investment Advantage</h2>
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
              <GlassCard className="p-6 h-full">
                <h3 className="font-display text-lg text-alabaster mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}