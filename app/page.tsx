import { Hero } from "@/components/landing-page/hero";
import { WaitlistSection } from "@/components/waitlist/waitlist";

export default function Page() {
    return (
        <main>
            <Hero />
            <section className="book bg-red-100/30">
                <WaitlistSection />
            </section>
        </main>
    )
}