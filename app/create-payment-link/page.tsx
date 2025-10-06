'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Fonts } from '@/config/fonts';
import { Copy, Link } from 'lucide-react';
import { Identity } from '@/config/identity';
import { createPaymentToken, PaymentParams } from '@/lib/utils';

export default function GeneratePaymentLinkPage() {
    const [amount, setAmount] = useState('');
    const [customer, setCustomer] = useState('');
    const [paymentFor, setPaymentFor] = useState('');
    const [copied, setCopied] = useState(false);
    const [generatedLink, setGeneratedLink] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const generateLinkWithToken = useCallback(() => {
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

            const token = createPaymentToken(paymentParams);

            const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
            const params = new URLSearchParams({
                token: token,
            });

            const link = `${baseUrl}/pay?${params.toString()}`;
            setGeneratedLink(link);
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

    const copyToClipboard = async () => {
        if (generatedLink) {
            try {
                await navigator.clipboard.writeText(generatedLink);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    };

    const isValidAmount = amount && !isNaN(parseFloat(amount)) && parseFloat(amount) >= 1;

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-8">
            <div className="container mx-auto px-4 max-w-2xl">
                <Card className="w-full">
                    <CardHeader className="text-center">
                        <CardTitle className={`text-3xl ${Fonts.poppins.className}`}>
                            Generate A Payment Link
                        </CardTitle>
                        <CardDescription>
                            Create a shareable payment link for {Identity.companyLegalName}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="amount" className="text-base font-medium">
                                Payment Amount ($)
                            </Label>
                            <Input
                                id="amount"
                                type="number"
                                placeholder="25.00"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                min="1"
                                step="0.01"
                                className="text-lg"
                            />
                            <p className="text-sm text-gray-500">
                                Minimum amount: $1.00
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="paymentFor" className="text-base font-medium">
                                Payment For (optional)
                            </Label>
                            <Input
                                id="paymentFor"
                                type="text"
                                placeholder="e.g., Consultation, Private Session, Class Package"
                                value={paymentFor}
                                onChange={(e) => setPaymentFor(e.target.value)}
                                className="text-lg"
                            />
                            <p className="text-sm text-gray-500">
                                Purpose of payment
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="customer" className="text-base font-medium">
                                Customer Email (optional)
                            </Label>
                            <Input
                                id="customer"
                                type="email"
                                placeholder="customer@example.com"
                                value={customer}
                                onChange={(e) => setCustomer(e.target.value)}
                                className="text-lg"
                            />
                            <p className="text-sm text-gray-500">
                                Email address of person expected to pay the amount.
                            </p>
                        </div>

                        {isValidAmount && (
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-50 rounded-lg border">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Link className="w-4 h-4 text-gray-500" />
                                        <span className="text-sm font-medium text-gray-700">
                                            Generated Link {generatedLink && <a href={generatedLink} target="_blank" className="text-sm font-mono text-purple-800 break-all cursor-pointer hover:underline">(open)</a>}
                                        </span>
                                    </div>
                                    {isGenerating ? (
                                        <div className="text-sm text-gray-500">Generating secure link...</div>
                                    ) : generatedLink ? (
                                        <a href={generatedLink} target="_blank" className="text-sm font-mono text-purple-800 break-all cursor-pointer hover:underline">
                                            {generatedLink}
                                        </a>
                                    ) : (
                                        <div className="text-sm text-gray-500">Link will appear here</div>
                                    )}
                                </div>

                                <Button
                                    onClick={copyToClipboard}
                                    className="w-full"
                                    variant={copied ? "outline" : "default"}
                                >
                                    <Copy className="w-4 h-4 mr-2" />
                                    {copied ? "Copied!" : "Copy Link"}
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
