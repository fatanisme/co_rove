// lib/session.js
import { withIronSessionApiRoute } from 'iron-session';  // Corrected import

const sessionOptions = {
    password: process.env.SESSION_SECRET,
    cookieName: 'your_cookie_name',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production', // secure cookies in production
    },
};

export function withSession(handler) {
    return withIronSessionApiRoute(handler, sessionOptions);
}
