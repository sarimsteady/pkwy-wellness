import { Quicksand, Playfair_Display, Poppins, Dancing_Script, Crimson_Text, Sora } from "next/font/google";

export const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const dancingScript = Dancing_Script({
    variable: "--font-dancing-script",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const crimsonText = Crimson_Text({
    variable: "--font-crimson-text",
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export const sora = Sora({
    variable: "--font-sora",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const Fonts = {
    quicksand,
    playfairDisplay,
    poppins,
    dancingScript,
    crimsonText,
    sora,
};