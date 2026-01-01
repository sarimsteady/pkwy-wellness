'use server';

import Stripe from 'stripe';
import { PaymentParams } from '@/utils/stripe-payment';
import { About } from '@/config/about';
import { headers } from 'next/headers';
import { stripeClient } from '@/utils/stripe-client';

/**
 * Creates a Stripe Checkout Session
 */
export async function stripeCheckout(
    amount: number,
    paymentData: PaymentParams,
    token?: string
): Promise<string | null> {
    try {
        const baseUrl = await getBaseUrl();
        const amountInCents = Math.round(amount * 100);

        const sessionParams: Stripe.Checkout.SessionCreateParams = {
            payment_method_types: ['card', 'amazon_pay', 'link'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: paymentData.paymentFor || 'Payment',
                            description: paymentData.description || `Payment to ${About.companyLegalName}`,
                        },
                        unit_amount: amountInCents,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${baseUrl}/thank-you/womens-pilates-sculpt?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: token
                ? `${baseUrl}/pay?token=${encodeURIComponent(token)}`
                : `${baseUrl}/pay`,
            customer_email: paymentData.customer,
            metadata: {
                paymentFor: paymentData.paymentFor || '',
                description: paymentData.description || '',
                amount: amount.toFixed(2),
            },
        };

        const session = await stripeClient.checkout.sessions.create(sessionParams);

        return session.url;
    } catch (error) {
        console.error('Error creating Stripe checkout session:', error);
        return null;
    }
}


/**
 * Gets the base URL from environment or request headers
 */
async function getBaseUrl(): Promise<string> {
    // Try environment variable first
    if (process.env.NEXT_PUBLIC_SITE_URL) {
        return process.env.NEXT_PUBLIC_SITE_URL;
    }

    // Try Vercel URL
    if (process.env.VERCEL_ENV === "production") {
        return `https://pkwywellness.com`;
    }

    // Fallback: try to get from headers (for server-side)
    try {
        const headersList = await headers();
        const host = headersList.get('host');
        const protocol = headersList.get('x-forwarded-proto') || 'https';
        if (host) {
            return `${protocol}://${host}`;
        }
    } catch (error) {
        console.error(error);
    }

    // Last resort: localhost (for development)
    return 'http://localhost:3000';
}