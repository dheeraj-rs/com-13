'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

export default function PortfolioGallery() {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office', 'Custom'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Luxury Living Room Set',
      category: 'Living Room',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete living room furniture set with sofa, coffee table, and accent chairs in rich walnut finish.',
    },
    {
      id: 2,
      title: 'Modern Bedroom Suite',
      category: 'Bedroom',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Contemporary bedroom set featuring bed frame, nightstands, and wardrobe in oak wood.',
    },
    {
      id: 3,
      title: 'Executive Office Desk',
      category: 'Office',
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium executive desk with built-in storage and cable management system.',
    },
    {
      id: 4,
      title: 'Royal Dining Set',
      category: 'Dining',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Handcrafted dining table with matching chairs featuring intricate wood carvings.',
    },
    {
      id: 5,
      title: 'Custom Bookshelf',
      category: 'Custom',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Floor-to-ceiling custom bookshelf designed to fit client\'s specific space requirements.',
    },
    {
      id: 6,
      title: 'Artisan Console Table',
      category: 'Living Room',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant console table with hand-carved details and brass accents.',
    },
    {
      id: 7,
      title: 'Master Bedroom Collection',
      category: 'Bedroom',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete bedroom collection including platform bed, dresser, and mirror set.',
    },
    {
      id: 8,
      title: 'Conference Table',
      category: 'Office',
      image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large conference table crafted from solid teak wood for corporate boardroom.',
    },
  ];

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  if (!mounted) return <div className="opacity-0" />;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'border-amber-600 text-amber-600 hover:bg-amber-50'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer ${mounted ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-amber-400 text-sm font-medium">{item.category}</p>
                    <h3 className="text-white text-lg font-semibold truncate">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogOverlay className="bg-black/80" />
          <DialogContent className="max-w-4xl w-full bg-transparent border-none p-0 overflow-hidden">
            {selectedImage !== null && (
              <div className="relative">
                <img
                  src={filteredItems[selectedImage].image}
                  alt={filteredItems[selectedImage].title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Navigation Buttons */}
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Close Button */}
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white border-0"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {filteredItems[selectedImage].title}
                  </h3>
                  <p className="text-amber-400 text-sm font-medium mb-2">
                    {filteredItems[selectedImage].category}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {filteredItems[selectedImage].description}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}