import React from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const stats = [
  { value: 'R300M+', label: 'Asset Portfolio' },
  { value: 'R1B', label: 'Pipeline Projects' },
  { value: '16+', label: 'Years Experience' },
  { value: '35+', label: 'Professionals' },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-[5vw] border-y border-gold/10 bg-graphite/50">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gold/10">
        {stats.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center px-4">
            <p className="font-display text-4xl sm:text-5xl font-light text-gold mb-2">
              {stat.value}
            </p>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-body">
              {stat.label}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}