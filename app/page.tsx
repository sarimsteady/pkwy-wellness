import { HeroSection } from "@/components/hero/hero";
import { WaitlistSection } from "@/components/waitlist/waitlist";

export default function Page() {
    return (
        <main>
            <HeroSection />
            <section className="book bg-orange-400/10 rounded-4xl">
                <WaitlistSection />
            </section>
        </main>
    )
}