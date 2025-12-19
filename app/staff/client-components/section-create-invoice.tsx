'use client';

import { useState, useEffect, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CopyTextButton } from '@/components/functional/copy-button';
import { createPaymentLink, PaymentParams } from '../server-functions/create-payment-link';
import { LinkIcon } from 'lucide-react';

export function CreateInvoiceSection() {
    const [amount, setAmount] = useState('');
    const [customer, setCustomer] = useState('');
    const [paymentFor, setPaymentFor] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const generateLinkWithToken = useCallback(async () => {
        if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) < 1) {
            setGeneratedLink('');
            return;
        }

        setIsGenerating(true);

        try {
            const paymentParams: PaymentParams = {
                amount: parseFloat(amount).toFixed(2),
                customer: customer.trim() || undefined,
                paymentFor: paymentFor.trim() || undefined,
            };

            const link = await createPaymentLink(paymentParams);
            
            if (link) {
                // If server didn't provide full URL, prepend current origin
                const fullLink = link.startsWith('http') 
                    ? link 
                    : `${window.location.origin}${link}`;
                setGeneratedLink(fullLink);
            } else {
                setGeneratedLink('');
            }
        } catch (error) {
            console.error('Error generating payment link:', error);
            setGeneratedLink('');
        } finally {
            setIsGenerating(false);
        }
    }, [amount, customer, paymentFor]);

    // Auto-generate link when parameters change
    useEffect(() => {
        generateLinkWithToken();
    }, [generateLinkWithToken]);

    const isValidAmount = amount && !isNaN(parseFloat(amount)) && parseFloat(amount) >= 1;

    return (
        <main className="space-y-4">
            <section className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="amount">Payment Amount ($)</Label>
                    <Input
                        id="amount"
                        type="number"
                        placeholder="25.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="1"
                        step="0.01"
                        className="font-mono"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="paymentFor">Payment For (optional)</Label>
                    <Input
                        id="paymentFor"
                        type="text"
                        placeholder="e.g., Consultation, Private Session, Class Package"
                        value={paymentFor}
                        onChange={(e) => setPaymentFor(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="customer">Customer Email (optional)</Label>
                    <Input
                        id="customer"
                        type="email"
                        placeholder="customer@example.com"
                        value={customer}
                        onChange={(e) => setCustomer(e.target.value)}
                    />
                </div>
            </section>

            {isValidAmount && (
                <section className="space-y-2">
                    <div className="flex gap-2 items-center justify-between">
                        <div className="font-mono">
                            <p className="text-sm text-gray-600">Generated Link</p>
                        </div>
                        {generatedLink && (
                            <CopyTextButton label="Copy Link" copyText={generatedLink} />
                        )}
                    </div>
                    <div className="p-2 bg-slate-100 rounded-md">
                        {isGenerating ? (
                            <p className="font-mono text-sm text-gray-500">Generating secure link...</p>
                        ) : generatedLink ? (
                            <div className="space-y-2">
                                <a 
                                    href={generatedLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="font-mono text-sm text-primary hover:underline flex items-center gap-1"
                                >
                                    <LinkIcon className="w-3 h-3" />
                                    {generatedLink}
                                </a>
                            </div>
                        ) : (
                            <p className="font-mono text-sm text-gray-500">Link will appear here</p>
                        )}
                    </div>
                </section>
            )}
        </main>
    );
}