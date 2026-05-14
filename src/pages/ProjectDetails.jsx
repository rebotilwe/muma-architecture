import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Ruler, DollarSign, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/badge';
import { projectsData as projects } from '@/lib/projectsData';

export default function ProjectDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = window.location.pathname.split('/projects/')[1];
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-[5vw]">
        <div className="text-center">
          <h1 className="font-display text-4xl text-alabaster mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-gold hover:underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  const specItems = [
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: Ruler, label: 'Total Area', value: project.details.sqm },
    { icon: Calendar, label: 'Year', value: project.details.year },
    { icon: DollarSign, label: 'Project Value', value: project.details.value },
  ];

  return (
    <div>
      {/* Hero Image */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/20" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end px-[5vw] pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-gold/70 hover:text-gold text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Badge className={`text-[10px] tracking-wider uppercase border-0 ${
                project.status === 'Completed'
                  ? 'bg-emerald-muted/80 text-alabaster'
                  : 'bg-gold/20 text-gold'
              }`}>
                {project.status}
              </Badge>
              <span className="text-[11px] tracking-[0.2em] uppercase text-gold/60">{project.category}</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-light text-alabaster">{project.title}</h1>
            <div className="flex items-center gap-2 mt-4 text-alabaster/60">
              <MapPin className="w-4 h-4 text-gold" />
              <span>{project.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specification Grid */}
      <section className="py-12 px-[5vw] border-b border-gold/10 bg-graphite/30">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {specItems.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-alabaster/40 mb-1">{item.label}</p>
                  <p className="text-lg font-display text-alabaster">{item.value}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Description + Units */}
      <section className="py-24 px-[5vw]">
        <div className="grid lg:grid-cols-3 gap-16">
          <AnimatedSection className="lg:col-span-2">
            <SectionLabel>Overview</SectionLabel>
            <h2 className="font-display text-3xl font-light text-alabaster mb-6">About This Development</h2>
            <p className="text-alabaster/60 leading-relaxed text-lg">{project.description}</p>
            <div className="mt-8">
              <GlassCard className="p-6" hover={false}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center">
                    <span className="font-display text-2xl text-gold">{project.details.units.split(' ')[0]}</span>
                  </div>
                  <div>
                    <p className="text-alabaster font-display text-lg">Total {project.details.units.split(' ')[1] || 'Units'}</p>
                    <p className="text-sm text-alabaster/40">Across {project.details.sqm} of developed space</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <SectionLabel>Quick Actions</SectionLabel>
            <div className="space-y-4 mt-6">
              <Link
                to="/contact"
                className="flex items-center justify-between p-4 bg-gold text-obsidian hover:bg-gold/80 transition-colors group"
              >
                <span className="text-[13px] tracking-[0.1em] uppercase font-medium">Enquire About This Project</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/investments"
                className="flex items-center justify-between p-4 border border-gold/30 text-gold hover:bg-gold/5 transition-colors group"
              >
                <span className="text-[13px] tracking-[0.1em] uppercase">Investment Opportunities</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-[5vw] border-t border-gold/10">
        <AnimatedSection>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="font-display text-3xl font-light text-alabaster mb-8">Project Images</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.gallery.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <img
                src={img}
                alt={`${project.title} gallery ${i + 1}`}
                className="w-full aspect-video object-cover rounded-lg hover:scale-[1.02] transition-transform duration-500"
              />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}