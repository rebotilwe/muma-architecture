import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

export default function AboutPreview() {
  return (
    <section className="py-24 px-[5vw]">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-alabaster mb-6 leading-tight">
            Visionary Development,<br />
            <span className="text-gold">Exceptional Returns</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            MUMA is a leading African property development, architecture, and construction firm. 
            A subsidiary of the Be More Group, we have grown our property portfolio to over R300 million 
            over 16 years of built environment expertise.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            From training aspiring developers to delivering turnkey developments, we create and capture value 
            for property entrepreneurs across the African continent.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-3 text-gold text-sm tracking-wider uppercase hover:gap-5 transition-all duration-300"
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
            <div className="absolute -bottom-6 -left-6 bg-graphite border border-gold/20 p-6 rounded-lg hidden sm:block">
              <p className="font-display text-3xl text-gold font-light">16+</p>
              <p className="text-xs text-muted-foreground tracking-wider uppercase">Years of Excellence</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}