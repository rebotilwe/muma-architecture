import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a057e9b333ab1fe42032232/bb46afaa6_generated_0ced675c.png"
          alt="BeMore Properties flagship development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Gold structural lines */}
      <div className="absolute top-0 left-[5vw] w-px h-full bg-yellow-600/[0.07]" />
      <div className="absolute top-0 left-[50vw] w-px h-full bg-yellow-600/[0.04]" />
      <div className="absolute top-0 right-[5vw] w-px h-full bg-yellow-600/[0.07]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-[5vw] pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-yellow-600" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-yellow-600 font-body">
              BeMore Properties · Architecture · Construction · Investment
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-light text-white leading-[0.95] max-w-4xl"
        >
          Building the<br />
          <span className="text-yellow-600">African Legacy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-base sm:text-lg text-white/60 max-w-xl leading-relaxed font-body font-light"
        >
          A turnkey property development firm creating and capturing value across the African continent. 
          Over R300 million in developed assets and pressing toward R1 billion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-600 text-black text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-yellow-500 transition-colors duration-300"
          >
            View Projects
            <ArrowDownRight className="w-4 h-4" />
          </Link>
          <Link
            to="/investments"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-[13px] tracking-[0.15em] uppercase hover:border-yellow-600 hover:text-yellow-600 transition-all duration-300"
          >
            Investment Opportunities
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-[5vw] flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 rotate-90 origin-center translate-y-8">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-yellow-600/50 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}