import Cookies from 'js-cookie';

export async function GET(req) {
    try {
        // Periksa apakah cookie authToken ada
        const token = Cookies.get('authToken');

        if (token) {
            // Jika token ada, artinya user login
            return new Response(JSON.stringify({ isLoggedIn: true }), { status: 200 });
        }

        // Jika token tidak ada, berarti user belum login
        return new Response(JSON.stringify({ isLoggedIn: false }), { status: 200 });

    } catch (error) {
        console.error('Error checking login status:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
}
