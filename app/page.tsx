import { ClassesSection } from "@/components/classes/classes";
import { KingsleyClasses } from "@/components/classes/kingsley-classes/kingsley-classes";
import { AboutPKWYSection } from "@/components/about/about-pkwy";
import { GeometryDots } from "@/components/decoration/geometry-dots";
import { HeroSection } from "@/components/hero/hero";

export default function Page() {
    return (
        <main>
            <GeometryDots />
            <HeroSection />
            <section id="book" className="rounded-4xl">
                <ClassesSection />
                <AboutPKWYSection />
                <KingsleyClasses />
            </section>
        </main>
    )
}