import { Fonts } from "@/config/fonts";
import { SundayClasses } from "./sunday-classes/sunday-classes";
import { GeometryDots } from "../decoration/geometry-dots";

export async function ClassesSection() {
    return (
        <main className="bg-secondary/20 rounded-4xl relative overflow-hidden py-20 px-4">
            <GeometryDots />
            <section id="classes" className="relative max-w-7xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center justify-center px-4 py-2 bg-orange-300/30 rounded-full">
                    <span className="text-sm font-semibold text-orange-600 tracking-wide">
                        NOW ENROLLING. CLASSES BEGIN JANUARY 2026.
                    </span>
                </div>
                <h1 className={`text-5xl md:text-6xl font-light text-gray-900 ${Fonts.quicksand.className}`}>
                    Women&apos;s Pilates Sculpt
                </h1>
                <p className="text-xl font-light text-gray-600">
                    Strength × Breath × Alignment
                </p>
                <SundayClasses />
            </section>
        </main>
    )
}