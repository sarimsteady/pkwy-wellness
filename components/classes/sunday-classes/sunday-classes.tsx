'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Fonts } from "@/config/fonts";
import { PKWY_OFFERINGS } from "@/config/offerings";
import { About } from "@/config/about";
import { ClockIcon, Loader2 } from "lucide-react";
import { stripeCheckout } from "@/utils/stripe-checkout";

export function SundayClasses() {
    const [loadingOffering, setLoadingOffering] = useState<string | null>(null);

    const handleSelectOffering = async (c: typeof PKWY_OFFERINGS[0]) => {
        if (c.classes > 1) {

            if (!c.stripe_payment_link) {
                alert("Payment link not found for this offering. Please try again.");
                return;
            }

            // Keep existing behavior for memberships
            window.location.href = c.stripe_payment_link;
            return;
        }

        setLoadingOffering(c.title);
        try {
            const checkoutUrl = await stripeCheckout(
                c.price_per_class * c.classes,
                {
                    amount: (c.price_per_class * c.classes).toString(),
                    paymentFor: c.title,
                    description: c.description,
                }
            );

            if (checkoutUrl) {
                window.location.href = checkoutUrl;
            } else {
                alert("Failed to create checkout session. Please try again.");
            }
        } catch (error) {
            console.error('Checkout error:', error);
            alert("An error occurred. Please try again.");
        } finally {
            setLoadingOffering(null);
        }
    };

    return (
        <main className={`${Fonts.quicksand.className}`}>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
                    {PKWY_OFFERINGS.map((c) => {
                        const isRecurring = c.classes > 1;
                        const price = c.price_per_class;
                        const totalPrice = price * c.classes;
                        const isLoading = loadingOffering === c.title;

                        return (
                            <div
                                key={c.title}
                                className="group relative flex flex-col bg-white border border-stone-200 rounded-3xl p-8 transition-all duration-500 hover:border-fuchsia-500/30 hover:shadow-[0_20px_50_rgba(0,0,0,0.04)] h-full"
                            >
                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-8 right-8 h-1 bg-fuchsia-500/10 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                <div className="flex-1 flex flex-col text-left">
                                    <div className="mb-6">
                                        {/* Row 1: Title and Price Group */}
                                        <div className="flex justify-between items-start min-h-[56px] mb-4">
                                            <h2 className={`text-2xl font-bold text-stone-900 ${Fonts.sora.className} tracking-tight leading-tight pr-4`}>
                                                {c.title}
                                            </h2>
                                            <div className="text-right shrink-0">
                                                <div className="flex flex-col items-end">
                                                    <span className={`text-3xl font-bold text-stone-900 ${Fonts.sora.className}`}>
                                                        ${totalPrice}
                                                    </span>
                                                    <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">
                                                        {isRecurring ? 'MONTHLY' : 'ONE-TIME'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Row 2: Badge Area */}
                                        <div className="flex items-center mb-4 min-h-[24px]">
                                            {c.title === "Intro Class" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-stone-100 text-stone-600 uppercase tracking-wider border border-stone-200">
                                                    TRY IT OUT
                                                </span>
                                            )}
                                            {c.title === "Monthly Membership" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-primary uppercase tracking-wider border border-blue-100">
                                                    Popular
                                                </span>
                                            )}
                                            {c.title === "Friendship Membership" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-fuchsia-50 text-fuchsia-700 uppercase tracking-wider border border-fuchsia-100">
                                                    Best Value
                                                </span>
                                            )}
                                        </div>

                                        {/* Row 3: Description */}
                                        <div className="min-h-[48px]">
                                            <p className="text-stone-500 leading-relaxed text-sm">
                                                {c.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-3 text-sm text-stone-600">
                                            <div className="size-8 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-fuchsia-500 shrink-0">
                                                <ClockIcon className="size-4" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-stone-900 leading-none">Every Sunday</p>
                                                <p className="text-xs text-stone-400 mt-1">at 10:00 AM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4">
                                        <Button
                                            size="lg"
                                            className="w-full rounded-2xl py-7 transition-all duration-300 shadow-xl shadow-stone-200"
                                            onClick={() => handleSelectOffering(c)}
                                            disabled={isLoading || (loadingOffering !== null)}
                                        >
                                            {isLoading ? (
                                                <Loader2 className="size-4 animate-spin" />
                                            ) : (
                                                <span className={`text-base font-semibold ${Fonts.sora.className}`}>
                                                    Select Plan
                                                </span>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Offerings Footer */}
                <div className="mt-10 pt-6 border-t border-stone-100 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">

                    <div className="space-y-4">
                        <h4 className={`text-stone-900 font-bold uppercase tracking-[0.2em] text-[10px] ${Fonts.sora.className}`}>
                            Know Before You Come
                        </h4>
                        <div className="space-y-2">
                            {[
                                "The studio is located on an upper floor and requires walking up two flights of stairs.",
                                "Please wear comfortable clothing and bring a mat.",
                                "Arrive a few minutes early to get settled."
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 text-stone-500 text-sm leading-relaxed">
                                    <span className="text-stone-300 flex-shrink-0">•</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="space-y-4">
                        <h4 className={`text-stone-900 font-bold uppercase tracking-[0.2em] text-[10px] ${Fonts.sora.className}`}>
                            Membership Details
                        </h4>
                        <p className="text-stone-500 text-sm leading-relaxed max-w-md">
                            All memberships renew automatically every month. You can manage your subscription anytime through your <a href="/dashboard" className="text-primary font-medium hover:underline">account dashboard</a> or by contacting us at <a href={`mailto:${About.email}`} className="text-primary font-medium hover:underline">{About.email}</a>.
                        </p>
                    </div>

                    <div className="space-y-4 md:text-right md:flex md:flex-col md:items-end">
                        <h4 className={`text-stone-900 font-bold uppercase tracking-[0.2em] text-[10px] ${Fonts.sora.className}`}>
                            Location
                        </h4>
                        <div className="space-y-2">
                            <p className="text-stone-500 text-sm leading-relaxed">
                                {About.address.complete}
                            </p>
                            <div className="flex gap-4 md:justify-end text-xs font-bold uppercase tracking-widest pt-2">
                                <a
                                    href={About.address.googleMaps}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-stone-900 transition-colors duration-300"
                                >
                                    Google Maps
                                </a>
                                <a
                                    href={About.address.appleMaps}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-stone-900 transition-colors duration-300"
                                >
                                    Apple Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}