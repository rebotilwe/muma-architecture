import React from 'react';

export default function GoldLine({ className = '' }) {
  return <div className={`h-px bg-gold/30 ${className}`} />;
}