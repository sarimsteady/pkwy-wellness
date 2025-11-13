import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { metadata } from "@/config/metadata";
export { metadata };

import { Fonts } from "@/config/fonts";

import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${Fonts.sora.className}`} >
        <main>
          <Navbar />
          <div className="pt-36 bg-orange-200/10">
            {children}
          </div>
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}