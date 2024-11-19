// app/api/auth/login/route.js
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        // Cek email dan password
        const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length === 0) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
        }

        const user = users[0];

        // Verifikasi password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
        }

        // Create a login cookie (you could use a token or a simple user ID)
        const response = NextResponse.json({ user: { id: user.id, name: user.name, email: user.email } });

        // Set a cookie to indicate the user is logged in (cookie expiration is optional)
        response.cookies.set('userToken', JSON.stringify({ id: user.id, name: user.name }), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Secure cookie in production
            maxAge: 3600,  // 1 hour (or longer if needed)
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
