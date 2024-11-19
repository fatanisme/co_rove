// app/api/auth/logout/route.js
import { NextResponse } from 'next/server';

export async function POST() {
    try {
        const response = NextResponse.json({ message: 'Logged out successfully' });

        // Clear the cookie by setting its expiration date in the past
        response.cookies.set('userToken', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: -1,  // Expire the cookie immediately
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
