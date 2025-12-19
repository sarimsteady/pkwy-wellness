'use server';

import { stripeClient } from "@/utils/stripe-client";

/**
 * Verifies a Stripe Checkout Session and returns payment details
 */
export async function verifyStripeSession(sessionId: string): Promise<{ amount: string } | null> {
  try {
    const session = await stripeClient.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : '0.00';
      return { amount };
    }

    return null;
  } catch (error) {
    console.error('Error verifying Stripe session:', error);
    return null;
  }
}

