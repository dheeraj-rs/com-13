'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Smartphone, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function CheckoutContent() {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { state } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Shipping Address
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Special Instructions
    instructions: '',
  });

  useEffect(() => {
    setMounted(true);
    if (state.items.length === 0) {
      router.push('/cart');
    }
  }, [state.items.length, router]);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const shipping = state.total > 50000 ? 0 : 2000;
  const finalTotal = state.total + shipping;

  const handlePayment = async () => {
    if (!paymentMethod) {
      toast.error('Please select a payment method');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real application, you would integrate with Razorpay here
    toast.success('Payment successful! Your order has been placed.');
    
    // Redirect to order success page
    router.push('/order-success');
    
    setIsProcessing(false);
  };

  const isStepComplete = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.address && formData.city && formData.state && formData.pincode;
      case 3:
        return paymentMethod;
      default:
        return false;
    }
  };

  if (!mounted) return <div className="opacity-0" />;

  if (state.items.length === 0) {
    return null; // Will redirect in useEffect
  }

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/cart" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNumber
                      ? 'bg-amber-600 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {stepNumber}
                </div>
                <span className="ml-2 text-sm font-medium text-slate-700">
                  {stepNumber === 1 && 'Personal Info'}
                  {stepNumber === 2 && 'Shipping'}
                  {stepNumber === 3 && 'Payment'}
                </span>
                {stepNumber < 3 && <div className="w-12 h-0.5 bg-slate-200 mx-4" />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Shipping Address */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Shipping Address</h3>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        required
                        rows={3}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Select onValueChange={(value) => handleInputChange('state', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maharashtra">Maharashtra</SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="karnataka">Karnataka</SelectItem>
                            <SelectItem value="gujarat">Gujarat</SelectItem>
                            <SelectItem value="rajasthan">Rajasthan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="pincode">Pincode</Label>
                        <Input
                          id="pincode"
                          value={formData.pincode}
                          onChange={(e) => handleInputChange('pincode', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="instructions">Special Instructions (Optional)</Label>
                      <Textarea
                        id="instructions"
                        value={formData.instructions}
                        onChange={(e) => handleInputChange('instructions', e.target.value)}
                        placeholder="Any special delivery instructions..."
                        rows={3}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Payment Method */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Payment Method</h3>
                    <div className="space-y-4">
                      {/* Razorpay */}
                      <div
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === 'razorpay'
                            ? 'border-amber-600 bg-amber-50'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                        onClick={() => setPaymentMethod('razorpay')}
                      >
                        <div className="flex items-center space-x-3">
                          <CreditCard className="h-6 w-6 text-slate-600" />
                          <div>
                            <p className="font-medium text-slate-900">Razorpay</p>
                            <p className="text-sm text-slate-600">Credit/Debit Cards, Net Banking, Wallets</p>
                          </div>
                        </div>
                      </div>

                      {/* UPI */}
                      <div
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === 'upi'
                            ? 'border-amber-600 bg-amber-50'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                        onClick={() => setPaymentMethod('upi')}
                      >
                        <div className="flex items-center space-x-3">
                          <Smartphone className="h-6 w-6 text-slate-600" />
                          <div>
                            <p className="font-medium text-slate-900">UPI Payment</p>
                            <p className="text-sm text-slate-600">Pay using Google Pay, PhonePe, Paytm</p>
                          </div>
                        </div>
                      </div>

                      {/* Cash on Delivery */}
                      <div
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === 'cod'
                            ? 'border-amber-600 bg-amber-50'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                        onClick={() => setPaymentMethod('cod')}
                      >
                        <div className="flex items-center space-x-3">
                          <Shield className="h-6 w-6 text-slate-600" />
                          <div>
                            <p className="font-medium text-slate-900">Cash on Delivery</p>
                            <p className="text-sm text-slate-600">Pay when your order is delivered</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    disabled={step === 1}
                  >
                    Previous
                  </Button>
                  
                  {step < 3 ? (
                    <Button
                      onClick={() => setStep(step + 1)}
                      disabled={!isStepComplete(step)}
                      className="bg-amber-600 hover:bg-amber-700"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      onClick={handlePayment}
                      disabled={!isStepComplete(step) || isProcessing}
                      className="bg-amber-600 hover:bg-amber-700"
                    >
                      {isProcessing ? 'Processing...' : 'Place Order'}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Order Items */}
                <div className="space-y-3">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div>
                        <p className="font-medium text-slate-900 truncate">{item.name}</p>
                        <p className="text-slate-600">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>

                <hr />

                {/* Pricing Breakdown */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subtotal</span>
                    <span>₹{state.total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString()}`}</span>
                  </div>
                </div>

                <hr />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-amber-600">₹{finalTotal.toLocaleString()}</span>
                </div>

                {/* Security Notice */}
                <div className="bg-slate-50 p-3 rounded-lg text-center">
                  <div className="flex items-center justify-center text-slate-600 text-sm">
                    <Shield className="h-4 w-4 mr-2" />
                    Secure SSL encrypted checkout
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}