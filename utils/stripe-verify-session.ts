'use server';

import { stripeClient } from "@/utils/stripe-client";

export interface StripeSessionData {
  amount: string;
  customer_name: string;
  customer_email: string;
  status: string;
  date: string;
}

/**
 * Verifies a Stripe Checkout Session and returns payment details
 */
export async function verifyStripeSession(sessionId: string): Promise<StripeSessionData | null> {
  try {
    const session = await stripeClient.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : '0.00';
      const date = session.created ? new Date(session.created * 1000).toLocaleDateString() : new Date().toLocaleDateString();

      return {
        amount,
        customer_name: session.customer_details?.name || 'Valued Customer',
        customer_email: session.customer_details?.email || '',
        status: session.payment_status,
        date
      };
    }

    return null;
  } catch (error) {
    console.error('Error verifying Stripe session:', error);
    return null;
  }
}

