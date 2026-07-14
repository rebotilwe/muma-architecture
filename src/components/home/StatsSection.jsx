import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 'R500M+', label: 'Asset Portfolio' },
  { value: 'R10B', label: 'Pipeline Projects' },
  { value: '18+', label: 'Years Experience' },
];

const AnimatedSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default function StatsSection() {
  return (
    <section className="py-20 px-[5vw] border-y border-yellow-600/10 bg-gray-900/50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 lg:divide-x lg:divide-yellow-600/10">
        {stats.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.1}>
            <div className="text-center px-4">
              <p className="font-display text-4xl sm:text-5xl font-light text-yellow-600 mb-2">
                {stat.value}
              </p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 font-body">
                {stat.label}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}