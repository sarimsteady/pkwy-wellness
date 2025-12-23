import { Button } from "@/components/ui/button";
import { Fonts } from "@/config/fonts";
import { ClockIcon, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";

export function ReformPilatesSection() {
    return (
        <section className="py-6 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white border border-stone-100 rounded-[3rem] p-8 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:border-orange-200/50 transition-all duration-700">
                    {/* Background Decorative Element */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/30 to-transparent -z-10" />

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-50 border border-stone-100 rounded-full">
                                <span className="size-2 bg-orange-500 rounded-full animate-pulse" />
                                <span className="text-xs font-bold text-stone-600 uppercase tracking-widest">Off-Site Collaboration</span>
                            </div>

                            <div className="space-y-4">
                                <h2 className={`text-4xl md:text-5xl font-bold text-stone-900 ${Fonts.sora.className} tracking-tight leading-tight`}>
                                    Reform Pilates <br />
                                    <span className="text-stone-400">at Kingsley Center</span>
                                </h2>
                                <p className={`text-lg text-stone-500 font-light leading-relaxed max-w-md ${Fonts.quicksand.className}`}>
                                    Join Samantha for a specialized Reform Pilates session held every Friday and Saturday morning at Kingsley Center in Pittsburgh.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group/item">
                                    <div className="size-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover/item:text-orange-500 group-hover/item:bg-orange-50 transition-colors duration-300">
                                        <ClockIcon className="size-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-stone-900 leading-none">Fridays and Saturdays</p>
                                        <p className="text-sm text-stone-400 mt-1">Morning Sessions</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group/item">
                                    <div className="size-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover/item:text-orange-500 group-hover/item:bg-orange-50 transition-colors duration-300">
                                        <MapPin className="size-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-stone-900 leading-none">The Kingsley Association</p>
                                        <p className="text-sm text-stone-400 mt-1">
                                            6435 Frankstown Ave, Pittsburgh, PA, United States</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <a
                                    href="https://forms.office.com/pages/responsepage.aspx?id=NKzJ-y48PEyeW-KG7qO9fFm8Rhin33pIovN09xsvRc9UN1I5UUgyVE1QRVhQMUNXUkRTUDM4MjI5SS4u&route=shorturl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button size="lg" className="rounded-2xl px-8 py-7 bg-stone-900 hover:bg-orange-600 text-white shadow-xl shadow-stone-200 transition-all duration-300 group/btn">
                                        <span className={`text-base font-semibold ${Fonts.sora.className}`}>
                                            Book now
                                        </span>
                                        <ExternalLink className="size-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </a>
                            </div>
                        </div>

                        <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-stone-100 border border-stone-100 group-hover:shadow-2xl transition-all duration-700">
                            <Image
                                src="/misc/pilates-session-2.png"
                                alt="Samantha teaching Reform Pilates at LA Fitness"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay to ensure depth */}
                            <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-700" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
