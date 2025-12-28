import { Button } from "@/components/ui/button";
import { About } from "@/config/about";
import { Fonts } from "@/config/fonts";
import { verifyStripeSession } from "@/utils/stripe-verify-session";
import { CheckCircle2, Mail, Calendar, ArrowLeft } from "lucide-react";
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
                        <div className="absolute inset-0 bg-fuchsia-200 rounded-full blur-2xl opacity-50 animate-pulse" />
                        <div className="relative size-24 bg-white border border-stone-100 rounded-full flex items-center justify-center shadow-xl shadow-stone-100 animate-in zoom-in duration-500">
                            <CheckCircle2 className="size-12 text-fuchsia-500" />
                        </div>
                    </div>
                </div>

                {/* Hero Text */}
                <div className="space-y-4">
                    <h1 className={`text-4xl md:text-5xl font-bold text-stone-900 ${Fonts.sora.className} tracking-tight`}>
                        You&apos;re in! We can&apos;t wait to see you.
                    </h1>
                    <p className="text-xl text-stone-500 font-light">
                        Your booking for <span className="text-stone-900 font-medium text-fuchsia-600">Women’s Pilates Sculpt</span> is confirmed.
                    </p>
                </div>

                {/* Transaction Summary (Expanded) */}
                {session && (
                    <div className="bg-stone-50 border border-stone-100 rounded-3xl p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 text-left">
                        <div className="pb-4 border-b border-stone-200/50">
                            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em] block mb-2">Customer Details</span>
                            <p className={`text-lg font-bold text-stone-900 ${Fonts.sora.className}`}>{session.customer_name}</p>
                            <p className="text-sm text-stone-500">{session.customer_email}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em] block mb-1">Date</span>
                                <p className="text-sm font-medium text-stone-700">{session.date}</p>
                            </div>
                            <div>
                                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em] block mb-1">Status</span>
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-green-700 uppercase tracking-wider border border-green-100">
                                    {session.status}
                                </span>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-between items-center border-t border-stone-200/50">
                            <span className="text-sm font-bold text-stone-900 uppercase tracking-widest">Total Paid</span>
                            <span className={`text-3xl font-bold text-stone-900 ${Fonts.sora.className}`}>${session.amount}</span>
                        </div>
                    </div>
                )}

                {/* What to Expect Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="bg-white border border-stone-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="size-10 rounded-2xl bg-fuchsia-50 flex items-center justify-center mb-6">
                            <Calendar className="size-5 text-fuchsia-500" />
                        </div>
                        <h3 className={`text-lg font-bold text-stone-900 ${Fonts.sora.className} mb-2`}>Class Schedule</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">
                            Classes are every <span className="font-semibold text-stone-700">Sunday at 10:00 AM</span> at {About.address.complete}.
                        </p>
                        <p className="text-stone-500 text-sm leading-relaxed">
                            Directions: <a href={About.address.googleMaps} className="text-fuchsia-600 font-medium">Google Maps</a>, <a href={About.address.appleMaps} className="text-fuchsia-600 font-medium">Apple Maps</a>
                        </p>
                    </div>

                    <div className="bg-white border border-stone-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="size-10 rounded-2xl bg-fuchsia-50 flex items-center justify-center mb-6">
                            <Mail className="size-5 text-fuchsia-500" />
                        </div>
                        <h3 className={`text-lg font-bold text-stone-900 ${Fonts.sora.className} mb-2`}>Manage your membership</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">
                            You can manage your membership any time <Link href="/dashboard" className="text-fuchsia-600 font-medium">here</Link> or by contacting us at {About.email}.
                        </p>
                    </div>

                </div>

                <div className="space-y-6 pt-8">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <Button variant="outline" size="lg" className="rounded-2xl px-8 border-stone-200 hover:bg-stone-50 text-stone-600 transition-all duration-300 w-full sm:w-auto">
                                <ArrowLeft className="size-4 mr-2" />
                                Back to Home
                            </Button>
                        </Link>
                        <Link href={`mailto:${About.email}`}>
                            <Button size="lg" className="rounded-2xl px-8 bg-stone-900 hover:bg-fuchsia-600 text-white shadow-xl shadow-stone-100 transition-all duration-300 w-full sm:w-auto">
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
