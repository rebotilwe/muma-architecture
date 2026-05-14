import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import ProjectCard from '@/components/ui/ProjectCard';
import { projectsData } from '@/lib/projectsData';

export default function FeaturedProjects() {
  const featured = projectsData.slice(0, 4);

  return (
    <section className="py-24 px-[5vw]">
      <AnimatedSection>
        <SectionLabel>Portfolio</SectionLabel>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-light text-alabaster">
            Featured Projects
          </h2>
          <Link
            to="/projects"
            className="flex items-center gap-2 text-gold text-sm tracking-wider uppercase hover:gap-4 transition-all duration-300"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((project, i) => (
          <AnimatedSection key={project.slug} delay={i * 0.1}>
            <ProjectCard project={project} index={i} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}