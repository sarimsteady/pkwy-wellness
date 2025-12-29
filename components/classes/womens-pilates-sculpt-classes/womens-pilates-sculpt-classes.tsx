import { Fonts } from "@/config/fonts";
import { WomensPilatesSculptClassesClient } from "./client";
import { GeometryDots } from "../../decoration/geometry-dots";

export async function WomensPilatesSculptClasses() {
    return (
        <main id="womens-pilates-sculpt-classes" className="bg-secondary/20 rounded-4xl relative overflow-hidden py-20 px-4">
            <GeometryDots />
            <section id="classes" className="relative max-w-7xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-200/30 rounded-full">
                    <span className="text-sm font-semibold text-primary tracking-wide">
                        NOW ENROLLING
                    </span>
                </div>
                <h1 className={`text-5xl md:text-6xl font-light text-gray-900 ${Fonts.quicksand.className}`}>
                    Women&apos;s Pilates Sculpt
                </h1>
                <div>
                    <p className="text-xl font-light text-gray-600">
                        Strength × Breath × Alignment.
                    </p>
                    <p className="text-xl font-light text-muted-foreground">
                        Every Sunday. 10 AM.
                    </p>
                </div>
                <div className="bg-muted/50 p-4 m-8 md:max-w-lg mx-auto rounded-2xl text-sm font-light text-gray-600">
                    <div className="space-y-4">
                        <p>
                            <strong className="text-black">&quot;Pilates Sculpt&quot;</strong> blends Pilates-inspired movement, strength-focused sequences, and intentional breath in a space that honors the body as a gift and movement as a form of care.
                        </p>
                        <p>
                            Classes are upbeat, music-driven, and designed to build endurance, alignment, and confidence in a welcoming women-only environment.
                        </p>
                    </div>
                </div>

                <WomensPilatesSculptClassesClient />

                <div className="pt-16 mt-16 border-t border-stone-200/50">
                    <h1 className={`my-8 text-5xl md:text-6xl font-light text-gray-900 ${Fonts.quicksand.className}`}>
                        Other Classes & Locations
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        <a
                            href="#sacred-movement-classes"
                            className="group p-6 bg-white border border-stone-100 rounded-2xl hover:border-fuchsia-500/30 hover:shadow-lg transition-all duration-300 text-left"
                        >
                            <h4 className={`text-stone-900 font-bold ${Fonts.sora.className}`}>Sacred Movement</h4>
                            <p className="text-sm text-stone-500 mt-1 font-light"><strong>Sundays at 11 AM</strong> • For Caregivers & Children</p>
                        </a>
                        <a
                            href="#kingsley-classes"
                            className="group p-6 bg-white border border-stone-100 rounded-2xl hover:border-fuchsia-500/30 hover:shadow-lg transition-all duration-300 text-left"
                        >
                            <h4 className={`text-stone-900 font-bold ${Fonts.sora.className}`}>Kingsley Center</h4>
                            <p className="text-sm text-stone-500 mt-1 font-light"><strong>Friday & Saturday mornings</strong> • Reform Pilates</p>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}