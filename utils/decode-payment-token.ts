'use server';

import { PaymentParams, decodePaymentToken } from '@/utils/stripe-payment';

/**
 * Server action to decode payment token
 */
export async function decodePaymentTokenAction(token: string): Promise<PaymentParams | null> {
  return decodePaymentToken(token);
}

