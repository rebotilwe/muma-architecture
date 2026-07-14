import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="w-8 h-px bg-yellow-600" />
    <span className="text-[11px] tracking-[0.3em] uppercase text-yellow-600 font-body">
      {children}
    </span>
  </div>
);

export default function AboutPreview() {
  return (
    <section className="py-24 px-[5vw] bg-black">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-white mb-6 leading-tight">
            Visionary Development,<br />
            <span className="text-yellow-600">Expert Consulting</span>
          </h2>
          <p className="text-base text-gray-400 leading-relaxed mb-4">
            BeMore Properties is a leading African property development firm, part of the BeMore Group of companies.
            We have grown our property portfolio to over R500 million over 18 years of built environment expertise.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-8">
            Whether you're starting your first development or expanding your portfolio,
            our team is ready to make your vision a reality.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-3 text-yellow-600 text-sm tracking-wider uppercase hover:gap-5 transition-all duration-300"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative">
            <img
              src="https://media.base44.com/images/public/6a057e9b333ab1fe42032232/fe97cd93a_generated_1e9231d2.png"
              alt="Premium construction materials and craftsmanship"
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-gray-900 border border-yellow-600/20 p-6 rounded-lg hidden sm:block">
              <p className="font-display text-3xl text-yellow-600 font-light">18+</p>
              <p className="text-xs text-gray-400 tracking-wider uppercase">Years of Excellence</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}