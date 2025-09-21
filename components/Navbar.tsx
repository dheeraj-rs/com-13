'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-amber-400">
            <Crown className="h-8 w-8" />
            <span className="text-xl font-bold">Royalwood</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-amber-400 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Cart Button */}
            <Link href="/cart">
              <Button variant="outline" size="sm" className="relative border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-400 text-slate-900 rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                    {state.itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-amber-400" />
              {state.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-400 text-slate-900 rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                  {state.itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-amber-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-slate-300 hover:text-amber-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}