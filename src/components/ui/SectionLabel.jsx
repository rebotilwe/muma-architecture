import React from 'react';

export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8 h-px bg-gold" />
      <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-body">
        {children}
      </span>
    </div>
  );
}