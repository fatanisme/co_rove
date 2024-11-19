import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About CO-ROVE</h3>
                        <p className="text-sm">
                            CO-ROVE is a platform dedicated to monitoring and preserving mangrove ecosystems in Ujung Kulon.
                            Our mission is to provide comprehensive data and insights on mangrove distribution.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                            <li><Link href="/map" className="hover:text-blue-400">Map</Link></li>
                            <li><Link href="/service" className="hover:text-blue-400">Service</Link></li>
                            <li><Link href="/pages/news" className="hover:text-blue-400">News</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-sm">Email: info@co-rove.com</p>
                        <p className="text-sm">Phone: +62 123 456 7890</p>
                        <p className="text-sm">Address: Ujung Kulon, Banten, Indonesia</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} CO-ROVE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer