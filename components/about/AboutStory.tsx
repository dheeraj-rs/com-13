'use client';

import { useState, useEffect } from 'react';

export default function AboutStory() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className={mounted ? 'animate-slide-up' : 'opacity-0'}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              From Humble Beginnings to <span className="text-amber-600">Excellence</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-700">
              <p>
                Royalwood was founded in 1998 by master craftsman Rajesh Kumar, who started 
                with just a small workshop and a vision to create furniture that would last 
                generations. What began as a one-man operation has grown into a renowned 
                furniture house known for exceptional quality and timeless design.
              </p>
              <p>
                Our journey has been marked by countless hours of perfecting techniques, 
                sourcing the finest materials, and building relationships with clients who 
                value true craftsmanship. Every piece we create carries forward this legacy 
                of dedication and artistry.
              </p>
              <p>
                Today, Royalwood stands as a testament to what's possible when passion meets 
                purpose. Our team of skilled artisans continues to push the boundaries of 
                furniture design while staying true to the traditional techniques that define 
                our craft.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className={mounted ? 'animate-fade-in' : 'opacity-0'}>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-amber-600"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-center">
                  <div className="absolute left-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-xl font-semibold text-slate-900">1998</h3>
                    <p className="text-slate-600">Royalwood founded with a single workshop</p>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="absolute left-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-xl font-semibold text-slate-900">2005</h3>
                    <p className="text-slate-600">Expanded to a 10,000 sq ft facility</p>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="absolute left-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-xl font-semibold text-slate-900">2012</h3>
                    <p className="text-slate-600">Won Best Furniture Designer Award</p>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="absolute left-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-xl font-semibold text-slate-900">2020</h3>
                    <p className="text-slate-600">Launched sustainable furniture line</p>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="absolute left-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-xl font-semibold text-slate-900">2024</h3>
                    <p className="text-slate-600">Over 1000 custom pieces delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}