import { ClassesSection } from "@/components/classes/classes";
import { ReformPilatesSection } from "@/components/classes/reform-pilates";
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
                <ReformPilatesSection />
            </section>
            <AboutPKWYSection />
        </main>
    )
}