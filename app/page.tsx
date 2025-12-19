import { ClassesSection } from "@/components/classes/classes";
import { HeroSection } from "@/components/hero/hero";
import { WaitlistSection } from "@/components/waitlist/waitlist";

export default function Page() {
    return (
        <main>
            <HeroSection />
            <section className="rounded-4xl">
                <WaitlistSection />
                <ClassesSection />
            </section>
        </main>
    )
}