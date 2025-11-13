import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const STAFF_PASSWORD = process.env.STAFF_PASSWORD!;

if (!STAFF_PASSWORD) {
  console.warn('Warning: STAFF_PASSWORD is not set');
}

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password || typeof password !== 'string') {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    if (password !== STAFF_PASSWORD) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Set a session cookie
    const cookieStore = await cookies();
    cookieStore.set('staff-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return NextResponse.json(
      { success: true, message: 'Authentication successful' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Staff auth error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Logout endpoint
export async function DELETE() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('staff-auth');

    return NextResponse.json(
      { success: true, message: 'Logged out successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

