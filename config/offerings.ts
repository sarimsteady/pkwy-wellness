export const PKWY_OFFERINGS: {
    title: string;
    description: string;
    classes: number;
    price_per_class: number;
    stripe_payment_link: string;
}[] = [
        {
            title: "Drop-In / Intro Class",
            description: "One-time Women-Only Pilates Sculpt class. No commitment.",
            classes: 1,
            price_per_class: 15,
            stripe_payment_link: process.env.VERCEL_ENV === "production" && process.env.VERCEL_URL !== "dev.pkwywellness.com"
                ? "https://buy.stripe.com/cNi5kC9vfc0qc4c9eZ3AY03"
                : "https://buy.stripe.com/test_14A7sK6ig2kn6Nh9GA1Fe01"
        },
        {
            title: "Monthly Membership",
            description: "Includes 4 Women-Only Pilates Sculpt classes each month.",
            classes: 4,
            price_per_class: 20,
            stripe_payment_link: process.env.VERCEL_ENV === "production" && process.env.VERCEL_URL !== "dev.pkwywellness.com"
                ? "https://buy.stripe.com/8x26oG7n76G64BK62N3AY01"
                : "https://buy.stripe.com/test_8x25kCgWU0cf7Rl0601Fe02"
        },
        {
            title: "Friendship Membership",
            description: "One membership for two women. 4 Pilates Sculpt classes each month.",
            classes: 4,
            price_per_class: 30,
            stripe_payment_link: process.env.VERCEL_ENV === "production" && process.env.VERCEL_URL !== "dev.pkwywellness.com"
                ? "https://buy.stripe.com/8x228q8rbggGeckezj3AY02"
                : "https://buy.stripe.com/test_7sYcN45ec3or5Jd1a41Fe03"
        }
    ];
