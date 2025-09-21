'use client';

import { useState, useEffect } from 'react';

export default function AboutTeam() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & Master Craftsman',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'With over 30 years of experience, Rajesh founded Royalwood with a vision to create timeless furniture.',
    },
    {
      name: 'Priya Sharma',
      role: 'Design Director',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Priya brings modern design sensibilities to our traditional craftsmanship, creating contemporary masterpieces.',
    },
    {
      name: 'Vikram Singh',
      role: 'Lead Artisan',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Vikram oversees our workshop operations, ensuring every piece meets our quality standards.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Meet Our <span className="text-amber-600">Team</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            The talented individuals behind every piece of Royalwood furniture, 
            each bringing their unique expertise and passion to our craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className={`text-center group ${mounted ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-64 h-64 object-cover rounded-full mx-auto shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-amber-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">{member.name}</h3>
              <p className="text-amber-600 font-medium mb-4">{member.role}</p>
              <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}