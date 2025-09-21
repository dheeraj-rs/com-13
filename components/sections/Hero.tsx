'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center parallax-bg"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Crafting <span className="text-amber-400">Timeless</span>
          <br />
          Furniture Excellence
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover our collection of handcrafted furniture that blends traditional craftsmanship 
          with contemporary design, creating pieces that will grace your home for generations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/catalog">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 rounded-full group">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link href="/portfolio">
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-3 rounded-full group">
              <Play className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-amber-400 mb-2">25+</h3>
            <p className="text-slate-300">Years Experience</p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-amber-400 mb-2">500+</h3>
            <p className="text-slate-300">Happy Customers</p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-amber-400 mb-2">1000+</h3>
            <p className="text-slate-300">Custom Pieces</p>
          </div>
        </div>
      </div>
    </section>
  );
}