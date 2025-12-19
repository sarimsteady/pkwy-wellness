'use server';

// Verify staff password
export async function verifyStaffPassword(password: string): Promise<boolean> {
    const STAFF_PASSWORD = process.env.STAFF_PASSWORD;

    if (!STAFF_PASSWORD) {
        console.warn('Warning: STAFF_PASSWORD is not set');
        return false;
    }

    if (!password || typeof password !== 'string') {
        return false;
    }
    return password === STAFF_PASSWORD;
}