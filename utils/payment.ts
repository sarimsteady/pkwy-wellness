export interface PaymentParams {
  amount: string;
  customer?: string;
  paymentFor?: string;
}

const PAYMENT_SECRET = process.env.PAYMENT_SECRET || 'default-secret-key-change-in-production';

/**
 * Base64url decoding (server-side only)
 */
function base64UrlDecode(str: string): string {
  return Buffer.from(str, 'base64url').toString();
}

/**
 * Decodes and validates a payment token
 */
export function decodePaymentToken(token: string): PaymentParams | null {
  try {
    const [encoded, providedChecksum] = token.split('.');
    
    if (!encoded || !providedChecksum) {
      return null;
    }

    // Verify checksum
    const expectedChecksum = simpleHash(encoded + PAYMENT_SECRET);
    if (providedChecksum !== expectedChecksum) {
      return null;
    }

    // Decode the data
    const decoded = base64UrlDecode(encoded);
    const data = JSON.parse(decoded);
    
    // Validate required fields
    if (!data.amount || !data.timestamp) {
      return null;
    }

    // Check if token is too old (24 hours)
    const tokenAge = Date.now() - data.timestamp;
    const maxAge = 24 * 60 * 60 * 1000; // 24 hours
    if (tokenAge > maxAge) {
      return null;
    }

    return {
      amount: data.amount,
      customer: data.customer || undefined,
      paymentFor: data.paymentFor || undefined,
    };
  } catch (error) {
    console.error('Error decoding payment token:', error);
    return null;
  }
}

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

