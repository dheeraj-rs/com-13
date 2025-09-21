'use client';

import { useState, useEffect } from 'react';

export default function AboutHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center parallax-bg"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1920)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70"></div>
      
      {/* Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Our <span className="text-amber-400">Story</span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
          For over 25 years, we've been crafting furniture that tells stories, 
          creates memories, and transforms houses into homes.
        </p>
      </div>
    </section>
  );
}