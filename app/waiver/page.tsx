import { Metadata } from "next";
import { About } from "@/config/about";
import { Fonts } from "@/config/fonts";
import { FileText, ArrowLeft, Info, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pilates Waiver & Release of Liability",
  description: "Complete your Pilates waiver and release of liability form before participating in classes with Samantha Syed",
  openGraph: {
    title: "Pilates Waiver & Release of Liability | PKWY Wellness",
    description: "Complete your Pilates waiver and release of liability form before participating in classes.",
  },
};

export default function WaiverPage() {
  return (
    <div className={`min-h-screen bg-stone-50/50 py-12 px-4 md:px-8 ${Fonts.quicksand.className}`}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Navigation / Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center text-sm text-stone-500 hover:text-primary transition-colors duration-200 group">
              <ArrowLeft className="size-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 bg-fuchsia-50 rounded-full">
                <span className="text-[10px] font-bold text-fuchsia-600 uppercase tracking-[0.2em] flex items-center gap-2">
                  <FileText className="size-3" />
                  Required for all participants
                </span>
              </div>
              <h1 className={`text-4xl md:text-5xl font-bold text-stone-900 ${Fonts.sora.className} tracking-tight`}>
                Waiver & Release
              </h1>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfmaWp0FKWl6YY9PhiBFS8Etni2lu_ebXOuXVeausK_XdMV5g/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 rounded-2xl border border-stone-200 text-stone-600 bg-white hover:bg-stone-50 transition-colors h-10 text-sm font-medium"
            >
              Open in New Tab
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Form Area */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-stone-100 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] overflow-hidden">
              <div className="w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfmaWp0FKWl6YY9PhiBFS8Etni2lu_ebXOuXVeausK_XdMV5g/viewform?embedded=true"
                  width="100%"
                  height="1000"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full min-h-[800px] lg:min-h-[1000px]"
                  title="PKWY Wellness Waiver Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>

          {/* Sidebar Information */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white border border-stone-100 rounded-[2rem] p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3 text-stone-900">
                <div className="size-10 rounded-xl bg-fuchsia-50 flex items-center justify-center text-fuchsia-600">
                  <Info className="size-5" />
                </div>
                <h2 className={`text-xl font-bold ${Fonts.sora.className}`}>Important Notes</h2>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest">Timing</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Form takes approximately <span className="font-semibold text-stone-900">5-10 minutes</span> to complete. Please ensure all required fields are filled.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest">Confidentiality</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Your health information and personal details are kept strictly confidential and used only for your safety in class.
                  </p>
                </div>

                <div className="space-y-2 border-t border-stone-100 pt-4">
                  <ul className="space-y-3">
                    {[
                      "Required before first class",
                      "One-time submission per client",
                      "Covers health history & liability"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-stone-500">
                        <div className="size-1.5 rounded-full bg-fuchsia-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-8 space-y-6">
              <h2 className={`text-xl font-bold text-stone-900 ${Fonts.sora.className}`}>Need Help?</h2>
              <div className="space-y-4">
                <a href={`mailto:${About.email}`} className="flex items-center gap-4 group">
                  <div className="size-10 rounded-xl bg-white border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-primary transition-colors">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 font-bold uppercase tracking-widest leading-none">Email</p>
                    <p className="text-sm text-stone-700 font-medium truncate">{About.email}</p>
                  </div>
                </a>

                <a href={About.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="size-10 rounded-xl bg-white border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-fuchsia-500 transition-colors">
                    <Instagram className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 font-bold uppercase tracking-widest leading-none">Instagram</p>
                    <p className="text-sm text-stone-700 font-medium">@pkwypilates</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center pt-8 border-t border-stone-100">
          <p className="text-xs text-stone-400 uppercase tracking-[0.2em]">
            PKWY Wellness &copy; {new Date().getFullYear()} • Movement is a Form of Care
          </p>
        </div>
      </div>
    </div>
  );
}

