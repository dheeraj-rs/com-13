'use client';

import { useState, useEffect } from 'react';
import { Award, Leaf, Heart, Sparkles } from 'lucide-react';

export default function AboutValues() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never compromise on quality, ensuring every piece meets our exacting standards of craftsmanship.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Our commitment to the environment drives us to use responsibly sourced materials and eco-friendly practices.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every artisan at Royalwood brings deep passion and dedication to their craft, visible in every finished piece.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'We blend traditional techniques with modern design and technology to create furniture for contemporary living.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Our <span className="text-amber-600">Values</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            These core principles guide everything we do, from selecting materials 
            to delivering your finished furniture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group ${mounted ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors duration-300">
                <value.icon className="h-8 w-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}