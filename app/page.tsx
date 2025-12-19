import { HeroSection } from "@/components/hero/hero";
import { WaitlistSection } from "@/components/waitlist/waitlist";

export default function Page() {
    return (
        <main>
            <HeroSection />
            <section className="book bg-orange-100/10">
                <WaitlistSection />
            </section>
        </main>
    )
}