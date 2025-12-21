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
            stripe_payment_link: "https://buy.stripe.com/cNi5kC9vfc0qc4c9eZ3AY03"
        },
        {
            title: "Monthly Membership",
            description: "Includes 4 Women-Only Pilates Sculpt classes each month.",
            classes: 4,
            price_per_class: 20,
            stripe_payment_link: "https://buy.stripe.com/test_8x26oG7n76G64BK62N3AY01"
        },
        {
            title: "Friendship Membership",
            description: "One membership for two women. 4 Pilates Sculpt classes each month.",
            classes: 4,
            price_per_class: 30,
            stripe_payment_link: "https://buy.stripe.com/test_8x228q8rbggGeckezj3AY02"
        }
    ];
