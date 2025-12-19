"use client";

import { Button } from "@/components/ui/button";
import { About } from "@/config/about";
import { Fonts } from "@/config/fonts";
import { useRouter } from "next/navigation";
import { GeometryDots } from "@/components/decoration/geometry-dots";

export default function Page() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center p-8">
      <GeometryDots />

      <div className="space-y-8 text-center max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-lg text-gray-400 tracking-widest">
            OOPS!
          </h1>
          <h2 className={`text-9xl font-light text-gray-900 ${Fonts.quicksand.className}`}>
            404
          </h2>
        </div>

        <div className="space-y-4">
          <h3 className={`text-4xl font-light text-gray-900 ${Fonts.quicksand.className}`}>
            Page Not Found
          </h3>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to your wellness journey with {About.companyName}.
          </p>
        </div>

        <div className={`flex gap-2 justify-center items-center ${Fonts.quicksand.className}`}>
          <Button
            onClick={handleGoHome}
            className="font-bold"
          >
            Return Home
          </Button>

          <a
            href={About.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              Contact
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
}
