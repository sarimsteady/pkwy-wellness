'use server';

export interface PaymentParams {
  amount: string;
  customer?: string;
  paymentFor?: string;
}

const PAYMENT_SECRET = process.env.PAYMENT_SECRET || 'default-secret-key-change-in-production';

/**
 * Simple hash function for checksum
 */
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36).substring(0, 8);
}

/**
 * Creates a secure payment token from payment parameters (server-side only)
 */
export async function createPaymentLink(params: PaymentParams): Promise<string | null> {
  try {
    // Validate amount
    const amount = parseFloat(params.amount);
    if (isNaN(amount) || amount < 1) {
      return null;
    }

    const data = JSON.stringify({
      amount: amount.toFixed(2),
      customer: params.customer?.trim() || '',
      paymentFor: params.paymentFor?.trim() || '',
      timestamp: Date.now(),
    });

    // Base64url encoding (server-side only, using Buffer)
    const encoded = Buffer.from(data).toString('base64url');
    
    // Add a simple checksum for basic integrity checking
    const checksum = simpleHash(encoded + PAYMENT_SECRET);
    const token = `${encoded}.${checksum}`;

    // Get base URL from environment or construct it
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                   (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '');
    
    const urlParams = new URLSearchParams({
      token: token,
    });

    return `${baseUrl}/pay?${urlParams.toString()}`;
  } catch (error) {
    console.error('Error creating payment link:', error);
    return null;
  }
}

