import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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

// Project Card Component
const ProjectCard = ({ project, index }) => (
  <Link to={`/projects/${project.slug}`} className="block group">
    <div className="relative overflow-hidden rounded-lg bg-gray-900">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Status Badge */}
      <div className={`absolute top-4 right-4 px-3 py-1 text-[10px] tracking-wider uppercase rounded-full ${
        project.status === 'Completed'
          ? 'bg-emerald-600 text-white'
          : 'bg-yellow-600 text-black'
      }`}>
        {project.status}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-yellow-600 text-sm font-display">{project.category}</p>
        <p className="text-white font-semibold text-lg">{project.title}</p>
        <p className="text-white/60 text-xs">{project.location}</p>
      </div>
    </div>
    <div className="mt-3">
      <h3 className="text-white font-semibold group-hover:text-yellow-600 transition-colors">{project.title}</h3>
      <p className="text-white/40 text-sm">{project.category}</p>
    </div>
  </Link>
);

// Projects Data - You'll need to import this from your data file
import { projectsData as projects } from '@/lib/projectsData';

const categories = ['All', 'Student Accommodation', 'Residential', 'Mixed Use'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop"
            alt="BeMore Properties development portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        <div className="relative z-10 px-[5vw] pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="font-display text-5xl sm:text-7xl font-light text-white">
              Our <span className="text-yellow-600">Projects</span>
            </h1>
            <p className="mt-4 text-lg text-white/60 max-w-xl">
              A curated portfolio of developments across student accommodation, residential, and mixed-use sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-[5vw] border-b border-yellow-600/10 sticky top-20 z-30 bg-black/90 backdrop-blur-xl">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-[12px] tracking-[0.15em] uppercase whitespace-nowrap transition-all duration-300 border ${
                active === cat
                  ? 'border-yellow-600 bg-yellow-600/10 text-yellow-600'
                  : 'border-white/10 text-white/60 hover:border-yellow-600/30 hover:text-white'
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
            <p className="text-white/60">No projects found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}