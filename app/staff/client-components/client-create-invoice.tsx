'use client';

import { useState, useEffect, useCallback } from 'react';
import { Label } from '@/components/ui/label';
import { CopyTextButton } from '@/components/functional/copy-button';
import { createPaymentLink, PaymentParams } from '../server-functions/create-payment-link';
import { LinkIcon, DollarSign, Mail, Package, X, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function CreateInvoiceClient() {
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

    useEffect(() => {
        generateLinkWithToken();
    }, [generateLinkWithToken]);

    const handleClear = () => {
        setAmount('');
        setCustomer('');
        setPaymentFor('');
        setGeneratedLink('');
    };

    const isValidAmount = amount && !isNaN(parseFloat(amount)) && parseFloat(amount) >= 1;

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-sm border-muted/60">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-xl font-semibold tracking-tight">Create an Invoice</CardTitle>
                        <CardDescription>Create a secure checkout link for your customer</CardDescription>
                    </div>
                    {(amount || customer || paymentFor) && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleClear}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                            <X className="w-4 h-4 mr-2" />
                            Clear
                        </Button>
                    )}
                </div>
            </CardHeader>

            <CardContent className="space-y-6 pt-2">
                <div className="space-y-2">
                    <Label htmlFor="amount" className="text-sm font-medium text-foreground/80">Payment Amount</Label>
                    <InputGroup className="h-11 focus-within:ring-primary/20">
                        <InputGroupAddon>
                            <DollarSign className="w-4 h-4 text-muted-foreground" />
                        </InputGroupAddon>
                        <InputGroupInput
                            id="amount"
                            type="number"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            min="1"
                            step="0.01"
                            className="font-mono text-lg"
                        />
                        <InputGroupAddon align="inline-end">
                            <span className="text-[10px] font-bold text-muted-foreground px-2 py-0.5 bg-muted rounded uppercase tracking-wider">USD</span>
                        </InputGroupAddon>
                    </InputGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="paymentFor" className="text-sm font-medium text-foreground/80">
                            Payment For <span className="text-muted-foreground font-normal ml-1">(optional)</span>
                        </Label>
                        <InputGroup className="h-10">
                            <InputGroupAddon>
                                <Package className="w-4 h-4 text-muted-foreground" />
                            </InputGroupAddon>
                            <InputGroupInput
                                id="paymentFor"
                                type="text"
                                placeholder="Consultation, Session, etc."
                                value={paymentFor}
                                onChange={(e) => setPaymentFor(e.target.value)}
                            />
                        </InputGroup>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="customer" className="text-sm font-medium text-foreground/80">
                            Customer Email <span className="text-muted-foreground font-normal ml-1">(optional)</span>
                        </Label>
                        <InputGroup className="h-10">
                            <InputGroupAddon>
                                <Mail className="w-4 h-4 text-muted-foreground" />
                            </InputGroupAddon>
                            <InputGroupInput
                                id="customer"
                                type="email"
                                placeholder="customer@example.com"
                                value={customer}
                                onChange={(e) => setCustomer(e.target.value)}
                            />
                        </InputGroup>
                    </div>
                </div>
            </CardContent>

            {isValidAmount && (
                <CardFooter className="flex-col items-stretch pt-6 border-t bg-muted/30">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-primary/10 rounded-full">
                                <LinkIcon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold">Your Payment Link</h4>
                                <p className="text-xs text-muted-foreground">Ready to be sent to the customer</p>
                            </div>
                        </div>
                        {generatedLink && !isGenerating && (
                            <CopyTextButton
                                label="Copy Link"
                                copyText={generatedLink}
                            />
                        )}
                    </div>

                    <div className={cn(
                        "relative group overflow-hidden rounded-lg border bg-white p-4 transition-all duration-300",
                        isGenerating ? "border-primary/20 opacity-70" : "border-border hover:border-primary/40 shadow-sm"
                    )}>
                        {isGenerating ? (
                            <div className="flex items-center gap-3">
                                <Loader2 className="w-4 h-4 animate-spin text-primary" />
                                <span className="text-sm font-mono text-muted-foreground">Generating secure link...</span>
                            </div>
                        ) : generatedLink ? (
                            <div className="flex items-center justify-between gap-4">
                                <a
                                    href={generatedLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-sm text-primary/80 hover:text-primary transition-colors truncate flex-1 min-w-0"
                                >
                                    {generatedLink}
                                </a>
                                <div className="hidden sm:block text-[10px] font-bold text-primary px-1.5 py-0.5 border border-primary/20 rounded-sm bg-primary/5 uppercase tracking-wider whitespace-nowrap">
                                    Ready
                                </div>
                            </div>
                        ) : (
                            <p className="font-mono text-sm text-muted-foreground italic text-center">Generated link will appear here</p>
                        )}
                    </div>
                </CardFooter>
            )}
        </Card>
    );
}