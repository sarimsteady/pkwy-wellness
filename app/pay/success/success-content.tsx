'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { About } from '@/config/about';
import { verifyStripeSession } from '@/utils/stripe-verify-session';

export function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [isVerifying, setIsVerifying] = useState(true);
  const [paymentAmount, setPaymentAmount] = useState<string | null>(null);

  useEffect(() => {
    const verifySession = async () => {
      if (!sessionId) {
        setIsVerified(false);
        setIsVerifying(false);
        return;
      }

      try {
        const result = await verifyStripeSession(sessionId);
        if (result) {
          setIsVerified(true);
          setPaymentAmount(result.amount);
        } else {
          setIsVerified(false);
        }
      } catch (error) {
        console.error('Error verifying session:', error);
        setIsVerified(false);
      } finally {
        setIsVerifying(false);
      }
    };

    verifySession();
  }, [sessionId]);

  if (isVerifying) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Verifying payment...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-red-600">
              Payment Verification Failed
            </CardTitle>
            <CardDescription>
              We couldn&apos;t verify your payment. Please contact {About.companyName} if you have any questions.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link href="/">
              <Button variant="outline">
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
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-16 h-16 text-green-600" />
          </div>
          <CardTitle className="text-3xl">
            Payment Successful!
          </CardTitle>
          <CardDescription>
            Thank you for your payment to {About.companyLegalName}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          {paymentAmount && (
            <div className="p-4 bg-primary/5 rounded-lg">
              <p className="text-2xl font-bold text-gray-900">
                ${paymentAmount}
              </p>
              <p className="text-sm text-gray-600 mt-1">Amount Paid</p>
            </div>
          )}
          <div className="pt-4">
            <Link href="/">
              <Button size="lg" className="w-full">
                Return to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

