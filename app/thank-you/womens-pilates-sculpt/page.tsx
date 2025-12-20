import { Button } from "@/components/ui/button";
import { Fonts } from "@/config/fonts";
import { verifyStripeSession } from "@/utils/stripe-verify-session";
import { CheckCircle2, Mail, Calendar, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
    searchParams: Promise<{ session_id?: string }>;
}

export default async function ThankYouPage({ searchParams }: PageProps) {
    const { session_id } = await searchParams;
    const session = session_id ? await verifyStripeSession(session_id) : null;

    return (
        <div className={`min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 ${Fonts.quicksand.className}`}>
            <div className="max-w-2xl w-full text-center space-y-12">
                {/* Success Icon */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-orange-200 rounded-full blur-2xl opacity-50 animate-pulse" />
                        <div className="relative size-24 bg-white border border-stone-100 rounded-full flex items-center justify-center shadow-xl shadow-stone-100 animate-in zoom-in duration-500">
                            <CheckCircle2 className="size-12 text-orange-500" />
                        </div>
                    </div>
                </div>

                {/* Hero Text */}
                <div className="space-y-4">
                    <h1 className={`text-4xl md:text-5xl font-bold text-stone-900 ${Fonts.sora.className} tracking-tight`}>
                        You&apos;re in! We can&apos;t wait to see you.
                    </h1>
                    <p className="text-xl text-stone-500 font-light">
                        Your booking for <span className="text-stone-900 font-medium text-orange-600">Women’s Pilates Sculpt</span> is confirmed.
                    </p>
                </div>

                {/* Transaction Summary (Dynamic) */}
                {session && (
                    <div className="bg-stone-50/50 border border-stone-100 rounded-3xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-stone-400 font-medium uppercase tracking-widest">Amount Paid</span>
                            <span className={`text-2xl font-bold text-stone-900 ${Fonts.sora.className}`}>${session.amount}</span>
                        </div>
                    </div>
                )}

                {/* What to Expect Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="bg-white border border-stone-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="size-10 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                            <Mail className="size-5 text-orange-500" />
                        </div>
                        <h3 className={`text-lg font-bold text-stone-900 ${Fonts.sora.className} mb-2`}>Check your inbox</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">
                            We&apos;ve sent a confirmation email with your class schedule and everything you need to know.
                        </p>
                    </div>

                    <div className="bg-white border border-stone-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="size-10 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                            <Calendar className="size-5 text-orange-500" />
                        </div>
                        <h3 className={`text-lg font-bold text-stone-900 ${Fonts.sora.className} mb-2`}>Class Schedule</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">
                            Classes are every <span className="font-semibold text-stone-700">Sunday at 10:00 AM</span>. Arrive 5-10 minutes early.
                        </p>
                    </div>
                </div>

                <div className="space-y-6 pt-8">
                    <div className="flex items-center justify-center gap-2 text-stone-400 text-sm">
                        <MapPin className="size-4" />
                        <span>5528 Forbes Ave, Pittsburgh, PA 15217</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <Button variant="outline" size="lg" className="rounded-2xl px-8 border-stone-200 hover:bg-stone-50 text-stone-600 transition-all duration-300 w-full sm:w-auto">
                                <ArrowLeft className="size-4 mr-2" />
                                Back to Home
                            </Button>
                        </Link>
                        <Link href="mailto:hello@pkwywellness.com">
                            <Button size="lg" className="rounded-2xl px-8 bg-stone-900 hover:bg-orange-600 text-white shadow-xl shadow-stone-100 transition-all duration-300 w-full sm:w-auto">
                                Contact Support
                            </Button>
                        </Link>
                    </div>
                </div>

                <p className="text-xs text-stone-400 pt-8 uppercase tracking-[0.2em]">
                    PKWY Wellness &copy; {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
}
