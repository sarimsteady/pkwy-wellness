'use server';

import { supabaseClient } from "@/utils/supabase-client";

export async function addToWaitlistAction(
    prevState: {
        success: boolean;
        error?: string;
        message?: string;
        data?: unknown;
    },
    formData: FormData
): Promise<{
    success: boolean;
    error?: string;
    message?: string;
    data?: unknown;
}> {
    'use server';
    const email = formData.get('email') as string;

    const result = await addToWaitlist(email);

    if (!result.success) {
        return { success: false, error: result.error };
    }

    return {
        success: true,
        message: "You're on the list! We'll notify you when classes open.",
        data: result.data
    };
}

async function addToWaitlist(email: string) {
    // Validate email
    const validation = validateEmail(email);
    if (!validation.valid) {
        return { success: false, error: validation.error };
    }

    // Normalize email
    const normalizedEmail = normalizeEmail(email);

    // Insert into Supabase
    const { data, error } = await supabaseClient()
        .from('waitlist')
        .insert([{ email: normalizedEmail }])
        .select();

    if (error) {
        // Check if it's a duplicate email error
        if (error.code === '23505') {
            return { success: false, error: 'This email is already on the waitlist' };
        }

        console.error('Supabase error:', error);
        return { success: false, error: 'Failed to add to waitlist' };
    }

    return {
        success: true,
        message: 'Successfully added to waitlist',
        data
    };
}

// Email validation
function validateEmail(email: string): { valid: boolean; error?: string } {
    if (!email || typeof email !== 'string') {
        return { valid: false, error: 'Email is required' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { valid: false, error: 'Invalid email format' };
    }

    return { valid: true };
}

// Normalize email (lowercase, trim)
function normalizeEmail(email: string): string {
    return email.toLowerCase().trim();
}