import Link from 'next/link';
import { Crown, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 text-amber-400 mb-4">
              <Crown className="h-8 w-8" />
              <span className="text-2xl font-bold">Royalwood</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              Crafting exceptional furniture that combines traditional woodworking techniques 
              with contemporary design. Each piece tells a story of quality, elegance, and timeless beauty.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-amber-400 transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-amber-400 transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-amber-400 transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="hover:text-amber-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/catalog" className="hover:text-amber-400 transition-colors">Catalog</Link></li>
              <li><Link href="/cart" className="hover:text-amber-400 transition-colors">Cart</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span>info@royalwood.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 Royalwood Furniture. All rights reserved. Crafted with precision and passion.</p>
        </div>
      </div>
    </footer>
  );
}