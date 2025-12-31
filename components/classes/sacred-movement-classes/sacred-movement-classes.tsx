import { Button } from "@/components/ui/button";
import { SACRED_MOVEMENT_CLASS_STRIPE_LINK } from "@/config/offerings";
import { Fonts } from "@/config/fonts";
import { ClockIcon, HeartIcon, UsersIcon, ExternalLink } from "lucide-react";

export function SacredMovementClasses() {
    return (
        <section id="sacred-movement-classes" className="py-12 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white border border-stone-100 rounded-[3rem] p-8 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:border-fuchsia-200/50 transition-all duration-700">
                    {/* Background Decorative Element */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-fuchsia-50/20 to-transparent -z-10" />

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center px-3 py-1 bg-fuchsia-50 rounded-full">
                                    <span className="text-[10px] font-bold text-fuchsia-600 uppercase tracking-[0.2em] flex items-center gap-2">
                                        <HeartIcon className="size-3" />
                                        Donation-Based Class
                                    </span>
                                </div>
                                <h1 className={`text-4xl md:text-5xl font-bold text-stone-900 ${Fonts.sora.className} tracking-tight leading-tight`}>
                                    Sacred Movement
                                </h1>
                                <p className={`text-lg text-stone-900 font-semibold leading-relaxed ${Fonts.quicksand.className}`}>
                                    Mother & Daughter / Caregiver & Child Movement Class
                                    <span className="block text-stone-400 font-medium text-sm mt-1 italic">
                                        Ages 0-15 years old
                                    </span>
                                </p>
                                <p className={`text-stone-500 font-light leading-relaxed max-w-md ${Fonts.quicksand.className}`}>
                                    This special class is designed for mothers and daughters, or female caregivers and their female children, to move, breathe, and connect together in a nurturing and joyful environment.
                                </p>
                                <p className={`text-stone-500 font-light leading-relaxed max-w-md ${Fonts.quicksand.className}`}>
                                    Through gentle movement, guided breathwork, and playful connection, this class supports bonding, body awareness, confidence, and shared presence.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group/item">
                                    <div className="size-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover/item:text-fuchsia-500 group-hover/item:bg-fuchsia-50 transition-colors duration-300 shrink-0">
                                        <ClockIcon className="size-5" />
                                    </div>
                                    <div className="pt-1.5">
                                        <p className="font-semibold text-stone-900 leading-none">Every Sunday</p>
                                        <p className="text-sm text-stone-400 mt-1">at 11:00 AM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group/item">
                                    <div className="size-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover/item:text-fuchsia-500 group-hover/item:bg-fuchsia-50 transition-colors duration-300 shrink-0">
                                        <UsersIcon className="size-5" />
                                    </div>
                                    <div className="pt-1.5">
                                        <p className="font-semibold text-stone-900 leading-none">Shared Connection</p>
                                        <p className="text-sm text-stone-400 mt-1 max-w-sm leading-relaxed">Connecting through movement, breathwork, and playful bonding.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-stone-50 rounded-2xl p-6 space-y-3">
                                <p className="text-sm text-stone-600 leading-relaxed font-light">
                                    <strong className="text-stone-900">Give what you can:</strong> this class is free to sign up, with a suggested donation of $10.
                                </p>
                                <p className="text-xs text-stone-400 leading-relaxed italic">
                                    <strong>100%</strong> of proceeds will be donated to organizations supporting children in need in the Pittsburgh area.
                                </p>
                            </div>

                            <div className="pt-4 space-y-4">
                                <a
                                    href={SACRED_MOVEMENT_CLASS_STRIPE_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button size="lg" className="w-full md:w-auto rounded-2xl px-8 py-7 bg-primary hover:bg-primary/80 text-white shadow-xl shadow-stone-200 transition-all duration-300 group/btn">
                                        <span className={`text-base font-semibold ${Fonts.sora.className}`}>
                                            Book Now
                                        </span>
                                        <ExternalLink className="size-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
