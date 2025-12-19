import { Suspense } from 'react';
import { PaymentPageContent } from './payment-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Make a Payment",
  description: "Make a payment to PKWY Wellness LLC",
  openGraph: {
    title: "Make a Payment | PKWY Wellness",
    description: "Make a payment to PKWY Wellness LLC",
  },
};

export default function PayPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment...</p>
        </div>
      </div>
    }>
      <PaymentPageContent />
    </Suspense>
  );
}

