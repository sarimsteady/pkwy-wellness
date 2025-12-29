import { WomensPilatesSculptClasses } from "@/components/classes/womens-pilates-sculpt-classes/womens-pilates-sculpt-classes";
import { KingsleyClasses } from "@/components/classes/kingsley-classes/kingsley-classes";
import { SacredMovementClasses } from "@/components/classes/sacred-movement-classes/sacred-movement-classes";
import { AboutPKWYSection } from "@/components/about/about-pkwy";
import { GeometryDots } from "@/components/decoration/geometry-dots";
import { HeroSection } from "@/components/hero/hero";

export default function Page() {
    return (
        <main>
            <GeometryDots />
            <HeroSection />
            <section id="book" className="rounded-4xl">
                <WomensPilatesSculptClasses />
                <AboutPKWYSection />
                <SacredMovementClasses />
                <KingsleyClasses />
            </section>
        </main>
    )
}