import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import existing project images
import Varsity1 from '../assets/images/Varsity1.jpg';
import Thuto1 from '../assets/images/Thuto1.jpeg';
import Celestial1 from '../assets/images/Celestial1.jpg';
import Kaelo1 from '../assets/images/kaelo1.jpg';


// Import real Ga-Rankuwa renders (from Mr Sthole's MUMA/OTL Group/BukhoBuhle Architects documents)
import GaRankuwaResidential1 from '../assets/images/ga-rankuwa-residential-1.jpg';
import GaRankuwaStudentAccommodation1 from '../assets/images/ga-rankuwa-student-accommodation-1.jpg';

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
          : project.status === 'Ongoing'
          ? 'bg-yellow-600 text-black'
          : 'bg-blue-600 text-white'
      }`}>
        {project.status}
      </div>
      
      {/* Project Type Badge */}
      <div className="absolute top-4 left-4 px-3 py-1 text-[9px] tracking-wider uppercase rounded-full bg-black/70 text-white/80 border border-white/10">
        {project.type || 'BeMore Project'}
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

// Complete Projects Data - Preserving all existing images
const projectsData = [
  // Existing Projects with their original images
  {
    slug: 'varsity-living',
    title: 'Varsity Living',
    category: 'Property Management',
    location: 'Pretoria, South Africa',
    status: 'Completed',
    type: 'BeMore Project',
    image: Varsity1,
  },
  {
    slug: 'thuto-residence',
    title: 'Thuto Residence',
    category: 'Property Management',
    location: 'Pretoria, South Africa',
    status: 'Completed',
    type: 'BeMore Project',
    image: Thuto1,
  },
  {
    slug: 'the-celestial',
    title: 'The Celestial',
    category: 'Mixed Use',
    location: 'Pretoria, South Africa',
    status: 'Completed',
    type: 'BeMore Project',
    image: Celestial1,
  },
  {
    slug: 'kaelo-student-rez',
    title: 'Kaelo Student Rez',
    category: 'Property Management',
    location: 'Pretoria, South Africa',
    status: 'Completed',
    type: 'BeMore Project',
    image: Kaelo1,
  },

  // Ga-Rankuwa Developments (Erf 3782 & Erf 2903) — now using real MUMA/OTL Group renders
  {
    slug: 'ga-rankuwa-residential',
    title: 'Ga-Rankuwa Residential Development',
    category: 'Residential',
    location: 'Ga-Rankuwa Unit 9, Pretoria (Erf 3782)',
    status: 'Ongoing',
    type: 'BeMore Project',
    image: GaRankuwaResidential1,
  },
  {
    slug: 'ga-rankuwa-student-accommodation',
    title: 'Ga-Rankuwa Student Accommodation',
    category: 'Student Housing',
    location: 'Ga-Rankuwa Unit 9, Pretoria (Erf 2903)',
    status: 'Ongoing',
    type: 'BeMore Project',
    image: GaRankuwaStudentAccommodation1,
  },
  
  // Other BeMore Properties Own Projects
  {
    slug: '125-village-hub',
    title: '125 Village Hub',
    category: 'Mixed Use',
    location: 'Pretoria, South Africa',
    status: 'Completed',
    type: 'BeMore Project',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  },
  {
    slug: 'barui',
    title: 'Barui',
    category: 'Coming Soon',
    location: 'Pretoria, South Africa',
    status: 'Ongoing',
    type: 'BeMore Project',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
  },
  {
    slug: 'elnita',
    title: 'Elnita',
    category: 'Completed',
    location: 'Pretoria, South Africa',
    status: 'Completed',
    type: 'BeMore Project',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop',
  },
  {
    slug: 'hospital-coming-soon',
    title: 'Hospital Development',
    category: 'Coming Soon',
    location: 'Pretoria, South Africa',
    status: 'Planning',
    type: 'BeMore Project',
    image: 'https://images.unsplash.com/photo-1587351021759-3772687fe598?w=600&h=400&fit=crop',
  },
  
  // Partner Projects
  {
    slug: 'partner-student-housing',
    title: 'Student Housing Development',
    category: 'Property Management',
    location: 'Johannesburg, South Africa',
    status: 'Completed',
    type: 'Partner Project',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&h=400&fit=crop',
  },
  {
    slug: 'partner-mixed-use',
    title: 'Mixed Use Complex',
    category: 'Mixed Use',
    location: 'Cape Town, South Africa',
    status: 'Ongoing',
    type: 'Partner Project',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop',
  },
  {
    slug: 'partner-residential',
    title: 'Residential Estate',
    category: 'Property Management',
    location: 'Durban, South Africa',
    status: 'Completed',
    type: 'Partner Project',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
  },
];

// Categories
const categories = ['All', 'BeMore Projects', 'Partner Projects', 'Completed', 'Ongoing', 'Coming Soon', 'Property Management', 'Mixed Use', 'Residential', 'Student Housing'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' 
    ? projectsData 
    : active === 'BeMore Projects' 
    ? projectsData.filter(p => p.type === 'BeMore Project')
    : active === 'Partner Projects'
    ? projectsData.filter(p => p.type === 'Partner Project')
    : projectsData.filter(p => p.status === active || p.category === active);

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
              A curated portfolio of developments including our own projects and partner collaborations across South Africa.
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