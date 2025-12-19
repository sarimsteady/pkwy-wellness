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
    <html
      lang="en"
      className={`${Fonts.sora.variable} ${Fonts.mono.variable}`}
      suppressHydrationWarning
    >
      <body className={`antialiased ${Fonts.sora.className}`} suppressHydrationWarning>
        <main>
          <Navbar />
          <div className="sticky min-h-screen h-full">
            {children}
          </div>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}