import { Fonts } from '@/config/fonts';
import { WaitlistForm } from './form';

export function WaitlistSection() {
  return (
    <section id="waitlist" className="bg-violet-400/10 rounded-4xl relative overflow-hidden py-20 px-4">
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center justify-center px-4 py-2 bg-violet-300/30 rounded-full">
          <span className="text-sm font-semibold text-violet-600 tracking-wide">
            JAN 2026 — COMING SOON
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h2 className={`text-5xl md:text-6xl font-light text-gray-900 ${Fonts.quicksand.className}`}>
            Women&apos;s Pilates Sculpt
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Strength × Breath × Alignment
          </p>
        </div>

        {/* Subheading */}
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Be first to know.
        </p>

        {/* Waitlist Form */}
        <WaitlistForm />

        {/* Additional Info */}
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          New classes starting January 2026. Join the waitlist to receive priority access and exclusive updates about our upcoming women&apos;s Pilates sculpt program.
        </p>
      </div>
    </section>
  );
}

