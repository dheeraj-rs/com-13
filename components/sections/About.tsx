'use client';

import { useState, useEffect } from 'react';
import { Award, Users, Hammer, Leaf } from 'lucide-react';

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: Hammer,
      title: 'Master Craftsmanship',
      description: 'Every piece is handcrafted by skilled artisans with decades of experience in woodworking.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Materials',
      description: 'We source only the finest sustainable hardwoods from responsibly managed forests.',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in design and craftsmanship by industry professionals.',
    },
    {
      icon: Users,
      title: 'Custom Solutions',
      description: 'Personalized furniture solutions tailored to your unique style and space requirements.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={mounted ? 'animate-slide-up' : 'opacity-0'}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Crafting Dreams Into
              <span className="text-amber-600"> Reality</span>
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              For over 25 years, Royalwood has been creating exceptional furniture that combines 
              traditional craftsmanship with contemporary design. Our passionate team of artisans 
              transforms premium hardwoods into timeless pieces that tell your story.
            </p>
            <p className="text-lg text-slate-700 mb-12 leading-relaxed">
              From concept to completion, we work closely with our clients to bring their vision 
              to life, ensuring every detail meets our exacting standards of quality and beauty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`${mounted ? 'animate-fade-in' : 'opacity-0'} lg:order-first`}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Master craftsman at work"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">25+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}