'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Fonts } from "@/config/fonts";
import { getCustomerPortalUrl } from "@/utils/stripe-get-customer-portal-url";
import { Mail, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const result = await getCustomerPortalUrl(email);

            if (result.error) {
                setError(result.error);
            } else if (result.url) {
                window.location.href = result.url;
            }
        } catch (error) {
            console.error(error);
            setError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`min-h-[85vh] flex flex-col items-center justify-center px-4 py-20 bg-white ${Fonts.quicksand.className}`}>
            <div className="max-w-xl w-full">
                {/* Header Decoration */}
                <div className="flex flex-col items-center text-center space-y-8 mb-12">
                    <div className="space-y-4">
                        <h1 className={`text-4xl md:text-5xl font-bold text-stone-900 ${Fonts.sora.className} tracking-tight`}>
                            Manage Your <br className="hidden sm:block" />
                            <span className="text-stone-400 font-light italic">Membership</span>
                        </h1>
                        <p className="text-lg text-stone-500 font-light leading-relaxed max-w-sm mx-auto">
                            Enter your email to manage your subscriptions and billing details through our secure portal.
                        </p>
                    </div>
                </div>

                {/* Form Container */}
                <div className="bg-white border border-stone-100 rounded-[2.5rem] p-4 sm:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.02)] relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-200/50 via-violet-500/50 to-violet-200/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className={`text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] ml-2 ${Fonts.sora.className}`}>
                                Registered Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-stone-300 group-focus-within:text-violet-500 transition-colors" />
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full bg-stone-50 border-none rounded-2xl py-5 pl-14 pr-6 text-stone-900 placeholder:text-stone-300 focus:ring-2 focus:ring-violet-500/20 transition-all outline-none text-base"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-50/50 border border-red-100/50 rounded-xl p-4 animate-in fade-in slide-in-from-top-1 duration-300">
                                <p className="text-xs text-red-600 font-medium leading-relaxed">
                                    {error}
                                </p>
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={loading || !email}
                            className="w-full rounded-2xl py-8 bg-stone-900 hover:bg-violet-600 text-white shadow-xl shadow-stone-100 transition-all duration-300 disabled:opacity-50 disabled:hover:bg-stone-900 group/btn"
                        >
                            <span className={`text-base font-semibold ${Fonts.sora.className} flex items-center gap-2`}>
                                {loading ? (
                                    <>
                                        <Loader2 className="size-5 animate-spin" />
                                        Verifying Email...
                                    </>
                                ) : (
                                    <>
                                        Access Portal
                                        <ArrowRight className="size-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </span>
                        </Button>
                    </form>
                </div>

                {/* Footer Info */}
                <div className="mt-12 text-center text-sm text-stone-400 space-y-4 font-light">
                    <p>Having trouble? Contact us at <a href="mailto:hello@pkwywellness.com" className="text-stone-600 font-medium hover:text-violet-600 transition-colors">hello@pkwywellness.com</a></p>
                    <div className="pt-4 flex justify-center">
                        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full hover:bg-stone-50 transition-all group">
                            <span className="text-xs font-bold uppercase tracking-widest text-stone-400 group-hover:text-stone-900">Back to Home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
