// API untuk memeriksa status login
// app/api/auth/status/route.js
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const user = req.session.get('user');
        if (user) {
            return NextResponse.json({ loggedIn: true, user });
        } else {
            return NextResponse.json({ loggedIn: false });
        }
    } catch (error) {
        console.error('Error checking login status:', error);
        return NextResponse.json({ error: 'Failed to check login status' }, { status: 500 });
    }
}
