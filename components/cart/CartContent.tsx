'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

export default function CartContent() {
  const [mounted, setMounted] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const { state, dispatch } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    toast.success('Item removed from cart');
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'welcome10') {
      toast.success('Coupon applied! 10% discount added.');
    } else {
      toast.error('Invalid coupon code');
    }
    setCouponCode('');
  };

  const shipping = state.total > 50000 ? 0 : 2000;
  const discount = couponCode.toLowerCase() === 'welcome10' ? state.total * 0.1 : 0;
  const finalTotal = state.total - discount + shipping;

  if (!mounted) return <div className="opacity-0" />;

  if (state.items.length === 0) {
    return (
      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <ShoppingBag className="h-24 w-24 text-slate-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Your cart is empty</h2>
            <p className="text-slate-600 mb-8">
              Looks like you haven't added any furniture to your cart yet.
            </p>
            <Link href="/catalog">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full">
                Continue Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Shopping Cart</h1>
          <p className="text-slate-600">{state.itemCount} item{state.itemCount > 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-0">
                {state.items.map((item, index) => (
                  <div key={item.id} className={`p-6 ${index !== state.items.length - 1 ? 'border-b' : ''}`}>
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <div className="flex-grow mb-4 sm:mb-0">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.name}</h3>
                            <p className="text-slate-600 text-sm mb-2">{item.description}</p>
                            <p className="text-slate-500 text-sm">Category: {item.category}</p>
                          </div>

                          <div className="flex flex-col sm:items-end">
                            <p className="text-xl font-bold text-amber-600 mb-4">
                              ₹{item.price.toLocaleString()}
                            </p>

                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-2 mb-4">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-12 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>

                            {/* Remove Button */}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-medium">₹{state.total.toLocaleString()}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>-₹{discount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-slate-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `₹${shipping.toLocaleString()}`}
                  </span>
                </div>

                {shipping === 0 && (
                  <p className="text-sm text-green-600">Free shipping on orders over ₹50,000!</p>
                )}

                <hr />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-amber-600">₹{finalTotal.toLocaleString()}</span>
                </div>

                {/* Coupon Code */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Coupon Code</label>
                  <div className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Enter code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-grow"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={applyCoupon}
                      disabled={!couponCode}
                    >
                      Apply
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500">Try: WELCOME10 for 10% off</p>
                </div>

                <Link href="/checkout" className="w-full">
                  <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/catalog" className="w-full">
                  <Button variant="outline" size="lg" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <Card className="mt-6">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-slate-600">
                  🔒 Secure checkout with SSL encryption
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}