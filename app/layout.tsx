import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/contexts/CartContext';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Royalwood Furniture - Luxury Handcrafted Furniture',
  description: 'Discover premium handcrafted furniture that combines traditional craftsmanship with modern design. Custom furniture solutions for your home.',
  keywords: 'furniture, handcrafted, luxury, custom furniture, home decor, wood furniture',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}