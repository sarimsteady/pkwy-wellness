export const SACRED_MOVEMENT_CLASS_STRIPE_LINK = process.env.VERCEL_ENV === "production" && process.env.VERCEL_URL !== "dev.pkwywellness.com" ? "https://book.stripe.com/dRmaEW5eZaWm2tCgHr3AY07" : "https://book.stripe.com/test_6oU14mfTD1lMd8gdvf3AY04";

export const PKWY_OFFERINGS: {
    title: string;
    description: string;
    classes: number;
    price_per_class: number;
    stripe_payment_link?: string;
}[] = [
        {
            title: "Intro Class",
            description: "A one-time introduction to Women’s Pilates Sculpt. Ideal for first-time attendees who want to experience the class before committing.",
            classes: 1,
            price_per_class: 15
        },
        {
            title: "Monthly Membership",
            description: "A weekly movement ritual centered on strength, breath, and alignment. Includes four classes per month and resets monthly.",
            classes: 4,
            price_per_class: 15,
            stripe_payment_link: process.env.VERCEL_ENV === "production" && process.env.VERCEL_URL !== "dev.pkwywellness.com"
                ? "https://buy.stripe.com/4gM28q5eZ2pQfgo62N3AY05"
                : "https://buy.stripe.com/test_cNi5kC9vfc0qc4c9eZ3AY03"
        },
        {
            title: "Friendship Membership",
            description: "One membership shared between two women moving together. Includes four total classes per month to use together or separately.",
            classes: 4,
            price_per_class: 27.5,
            stripe_payment_link: process.env.VERCEL_ENV === "production" && process.env.VERCEL_URL !== "dev.pkwywellness.com"
                ? "https://buy.stripe.com/6oU14mfTD1lMd8gdvf3AY04"
                : "https://buy.stripe.com/test_8x228q8rbggGeckezj3AY02"
        },
        {
            title: "Drop-In",
            description: "A drop-in class for Women’s Pilates Sculpt. No commitment required. Ideal for those in need of a quick fix or a refresher.",
            classes: 1,
            price_per_class: 20
        },
    ];
