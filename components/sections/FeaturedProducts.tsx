'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

export default function FeaturedProducts() {
  const [mounted, setMounted] = useState(false);
  const { dispatch } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  const products = [
    {
      id: '1',
      name: 'Royal Oak Dining Table',
      price: 45000,
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Handcrafted solid oak dining table with intricate carved details',
      category: 'Dining',
      inStock: true,
    },
    {
      id: '2',
      name: 'Heritage Bookshelf',
      price: 32000,
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Classic wooden bookshelf with adjustable shelves',
      category: 'Storage',
      inStock: true,
    },
    {
      id: '3',
      name: 'Executive Desk',
      price: 55000,
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Premium executive desk with built-in drawers and cable management',
      category: 'Office',
      inStock: true,
    },
  ];

  const handleAddToCart = (product: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success(`${product.name} added to cart!`);
  };

  if (!mounted) return <div className="opacity-0" />;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Featured <span className="text-amber-600">Collection</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Discover our handpicked selection of premium furniture pieces, 
            each crafted with meticulous attention to detail and timeless design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={product.id} className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${mounted ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="bg-slate-900 hover:bg-amber-600 text-white px-4 py-2 rounded-lg group"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/catalog">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full group">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}