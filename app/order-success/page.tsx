import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OrderSuccess from '@/components/order/OrderSuccess';

export const metadata: Metadata = {
  title: 'Order Confirmation - Royalwood Furniture',
  description: 'Your order has been successfully placed. Thank you for choosing Royalwood Furniture.',
};

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <OrderSuccess />
      </div>
      <Footer />
    </main>
  );
}