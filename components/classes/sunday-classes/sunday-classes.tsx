import { Button } from "@/components/ui/button";
import { Fonts } from "@/config/fonts";
import { PKWY_OFFERINGS } from "@/config/offerings";
import { About } from "@/config/about";
import { ClockIcon } from "lucide-react";

export async function SundayClasses() {
    return (
        <main className={`${Fonts.quicksand.className}`}>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
                    {PKWY_OFFERINGS.map((c) => {
                        const isRecurring = c.classes > 1;
                        const price = c.price_per_class;
                        const totalPrice = price * c.classes;

                        return (
                            <div
                                key={c.title}
                                className="group relative flex flex-col bg-white border border-stone-200 rounded-3xl p-8 transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_20px_50_rgba(0,0,0,0.04)] h-full"
                            >
                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-8 right-8 h-1 bg-orange-500/10 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

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
                                            {c.title === "Drop-In / Intro Class" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-stone-100 text-stone-600 uppercase tracking-wider border border-stone-200">
                                                    Flex Pass
                                                </span>
                                            )}
                                            {c.title === "Monthly Membership" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-green-700 uppercase tracking-wider border border-green-100">
                                                    Popular
                                                </span>
                                            )}
                                            {c.title === "Friendship Membership" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-orange-50 text-orange-700 uppercase tracking-wider border border-orange-100">
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
                                            <div className="size-8 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-orange-500 shrink-0">
                                                <ClockIcon className="size-4" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-stone-900 leading-none">Every Sunday</p>
                                                <p className="text-xs text-stone-400 mt-1">at 10:00 AM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4">
                                        <a href={c.stripe_payment_link} className="block w-full">
                                            <Button
                                                size="lg"
                                                className="w-full rounded-2xl py-7 transition-all duration-300 shadow-xl shadow-stone-200"
                                            >
                                                <span className={`text-base font-semibold ${Fonts.sora.className}`}>
                                                    Select Plan
                                                </span>
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Offerings Footer */}
                <div className="mt-10 pt-6 border-t border-stone-100 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    <div className="space-y-4">
                        <h4 className={`text-stone-900 font-bold uppercase tracking-[0.2em] text-[10px] ${Fonts.sora.className}`}>
                            Membership Details
                        </h4>
                        <p className="text-stone-500 text-sm leading-relaxed max-w-md">
                            All memberships renew automatically every month. You can manage your subscription anytime through your <a href="/dashboard" className="text-orange-600 font-medium hover:underline">account dashboard</a> or by contacting us at <a href={`mailto:${About.email}`} className="text-orange-600 font-medium hover:underline">{About.email}</a>.
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
                                    className="text-orange-600 hover:text-stone-900 transition-colors duration-300"
                                >
                                    Google Maps
                                </a>
                                <a
                                    href={About.address.appleMaps}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-600 hover:text-stone-900 transition-colors duration-300"
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