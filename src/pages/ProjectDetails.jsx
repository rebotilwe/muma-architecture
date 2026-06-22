import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Ruler, DollarSign, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectsData as projects } from '@/lib/projectsData';

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

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-[5vw] bg-black">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-yellow-600 hover:underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  const specItems = [
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: Ruler, label: 'Total Area', value: project.details?.sqm || 'N/A' },
    { icon: Calendar, label: 'Year', value: project.details?.year || 'N/A' },
    { icon: DollarSign, label: 'Project Value', value: project.details?.value || 'N/A' },
  ];

  return (
    <div className="bg-black">
      {/* Hero Image */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end px-[5vw] pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-yellow-600/70 hover:text-yellow-600 text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Badge className={project.status === 'Completed'
                ? 'bg-emerald-600 text-white'
                : 'bg-yellow-600/20 text-yellow-600'
              }>
                {project.status}
              </Badge>
              <span className="text-[11px] tracking-[0.2em] uppercase text-yellow-600/60">{project.category}</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-light text-white">{project.title}</h1>
            <div className="flex items-center gap-2 mt-4 text-white/60">
              <MapPin className="w-4 h-4 text-yellow-600" />
              <span>{project.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specification Grid */}
      <section className="py-12 px-[5vw] border-b border-yellow-600/10 bg-gray-900/30">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {specItems.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-600/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-1">{item.label}</p>
                  <p className="text-lg font-display text-white">{item.value}</p>
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
            <h2 className="font-display text-3xl font-light text-white mb-6">About This Development</h2>
            <p className="text-white/60 leading-relaxed text-lg">{project.description}</p>
            <div className="mt-8">
              <GlassCard className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-yellow-600/10 flex items-center justify-center">
                    <span className="font-display text-2xl text-yellow-600">
                      {project.details?.units?.split(' ')[0] || 'N/A'}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-display text-lg">
                      Total {project.details?.units?.split(' ')[1] || 'Units'}
                    </p>
                    <p className="text-sm text-white/40">
                      Across {project.details?.sqm || 'N/A'} of developed space
                    </p>
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
                className="flex items-center justify-between p-4 bg-yellow-600 text-black hover:bg-yellow-500 transition-colors group"
              >
                <span className="text-[13px] tracking-[0.1em] uppercase font-medium">Enquire About This Project</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/investments"
                className="flex items-center justify-between p-4 border border-yellow-600/30 text-yellow-600 hover:bg-yellow-600/5 transition-colors group"
              >
                <span className="text-[13px] tracking-[0.1em] uppercase">Investment Opportunities</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 px-[5vw] border-t border-yellow-600/10">
          <AnimatedSection>
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="font-display text-3xl font-light text-white mb-8">Project Images</h2>
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
      )}
    </div>
  );
}