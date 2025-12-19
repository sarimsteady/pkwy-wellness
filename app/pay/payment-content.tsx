'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { About } from '@/config/about';
import { PaymentParams } from '@/utils/payment';
import { decodePaymentTokenAction } from '@/utils/decode-payment-token';
import { stripeCheckout } from '@/utils/stripe-checkout';

export function PaymentPageContent() {
  const searchParams = useSearchParams();
  const tokenParam = searchParams.get('token');

  const [paymentData, setPaymentData] = useState<PaymentParams | null>(null);
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const [isDecodingToken, setIsDecodingToken] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  // Decode token on component mount
  useEffect(() => {
    const decodeToken = async () => {
      if (!tokenParam) {
        setIsTokenValid(false);
        setIsDecodingToken(false);
        return;
      }

      try {
        const decodedData = await decodePaymentTokenAction(tokenParam);

        if (decodedData && decodedData.amount) {
          const parsedAmount = parseFloat(decodedData.amount);
          if (parsedAmount && parsedAmount >= 1) {
            setPaymentData(decodedData);
            setIsTokenValid(true);
          } else {
            setIsTokenValid(false);
          }
        } else {
          setIsTokenValid(false);
        }
      } catch (error) {
        console.error('Token decoding failed:', error);
        setIsTokenValid(false);
      } finally {
        setIsDecodingToken(false);
      }
    };

    decodeToken();
  }, [tokenParam]);

  // Parse and validate the amount from decoded data
  const parsedAmount = paymentData ? parseFloat(paymentData.amount) : null;
  const isValidAmount = parsedAmount && parsedAmount >= 1;

  // Show loading state while decoding token
  if (isDecodingToken) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Decoding payment link...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show error for invalid token
  if (!isTokenValid || !paymentData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-red-600">
              Invalid Payment Link
            </CardTitle>
            <CardDescription>
              This payment link appears to be modified or corrupted. Please request a new link from {About.companyName}.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isValidAmount) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-red-600">
              Invalid Amount
            </CardTitle>
            <CardDescription>
              The payment amount is invalid. Please specify a valid amount of $1.00 or more.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl space-y-4">
        {/* Header */}
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">
            Confirm Payment
          </CardTitle>
          <CardDescription>
            Complete your payment to {About.companyLegalName}
          </CardDescription>
        </CardHeader>

        {/* Amount Display */}
        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardContent>
            <div className="text-center space-y-4">
              <div>
                <p className="text-5xl font-bold text-gray-900">
                  ${parsedAmount!.toFixed(2)}
                </p>
              </div>
              {paymentData.paymentFor && (
                <p className="text-gray-600">
                  {paymentData.paymentFor}
                </p>
              )}
              {paymentData.customer && (
                <p className="text-sm text-gray-500">
                 {paymentData.customer}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Payment Form */}
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <Button 
                size="lg" 
                className="w-full"
                onClick={async () => {
                  if (!paymentData || !parsedAmount) return;
                  
                  setIsProcessing(true);
                  try {
                    const checkoutUrl = await stripeCheckout(parsedAmount, paymentData, tokenParam || undefined);
                    if (checkoutUrl) {
                      window.location.href = checkoutUrl;
                    } else {
                      alert('Failed to create payment session. Please try again.');
                      setIsProcessing(false);
                    }
                  } catch (error) {
                    console.error('Error creating checkout session:', error);
                    alert('An error occurred. Please try again.');
                    setIsProcessing(false);
                  }
                }}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Pay $${parsedAmount!.toFixed(2)}`}
              </Button>
              <p className="text-xs text-gray-500">
                Secure payment powered by Stripe
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back Link */}
        <div className="text-center">
          <Link href="/">
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

