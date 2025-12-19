import { JetBrains_Mono, Quicksand, Sora } from "next/font/google";

export const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const sora = Sora({
    variable: "--font-sora",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const mono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const Fonts = {
    quicksand,
    sora,
    mono
};