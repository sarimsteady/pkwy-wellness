'use server';

import { stripeClient } from "@/utils/stripe-client";

export async function getCustomerPortalUrl(email: string) {
    if (!email || !email.includes('@')) {
        return { error: "Please enter a valid email address." };
    }

    try {
        // 1. Find the customer in Stripe by email
        const customers = await stripeClient.customers.list({
            email: email.toLowerCase(),
            limit: 1,
        });

        if (customers.data.length === 0) {
            return { error: "No active memberships found for this email address. If you recently joined, please wait a few minutes or contact support." };
        }

        const customerId = customers.data[0].id;

        // 2. Create a Billing Portal session
        const portalSession = await stripeClient.billingPortal.sessions.create({
            customer: customerId,
            return_url: `${(process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production") ? 'https://pkwywellness.com' : 'http://localhost:3000'}/dashboard`,
        });

        return { url: portalSession.url };
    } catch (error) {
        console.error('Error in getCustomerPortalUrl:', error);
        return { error: "An unexpected error occurred. Please try again later." };
    }
}
