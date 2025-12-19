import { Suspense } from 'react';
import { PaymentSuccessContent } from './success-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for choosing PKWY Wellness",
  openGraph: {
    title: "Thank You | PKWY Wellness",
    description: "Thank you for choosing PKWY Wellness",
  },
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
}

