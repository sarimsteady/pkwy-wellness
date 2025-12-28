import { About } from '@/config/about';
import { GeometryDots } from '@/components/decoration/geometry-dots';
import { InstagramIcon } from '@/components/icons/instagram';
import { MailIcon, MapPin, ExternalLink, MessageCircle } from 'lucide-react';
import { Fonts } from '@/config/fonts';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const metadata = {
  title: "Contact",
  description: "Get in touch with us at PKWY Wellness",
};

export default function ContactPage() {
  return (
    <main className={`min-h-screen bg-white ${Fonts.quicksand.className} selection:bg-fuchsia-100 selection:text-fuchsia-900`}>
      <GeometryDots />

      <section className="relative pt-16 px-6 overflow-hidden">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-50 border border-stone-100 rounded-full">
            <MessageCircle className="size-4 text-fuchsia-500" />
            <span className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">Connect with us</span>
          </div>

          <div className="space-y-4">
            <h1 className={`text-5xl md:text-6xl font-bold text-stone-900 ${Fonts.sora.className} tracking-tight`}>
              Let&apos;s <span className="text-stone-400 font-light italic">Connect</span>
            </h1>
            <p className="text-xl text-stone-500 font-light leading-relaxed max-w-xl mx-auto">
              Whether you have a question about our classes or just want to say hi, we&apos;d love to hear from you.
            </p>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Email Card */}
          <div className="group relative bg-white border border-stone-100 rounded-[3rem] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] hover:border-fuchsia-200/50 transition-all duration-700">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-fuchsia-50/20 to-transparent -z-10" />

            <div className="space-y-8 flex flex-col h-full">
              <div className="size-16 rounded-3xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-fuchsia-500 group-hover:bg-fuchsia-50 transition-all duration-500">
                <MailIcon className="size-7" />
              </div>

              <div className="space-y-3">
                <h3 className={`text-2xl font-bold text-stone-900 ${Fonts.sora.className}`}>Email Us</h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  The best way to reach us for membership inquiries or scheduling help.
                </p>
              </div>

              <div className="mt-auto pt-6">
                <a href={`mailto:${About.email}`} className="block">
                  <Button size="lg" className="w-full rounded-2xl py-7 bg-stone-900 hover:bg-fuchsia-600 text-white shadow-xl shadow-stone-100 transition-all duration-300 group/btn">
                    <span className={`text-base font-semibold ${Fonts.sora.className}`}>
                      {About.email}
                    </span>
                    <ExternalLink className="size-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="group relative bg-white border border-stone-100 rounded-[3rem] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] hover:border-fuchsia-200/50 transition-all duration-700">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-fuchsia-50/20 to-transparent -z-10" />

            <div className="space-y-8 flex flex-col h-full">
              <div className="size-16 rounded-3xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-fuchsia-500 group-hover:bg-fuchsia-50 transition-all duration-500">
                <InstagramIcon />
              </div>

              <div className="space-y-3">
                <h3 className={`text-2xl font-bold text-stone-900 ${Fonts.sora.className}`}>Instagram</h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  Follow Samantha for daily updates, behind-the-scenes, and wellness inspiration.
                </p>
              </div>

              <div className="mt-auto pt-6">
                <a href={About.social.instagram} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" size="lg" className="w-full rounded-2xl py-7 border-stone-200 hover:bg-stone-50 text-stone-900 transition-all duration-300 group/btn">
                    <span className={`text-base font-semibold ${Fonts.sora.className}`}>
                      @pkwypilates
                    </span>
                    <ExternalLink className="size-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-stone-50/50 border border-stone-100 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-100 rounded-full">
                  <MapPin className="size-3.5 text-fuchsia-500" />
                  <span className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">Our Studio</span>
                </div>

                <div className="space-y-4">
                  <h2 className={`text-3xl md:text-4xl font-bold text-stone-900 ${Fonts.sora.className} tracking-tight`}>
                    In the heart of <br />
                    <span className="text-fuchsia-600 italic font-light">Pittsburgh</span>
                  </h2>
                  <p className="text-lg text-stone-500 font-light leading-relaxed">
                    {About.address.complete}
                  </p>
                </div>

                <div className="flex gap-6">
                  <a
                    href={About.address.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-fuchsia-600 transition-colors duration-300"
                  >
                    Google Maps <ExternalLink className="size-3" />
                  </a>
                  <a
                    href={About.address.appleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-fuchsia-600 transition-colors duration-300"
                  >
                    Apple Maps <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>

              {/* Studio Image */}
              <div className="relative aspect-video md:aspect-square bg-stone-200 rounded-4xl border border-stone-100 shadow-2xl overflow-hidden group/img">
                <Image
                  src="/misc/pilates-session-3.png"
                  alt="PKWY Wellness Studio"
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/5 group-hover/img:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Friendly Bottom Padding */}
      <div className="h-24" />
    </main>
  );
}
