import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import ProjectCard from '@/components/ui/ProjectCard';
import { projectsData as projects } from '@/lib/projectsData';

const categories = ['All', 'Student Accommodation', 'Residential', 'Mixed Use'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop"
            alt="MUMA development portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/30" />
        </div>
        <div className="relative z-10 px-[5vw] pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="font-display text-5xl sm:text-7xl font-light text-alabaster">
              Our <span className="text-gold">Projects</span>
            </h1>
            <p className="mt-4 text-lg text-alabaster/60 max-w-xl">
              A curated portfolio of developments across student accommodation, residential, and mixed-use sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-[5vw] border-b border-gold/10 sticky top-20 z-30 bg-obsidian/90 backdrop-blur-xl">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-[12px] tracking-[0.15em] uppercase whitespace-nowrap transition-all duration-300 border ${
                active === cat
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-white/10 text-alabaster/60 hover:border-gold/30 hover:text-alabaster'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-[5vw]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <AnimatedSection key={project.slug} delay={i * 0.08}>
                <ProjectCard project={project} index={i} />
              </AnimatedSection>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-alabaster/60">No projects found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}