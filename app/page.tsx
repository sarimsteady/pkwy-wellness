import { Hero } from '@/components/layout/hero';
import { Pricing } from '@/components/pricing/form';
import { WaitlistSection } from '@/components/waitlist/waitlist-section';

export default function Home() {
  return (
    <div className="pt-4">
      <Hero />
      <WaitlistSection />
      <Pricing />
      {/* TODO: */}
      {/* <Services /> */}
      {/* <About /> */}
      {/* <Contact /> */}
    </div>
  );
}
