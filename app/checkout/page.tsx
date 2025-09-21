import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CheckoutContent from '@/components/checkout/CheckoutContent';

export const metadata: Metadata = {
  title: 'Checkout - Royalwood Furniture',
  description: 'Complete your furniture purchase with secure payment options.',
};

export default function Checkout() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <CheckoutContent />
      </div>
      <Footer />
    </main>
  );
}