import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ProjectCard({ project, index }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <Badge className={`text-[10px] tracking-wider uppercase border-0 ${
            project.status === 'Completed' 
              ? 'bg-emerald-muted/80 text-alabaster' 
              : 'bg-gold/20 text-gold'
          }`}>
            {project.status}
          </Badge>
        </div>

        {/* Hover Arrow */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold/0 group-hover:bg-gold flex items-center justify-center transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 text-gold group-hover:text-obsidian transition-colors" />
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold/80 mb-1">{project.category}</p>
          <h3 className="font-display text-xl font-light text-alabaster mb-2">{project.title}</h3>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span className="text-xs">{project.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}