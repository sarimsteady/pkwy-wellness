import { Metadata } from "next";

// Site identity and configuration
export const siteConfig = {
    name: "PKWY Wellness",
    companyName: "PKWY Wellness",
    companyLegalName: "PKWY Wellness LLC",
    url: "https://pkwywellness.com",
    description: "Transforming lives through the power of Pilates. Based in Pittsburgh, PA.",
    logo: "/branding/logo.png",
    email: "contact@pkwywellness.com",
    social: {
        instagram: "https://www.instagram.com/pkwypilates",
        instagramDM: "https://www.instagram.com/direct/t/pkwypilates"
    },
    address: {
        name: "Wilkinsburg Community Development Corporation",
        street: "727 Wood St",
        city: "Pittsburgh",
        state: "PA",
        zip: "15221",
        complete: "Wilkinsburg Community Development Corporation, 727 Wood St, Pittsburgh, PA 15221",
        googleMaps: "https://maps.app.goo.gl/PKjiwpu5dwBfbwxU7",
        appleMaps: "https://maps.apple.com/place?place-id=IBCDEB34EFC295E6B&address=1001+Wood+St%2C+Pittsburgh%2C+PA++15221%2C+United+States&coordinate=40.44396%2C-79.884904"
    }
} as const;

// Next.js metadata configuration
export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: "PKWY Wellness | Pilates | Pittsburgh, PA",
    description: "Transform your body and mind with expert Pilates instruction. Group classes, private sessions, and wellness programs. Serving Pittsburgh and surrounding areas.",
    keywords: "Pilates Pittsburgh, Pilates studio Pittsburgh PA, Pilates classes Pittsburgh, Pilates instructor Pittsburgh, wellness Pittsburgh, fitness Pittsburgh, Pilates private sessions Pittsburgh, corporate wellness Pittsburgh",
    openGraph: {
        siteName: "PKWY Wellness",
        title: {
            default: "PKWY Wellness | Pilates | Pittsburgh, PA",
            template: "%s | PKWY Wellness Pittsburgh",
        },
        description: "Transform your body and mind with expert Pilates instruction. Group classes, private sessions, and wellness programs. Serving Pittsburgh and surrounding areas.",
        url: siteConfig.url,
        images: ["/branding/logo.png"],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "PKWY Wellness | Pilates | Pittsburgh, PA",
        description: "Expert instruction, group classes, and private sessions.",
        images: ["/branding/logo.png"],
    },
    alternates: {
        canonical: siteConfig.url,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

// Legacy export for backward compatibility
export const Identity = siteConfig;
