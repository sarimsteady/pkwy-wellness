import { Fonts } from "@/config/fonts";
import { Sparkles, Heart } from "lucide-react";
import Image from "next/image";

export function AboutPKWYSection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-stone-50/50">
            {/* Background Texture/Accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-stone-200 border border-stone-100 shadow-2xl group/img">
                            <Image
                                src="/misc/pilates-session-1.png"
                                alt="Samantha, Founder of PKWY Wellness"
                                fill
                                className="object-cover group-hover/img:scale-105 transition-transform duration-1000"
                            />
                        </div>

                        {/* Floating Accent */}
                        <div className="absolute -top-6 -right-6 size-24 bg-violet-500/10 rounded-full blur-2xl -z-10 animate-pulse" />
                    </div>

                    {/* Text Side */}
                    <div className="space-y-10 order-1 lg:order-2">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 border border-stone-200 rounded-full">
                                <Sparkles className="size-3.5 text-blue-500" />
                                <span className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">Our Story</span>
                            </div>

                            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 ${Fonts.sora.className} tracking-tight leading-[1.1]`}>
                                Rooted in <br />
                                <span className="text-primary italic font-light">Pittsburgh</span>
                            </h2>

                            <p className={`text-xl text-stone-600 font-light leading-relaxed max-w-xl ${Fonts.quicksand.className}`}>
                                PKWY Wellness was born out of a passion for movement and a commitment to the Pittsburgh community. Led by Samantha, our mission is to make high-quality Reform Pilates accessible, welcoming, and transformative.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8 pt-4">
                            <div className="space-y-3 p-6 bg-white rounded-3xl border border-stone-100 shadow-sm group hover:border-violet-100 transition-colors duration-500">
                                <div className="size-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 group-hover:scale-110 transition-transform duration-500">
                                    <Sparkles className="size-5" />
                                </div>
                                <h4 className={`font-bold text-stone-900 ${Fonts.sora.className}`}>Intentional Practice</h4>
                                <p className="text-sm text-stone-500 leading-relaxed font-light">
                                    We prioritize precision over pace, ensuring every movement is intentional and helps you build sustainable strength.
                                </p>
                            </div>

                            <div className="space-y-3 p-6 bg-white rounded-3xl border border-stone-100 shadow-sm group hover:border-violet-100 transition-colors duration-500">
                                <div className="size-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 group-hover:scale-110 transition-transform duration-500">
                                    <Heart className="size-5" />
                                </div>
                                <h4 className={`font-bold text-stone-900 ${Fonts.sora.className}`}>Guided Growth</h4>
                                <p className="text-sm text-stone-500 leading-relaxed font-light">
                                    Samantha brings personalized instruction to every class, ensuring you move with purpose and grace.
                                </p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <p className="text-sm text-stone-400 italic font-light">
                                &quot;We believe Pilates is for every body. Our classes are designed to challenge you while respecting your individual journey.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
        </section>
    );
}
