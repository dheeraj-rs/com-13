import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartContent from '@/components/cart/CartContent';

export const metadata: Metadata = {
  title: 'Shopping Cart - Royalwood Furniture',
  description: 'Review your selected furniture items and proceed to checkout.',
};

export default function Cart() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <CartContent />
      </div>
      <Footer />
    </main>
  );
}