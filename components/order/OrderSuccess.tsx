'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, Package, Truck, ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';

export default function OrderSuccess() {
  const [mounted, setMounted] = useState(false);
  const { dispatch } = useCart();

  useEffect(() => {
    setMounted(true);
    // Clear cart after successful order
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);

  const orderDetails = {
    orderNumber: 'RW' + Date.now().toString().slice(-8),
    estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
  };

  if (!mounted) return <div className="opacity-0" />;

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-slate-600">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>
        </div>

        {/* Order Details Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Order Number</h3>
                <p className="text-lg font-mono text-amber-600">{orderDetails.orderNumber}</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Estimated Delivery</h3>
                <p className="text-lg text-slate-700">{orderDetails.estimatedDelivery}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="flex-1 bg-amber-600 hover:bg-amber-700">
                <Download className="h-4 w-4 mr-2" />
                Download Invoice
              </Button>
              <Button variant="outline" className="flex-1">
                <Package className="h-4 w-4 mr-2" />
                Track Order
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Order Status Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Current Step - Order Confirmed */}
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900">Order Confirmed</h4>
                  <p className="text-sm text-slate-600">Your order has been received and confirmed.</p>
                </div>
                <span className="text-sm text-green-600">Completed</span>
              </div>

              {/* Next Step - In Production */}
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                  <Package className="h-5 w-5 text-slate-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900">In Production</h4>
                  <p className="text-sm text-slate-600">Your furniture is being crafted by our artisans.</p>
                </div>
                <span className="text-sm text-slate-500">Pending</span>
              </div>

              {/* Final Step - Delivered */}
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                  <Truck className="h-5 w-5 text-slate-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900">Out for Delivery</h4>
                  <p className="text-sm text-slate-600">Your order will be delivered to your address.</p>
                </div>
                <span className="text-sm text-slate-500">Pending</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Next */}
        <Card>
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-900 mb-2">Email Confirmation</h4>
                <p className="text-sm text-slate-600">
                  You'll receive an email confirmation with your order details and tracking information.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-2">Production Updates</h4>
                <p className="text-sm text-slate-600">
                  We'll keep you updated on the progress of your custom furniture pieces.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-2">Delivery Scheduling</h4>
                <p className="text-sm text-slate-600">
                  Our team will contact you to schedule the delivery at your convenience.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-2">Installation Service</h4>
                <p className="text-sm text-slate-600">
                  Professional installation service is available for complex furniture pieces.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center mt-12 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link href="/catalog">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Continue Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/">
            <Button size="lg" variant="outline">
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Support Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8 text-center">
          <h3 className="font-medium text-blue-900 mb-2">Need Help?</h3>
          <p className="text-blue-700 mb-4">
            Have questions about your order? Our customer support team is here to help.
          </p>
          <div className="space-y-2 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <p className="text-blue-600">📞 +91 98765 43210</p>
            <p className="text-blue-600">✉️ support@royalwood.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}