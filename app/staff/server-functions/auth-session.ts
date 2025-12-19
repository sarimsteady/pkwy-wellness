'use server';

import { cookies } from 'next/headers';

// Check if user is authenticated
export async function isAuthenticated(): Promise<boolean> {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get('staff-auth');
    return authCookie?.value === 'authenticated';
}

// Set authentication cookie
export async function setAuthCookie(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set('staff-auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 hours
    });
}

// Clear authentication cookie
export async function clearAuthCookie(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete('staff-auth');
}