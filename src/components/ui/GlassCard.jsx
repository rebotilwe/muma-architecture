import React from 'react';

export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <div className={`
      bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-lg
      ${hover ? 'hover:bg-white/[0.06] hover:border-gold/20 transition-all duration-500' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}